const express = require('express');
const axios = require('axios');
const archiver = require('archiver');
const cheerio = require('cheerio'); // NEW: For parsing HTML
const app = express();
const port = 3001;

// Base URL for MangaRead (The URL where the chapter content is located)
const BASE_URL = 'https://www.mangaread.org'; 

// Middleware (CORS settings remain the same)
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// =========================================================================
// NEW HELPER FUNCTION: Scraping logic replaces the old API call
// =========================================================================
const getChapterImageUrls = async (chapterSlug) => {
    // chapterSlug example: /manga/solo-leveling/chapter-201
    const chapterUrl = `${BASE_URL}${chapterSlug}`; 

    try {
        console.log(`Attempting to scrape URL: ${chapterUrl}`);
        
        // Fetch the HTML content of the chapter page
        const { data } = await axios.get(chapterUrl, {
             // Mimic a standard browser request
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
        });

        // Load the HTML content into Cheerio for parsing
        const $ = cheerio.load(data);
        
        // Selector for images on MangaRead chapter pages:
        // You must inspect the actual site's structure if this breaks!
        const imageElements = $('.main-reading-area img'); 
        
        const imageUrls = [];
        imageElements.each((index, element) => {
            // Get the 'src' attribute of the image
            const src = $(element).attr('src');
            if (src && src.startsWith('http')) {
                imageUrls.push(src.trim());
            }
        });
        
        if (imageUrls.length === 0) {
            throw new Error("No images found with the current scraping selector. The site's HTML structure may have changed.");
        }

        console.log(`Found ${imageUrls.length} images.`);
        return imageUrls;

    } catch (error) {
        console.error('Scraping Error:', error.message);
        // Throw an error that the main handler can catch
        throw new Error(`Failed to fetch and parse chapter page: ${error.message}`);
    }
};

// =========================================================================
// API ENDPOINT: /download/:chapterSlug
// :chapterSlug will be the URL path (e.g., /manga/solo-leveling/chapter-201)
// =========================================================================
app.get('/download/*', async (req, res) => {
    // Capture the entire path after /download/ as the chapter slug
    // Example: /download/manga/solo-leveling/chapter-201 -> chapterSlug is /manga/solo-leveling/chapter-201
    const chapterSlug = req.params[0]; 
    const downloadFileName = chapterSlug.replace(/\//g, '_').substring(1) || 'chapter';
    
    // Set response headers for a file download
    res.attachment(`${downloadFileName}.cbz`);
    res.type('application/x-cbr');

    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    archive.on('warning', (err) => {
        if (err.code !== 'ENOENT') {
            console.warn('Archiver warning:', err);
        }
    });

    archive.on('error', (err) => {
        console.error('Archiver error:', err);
        // Send a response if headers haven't been sent
        if (!res.headersSent) {
            res.status(500).send({ error: err.message });
        }
    });

    // Pipe the archive output to the response stream
    archive.pipe(res);

    try {
        const imageUrls = await getChapterImageUrls(chapterSlug);
        
        // Loop through all scraped image URLs and download them
        for (let i = 0; i < imageUrls.length; i++) {
            const imageUrl = imageUrls[i];
            const fileName = `page_${String(i + 1).padStart(3, '0')}.jpg`;

            // IMPORTANT: Fetch the image stream
            const imageStream = await axios.get(imageUrl, {
                responseType: 'stream',
                // Use the same User-Agent header as the scraping step
                headers: { 
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    // Often necessary to set the 'Referer' for image hosts
                    'Referer': BASE_URL
                }
            });

            // Append the image stream to the zip file
            archive.append(imageStream.data, { name: fileName });

            // Introduce a delay to prevent being blocked by the image host
            await new Promise(resolve => setTimeout(resolve, 300)); // Increased delay for safety
            console.log(`Added image ${i + 1}/${imageUrls.length}`);
        }

        // Finalize the archive
        await archive.finalize();

    } catch (error) {
        console.error('Download processing error:', error.message);
        if (!res.headersSent) {
            res.status(500).send({ error: 'Download failed: ' + error.message });
        }
    }
});
// =========================================================================

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});