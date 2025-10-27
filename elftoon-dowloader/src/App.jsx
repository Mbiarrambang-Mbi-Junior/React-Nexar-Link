import { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import ManhwaDetails from './components/ManhwaDetails'
import ManhwaList from './components/ManhwaList'
import NotificationModal from './components/NotificationModal'
import ReaderView from './components/ReaderView'

// Constants for the Download function
const QUALITY_MODE = 'data'; // Use high quality for downloads
const API_HOME_SERVER_URL = 'https://api.mangadex.org/at-home/server';

function App() {
    // State to manage the notification modal
    const [modal, setModal] = useState({ isVisible: false, title: '', message: '' });

    // --- Modal/Notification Functions ---

    const showModal = useCallback((title, message) => {
        setModal({ isVisible: true, title, message });
    }, []);

    const closeModal = useCallback(() => {
        setModal({ isVisible: false, title: '', message: '' });
    }, []);

    /**
     * FIX: Handles the actual download of all chapter pages using the MangaDex API.
     */
    const handleDownload = useCallback(async (title, chapterId, chapterNum) => {
        showModal('Download Initiated', `Preparing to download "${title}" Chapter ${chapterNum}. Please wait...`);

        try {
            // 1. Fetch the MangaDex@Home Server information to get page filenames and base URL
            const atHomeUrl = `${API_HOME_SERVER_URL}/${chapterId}`;
            const homeResponse = await fetch(atHomeUrl);

            if (!homeResponse.ok) {
                throw new Error(`Failed to get MangaDex@Home server. Status: ${homeResponse.status}`);
            }
            
            const homeData = await homeResponse.json();

            if (homeData.result !== 'ok' || !homeData.baseUrl) {
                throw new Error("Invalid response from MangaDex@Home server.");
            }

            const { baseUrl, chapter } = homeData;
            const { hash } = chapter;
            
            // Use the high-quality file list
            const filenames = (QUALITY_MODE === 'data') ? chapter.data : chapter.dataSaver;
            const qualityPath = (QUALITY_MODE === 'data') ? 'data' : 'data-saver';

            if (!filenames || filenames.length === 0) {
                 showModal('Download Failed', `Chapter ${chapterNum} has no pages available for download.`);
                 return;
            }
            
            // 2. Iterate and download each image
            let successCount = 0;
            for (let i = 0; i < filenames.length; i++) {
                const filename = filenames[i];
                // Construct the full image URL: <baseUrl>/<quality>/<hash>/<filename>
                const imageUrl = `${baseUrl}/${qualityPath}/${hash}/${filename}`;
                
                // Use a temporary anchor tag to force download
                const link = document.createElement('a');
                link.href = imageUrl;
                // Suggest a filename: Title - Chapter X - Page Y.jpg
                link.download = `${title.replace(/[^a-zA-Z0-9 ]/g, '')} - Ch ${chapterNum} - P ${i + 1}.jpg`;
                
                // Append, click, and remove the link element to trigger download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                successCount++;
                // Add a small delay between downloads to prevent the browser from blocking popups 
                // and to be kinder to the CDN (not strictly necessary but good practice).
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            
            showModal(
                'Download Complete!',
                `Successfully initiated download for ${successCount} pages of "${title}" Chapter ${chapterNum}. Check your browser's downloads folder.`
            );

        } catch (err) {
            console.error("Download Error:", err);
            showModal(
                'Download Error',
                `Could not download Chapter ${chapterNum}. Error: ${err.message}`
            );
        }

    }, [showModal]);

    // The component that manages the routes
    const ContentRouter = () => (
        <Routes>
            <Route path="/" element={<ManhwaList />} />
            <Route 
                path="/details/:manhwaId" 
                element={
                    <ManhwaDetails 
                        handleDownload={handleDownload} 
                    />
                } 
            />
            <Route 
                path="/reader/:manhwaId/:chapterId/:chapterNum" 
                element={
                    <ReaderView 
                        showModal={showModal}
                    />
                } 
            />
        </Routes>
    );


    return (
        <Router>
            <div className="min-h-screen bg-slate-900 font-sans text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <Header />

                    <main id="contentArea">
                        <ContentRouter />
                    </main>

                </div>
                
                <NotificationModal 
                    isVisible={modal.isVisible}
                    title={modal.title}
                    message={modal.message}
                    onClose={closeModal}
                />

                <footer className="text-center py-6 text-xs text-slate-500 border-t border-slate-800 mt-10">
                    <p className="max-w-3xl mx-auto">
                        Disclaimer: This application fetches content from the MangaDex API for demonstration purposes. Check your browser's settings for multiple file downloads.
                    </p>
                </footer>
            </div>
        </Router>
    )
}

export default App;