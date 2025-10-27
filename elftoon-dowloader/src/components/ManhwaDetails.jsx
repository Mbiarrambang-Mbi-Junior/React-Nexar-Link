import React, { useState, useEffect } from 'react';
import { BookOpen, Download } from 'lucide-react'; 
import { useParams, useNavigate } from 'react-router-dom'; // 1. Import router hooks

// Constants for MangaDex API
const DEFAULT_COVER_URL = 'https://placehold.co/150x225/1e293b/94a3b8?text=No+Cover'; 
const MANGA_BASE_URL = 'https://api.mangadex.org/manga';
const UPLOADS_BASE_URL = 'https://uploads.mangadex.org/covers';


// The component now accepts only the global `handleDownload` prop.
const ManhwaDetails = ({ handleDownload }) => {
    // 2. Get the manhwaId from the URL and the navigation function
    const { manhwaId } = useParams();
    const navigate = useNavigate();

    // State for fetched manga details
    const [manhwaDetails, setManhwaDetails] = useState(null);
    const [chapters, setChapters] = useState([]);
    
    // Separate loading states for better UX
    const [isLoadingDetails, setIsLoadingDetails] = useState(true);
    const [isLoadingChapters, setIsLoadingChapters] = useState(true);
    const [error, setError] = useState(null);

    // --- Effect 1: Fetch Manhwa Details ---
    useEffect(() => {
        if (!manhwaId) return;

        const fetchDetails = async () => {
            setIsLoadingDetails(true);
            setError(null);
            
            try {
                // Fetch details, ensuring the cover_art relationship is included
                const detailsResponse = await fetch(`${MANGA_BASE_URL}/${manhwaId}?includes[]=cover_art`);
                
                if (!detailsResponse.ok) {
                    throw new Error(`Failed to fetch manga details. Status: ${detailsResponse.status}`);
                }
                const detailsJson = await detailsResponse.json();
                const manga = detailsJson.data;

                // Process metadata for rendering
                const title = manga.attributes.title.en || Object.values(manga.attributes.title)[0] || 'Untitled';
                const synopsis = manga.attributes.description.en || 'No English synopsis available.';
                const status = manga.attributes.status.charAt(0).toUpperCase() + manga.attributes.status.slice(1);
                
                const genreTag = manga.attributes.tags.find(tag => tag.type === 'tag');
                const genre = genreTag ? genreTag.attributes.name.en || Object.values(genreTag.attributes.name)[0] : 'Various';

                // Construct Cover URL
                const coverRelationship = manga.relationships.find(rel => rel.type === 'cover_art');
                const coverFileName = coverRelationship ? coverRelationship.attributes.fileName : null;
                const coverUrl = coverFileName
                    ? `${UPLOADS_BASE_URL}/${manhwaId}/${coverFileName}.512.jpg` // Use .512.jpg thumbnail size
                    : DEFAULT_COVER_URL;
                
                setManhwaDetails({
                    id: manhwaId,
                    title,
                    synopsis,
                    status,
                    genre,
                    coverUrl,
                });
            } catch (err) {
                console.error("Manga Details Fetch Error:", err);
                setError(err.message);
            } finally {
                setIsLoadingDetails(false);
            }
        };

        fetchDetails();
    }, [manhwaId]); // Depend on manhwaId

    // --- Effect 2: Fetch Chapters ---
    useEffect(() => {
        if (!manhwaId) return; // Wait until details are fetched

        const CHAPTER_FEED_URL = `${MANGA_BASE_URL}/${manhwaId}/feed`;
        const QUERY_PARAMS = new URLSearchParams({
            'translatedLanguage[]': ['en'], // Filter for English chapters
            'order[chapter]': 'asc',        // Order chapters ascending
            'limit': 500,                   // Fetch maximum chapters
        }).toString();

        const fetchChapters = async () => {
            setIsLoadingChapters(true);
            
            try {
                const fullUrl = `${CHAPTER_FEED_URL}?${QUERY_PARAMS}`;
                const response = await fetch(fullUrl);

                if (!response.ok) {
                    throw new Error(`Failed to fetch chapter feed. Status: ${response.status}`);
                }

                const jsonResponse = await response.json();
                
                const fetchedChapters = jsonResponse.data
                    .map(item => ({
                        id: item.id, // Chapter UUID
                        number: item.attributes.chapter ? parseFloat(item.attributes.chapter) : 'N/A', // Display number
                        title: item.attributes.title || 'No Title',
                    }))
                    .filter(ch => !isNaN(ch.number))
                    .sort((a, b) => a.number - b.number); 

                setChapters(fetchedChapters);
                
            } catch (err) {
                console.error("Chapter Fetch Error:", err);
                // Only show chapter error if main details were successful
                setIsLoadingChapters(false);
            } finally {
                setIsLoadingChapters(false);
            }
        };

        fetchChapters();
    }, [manhwaId]); 

    // --- Loading and Error Handling ---

    if (isLoadingDetails) {
        return <div className="text-center py-20 text-indigo-400">Loading Manhwa Details...</div>;
    }

    if (error || !manhwaDetails) {
        return <div className="text-center py-20 text-red-500">Error loading details: {error || 'Manhwa ID not found.'}</div>;
    }
    
    const { title, synopsis, status, genre, coverUrl } = manhwaDetails;
    const isChapterLoading = isLoadingChapters && chapters.length === 0;

    // --- Component Rendering ---
    return (
        <>
            {/* Manga Details Header */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-2xl flex flex-col md:flex-row gap-6 mb-8">
                <img src={coverUrl} alt={`${title} Cover`} className="w-48 h-72 object-cover rounded-lg shadow-xl shrink-0" />
                <div>
                    <h2 className="text-4xl font-extrabold text-white mb-2">{title}</h2>
                    <p className="text-indigo-400 text-lg mb-4">
                        {genre} | {status} ({chapters.length} Chapters Found)
                    </p>
                    <p className="text-slate-300 leading-relaxed">{synopsis}</p>
                </div>
            </div>

            {/* Chapter List */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 border-b border-slate-700 pb-2 text-slate-200">Chapter List</h3>
                
                {isChapterLoading && (
                    <div className="text-center py-10 text-indigo-400">Loading Chapter List...</div>
                )}
                
                {!isChapterLoading && chapters.length === 0 && (
                    <div className="text-center py-10 text-slate-400">No English chapters found for this title.</div>
                )}

                {!isChapterLoading && chapters.length > 0 && (
                    <ul>
                        {chapters.map(chapter => (
                            <li 
                                key={chapter.id} 
                                className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-slate-700 last:border-b-0"
                            >
                                <span className="text-lg font-medium text-slate-300 mb-2 sm:mb-0">
                                    Chapter {chapter.number} {chapter.title && `- ${chapter.title}`}
                                </span>
                                <div className="space-x-3 flex">
                                    {/* FIX: Use router navigate to push to the /reader path */}
                                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition flex items-center"
                                        onClick={() => navigate(`/reader/${manhwaId}/${chapter.id}/${chapter.number}`)}>
                                        <BookOpen className="w-4 h-4 mr-1" />
                                        Read
                                    </button>
                                    
                                    {/* Download still uses the prop handler */}
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition flex items-center"
                                        onClick={() => handleDownload(title, chapter.id, chapter.number)}>
                                        <Download className="w-4 h-4 mr-1" />
                                        Download
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default ManhwaDetails;