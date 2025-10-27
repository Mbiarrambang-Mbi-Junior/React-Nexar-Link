import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';

// Constants
const QUALITY_MODE = 'data'; // Options: 'data' (high quality) or 'data-saver' (lower quality)

const ReaderView = ({ showModal }) => {
    // Extract parameters from the URL
    const { manhwaId, chapterId, chapterNum } = useParams();
    const navigate = useNavigate();

    const [manhwaTitle, setManhwaTitle] = useState('Loading Title...');
    const [pageUrls, setPageUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- Data Fetching Effect ---
    useEffect(() => {
        if (!chapterId || !manhwaId) {
            setError("Missing Manga ID or Chapter ID. Cannot fetch pages.");
            setIsLoading(false);
            return;
        }

        // Fetch details for display purposes (only title)
        const fetchMangaTitle = async () => {
            try {
                const response = await fetch(`https://api.mangadex.org/manga/${manhwaId}`);
                if (response.ok) {
                    const json = await response.json();
                    const title = json.data.attributes.title.en || Object.values(json.data.attributes.title)[0] || 'Unknown Title';
                    setManhwaTitle(title);
                }
            } catch (e) {
                setManhwaTitle('Unknown Title');
            }
        };

        const fetchChapterPages = async () => {
            setIsLoading(true);
            setError(null);
            setPageUrls([]);
            fetchMangaTitle();

            try {
                // 1. Fetch the MangaDex@Home Server information
                const atHomeUrl = `https://api.mangadex.org/at-home/server/${chapterId}`;
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
                
                const filenames = (QUALITY_MODE === 'data') ? chapter.data : chapter.dataSaver;
                
                if (!filenames || filenames.length === 0) {
                     throw new Error("Chapter has no pages or is unavailable.");
                }

                // 2. Construct the full image URLs
                const constructedUrls = filenames.map(filename => {
                    const qualityPath = (QUALITY_MODE === 'data') ? 'data' : 'data-saver';
                    // URL format: <baseUrl>/<quality>/<hash>/<filename>
                    return `${baseUrl}/${qualityPath}/${hash}/${filename}`;
                });
                
                setPageUrls(constructedUrls);

            } catch (err) {
                console.error("MangaDex Chapter Fetch Error:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchChapterPages();
        
    }, [chapterId, manhwaId]);

    // Placeholder function for next/prev chapter navigation (requires full chapter list)
    const handleChapterChange = (direction) => {
        const action = direction === 1 ? 'Next' : 'Previous';
        // Use the modal to notify the user that full navigation isn't implemented here
        showModal('Navigation Logic', `${action} chapter functionality is disabled here because the component does not have access to the full list of Chapter IDs (UUIDs) required for routing.`);
    };

    // --- Conditional Rendering ---
    const chapterDisplayNum = chapterNum || 'N/A';

    if (isLoading) {
        return <div className="text-center py-20 text-indigo-400">Loading Chapter {chapterDisplayNum} Pages...</div>;
    }

    if (error) {
        return <div className="text-center py-20 text-red-500">Error reading chapter: {error}</div>;
    }

    return (
        <>
            <div className="text-center mb-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
                <h2 className="text-3xl font-bold text-indigo-400">{manhwaTitle}</h2>
                <p className="text-xl text-slate-300 mt-1">Chapter {chapterDisplayNum} - Reading View (Source: MangaDex)</p>
            </div>

            {/* Navigation Bar (Disabled) */}
            <div className="flex justify-center max-w-4xl mx-auto mb-6 sticky top-0 z-10 p-3 bg-slate-900/90 rounded-b-xl backdrop-blur-sm">
                <div className="flex justify-between w-full max-w-xl space-x-4">
                    <button 
                        className="bg-slate-700 text-white px-4 py-2 rounded-full hover:bg-slate-600 transition disabled:opacity-50 flex items-center font-semibold text-sm shadow-md"
                        onClick={() => handleChapterChange(-1)} 
                        disabled={true} 
                    >
                        <BsArrowLeft className="w-5 h-5 mr-1" /> Prev Chapter
                    </button>
                    <span className="text-lg font-bold text-indigo-400 self-center">Chap. {chapterDisplayNum}</span>
                    <button 
                        className="bg-slate-700 text-white px-4 py-2 rounded-full hover:bg-slate-600 transition disabled:opacity-50 flex items-center font-semibold text-sm shadow-md"
                        onClick={() => handleChapterChange(1)} 
                        disabled={true} 
                    >
                        Next Chapter <BsArrowRight className="w-5 h-5 ml-1" />
                    </button>
                </div>
            </div>

            {/* Image Reader View */}
            <div className="space-y-4 max-w-3xl mx-auto">
                {pageUrls.map((url, index) => (
                    <div key={index} className="bg-slate-700 rounded-lg overflow-hidden shadow-xl border border-slate-600">
                        <img 
                            referrerPolicy="no-referrer" // Required for cross-origin image loading from MangaDex@Home
                            src={url}
                            alt={`Chapter ${chapterDisplayNum} Page ${index + 1}`}
                            className="w-full h-auto object-cover block"
                        />
                    </div>
                ))}
                <div className="text-center py-6 bg-slate-800 rounded-lg text-slate-400 font-semibold border border-slate-700 shadow-inner">
                    --- End of Chapter {chapterDisplayNum} ---
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <button 
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
                    onClick={() => navigate(`/details/${manhwaId}`)} 
                >
                    Return to Chapter List
                </button>
            </div>
        </>
    );
};

export default ReaderView;