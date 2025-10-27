import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

// Assuming you have a default image for fallbacks
const DEFAULT_COVER_URL = 'https://placehold.co/150x225/1e293b/94a3b8?text=No+Cover'; 

// ManhwaList now takes no props (or only other non-navigation props)
// The `Maps` prop is removed and replaced by the hook.
const ManhwaList = () => {
    // Get the navigation function from react-router-dom
    const navigate = useNavigate(); 
    
    const [manhwaData, setManhwaData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Official MangaDex API endpoint for a list of titles (using "manga" as the resource type)
    const API_URL = 'https://api.mangadex.org/manga';
    
    // Parameters to filter the list.
    const QUERY_PARAMS = new URLSearchParams([
        ['limit', '20'],
        ['order[followedCount]', 'desc'],
        ['contentRating[]', 'safe'],
        ['contentRating[]', 'suggestive'],
        ['contentRating[]', 'erotica']
    ]).toString();

    useEffect(() => {
        const fetchMangaDexList = async () => {
            setIsLoading(true);
            setError(null);
            
            try {
                const fullUrl = `${API_URL}?${QUERY_PARAMS}`;
                const response = await fetch(fullUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}. Could not reach MangaDex API.`);
                }

                const jsonResponse = await response.json();
                
                const titles = jsonResponse.data;
                
                const simplifiedTitles = titles.map(item => {
                    const title = item.attributes.title.en || Object.values(item.attributes.title)[0] || 'Untitled';
                    
                    const coverRelationship = item.relationships.find(rel => rel.type === 'cover_art');
                    const coverId = coverRelationship ? coverRelationship.id : null;

                    const genreTag = item.attributes.tags.find(tag => tag.type === 'tag');
                    const genre = genreTag ? genreTag.attributes.name.en || Object.values(genreTag.attributes.name)[0] : 'Various';

                    return {
                        id: item.id,
                        title: title,
                        status: item.attributes.status.charAt(0).toUpperCase() + item.attributes.status.slice(1),
                        genre: genre,
                        coverId: coverId,
                        coverUrl: null,
                    };
                });
                
                setManhwaData(simplifiedTitles);
                
                // **STEP 2: Fetch Cover Art URLs**
                await fetchCoverArt(simplifiedTitles);

            } catch (err) {
                console.error("MangaDex Fetch Error:", err);
                setError(err.message);
                setManhwaData([]);
            } finally {
                setIsLoading(false); 
            }
        };
        
        // Helper function to fetch cover art URLs
        const fetchCoverArt = async (titles) => {
            const coverIds = titles.map(t => t.coverId).filter(id => id !== null);
            if (coverIds.length === 0) return;

            try {
                const coverUrlEndpoint = 'https://api.mangadex.org/cover';
                const coversResponse = await fetch(`${coverUrlEndpoint}?ids[]=${coverIds.join('&ids[]=')}&limit=${coverIds.length}`);
                
                if (!coversResponse.ok) throw new Error("Failed to fetch cover art.");
                
                const coversJson = await coversResponse.json();
                const coverMap = coversJson.data.reduce((map, cover) => {
                    // Find the Manga ID associated with the cover
                    const mangaRelationship = cover.relationships.find(rel => rel.type === 'manga');
                    const mangaId = mangaRelationship ? mangaRelationship.id : null;
                    const fileName = cover.attributes.fileName;
                    
                    // Construct the full image URL using the MangaDex image service
                    if (mangaId) {
                         // Using .256.jpg for a small thumbnail image
                        map[mangaId] = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}.256.jpg`;
                    }
                    return map;
                }, {});

                // Update state with the final cover URLs
                setManhwaData(prevData => 
                    prevData.map(manhwa => ({
                        ...manhwa,
                        coverUrl: coverMap[manhwa.id] || DEFAULT_COVER_URL, 
                    }))
                );

            } catch (error) {
                console.error("Cover Art Fetch Error:", error);
            }
        };

        fetchMangaDexList();

    }, []); // Empty dependency array means it runs once on mount

    // --- Conditional Rendering ---
    if (isLoading) {
        return <div className="text-center py-20 text-indigo-400">Loading Titles from MangaDex...</div>;
    }

    if (error) {
        return <div className="text-center py-20 text-red-500">Error: {error}. Could not fetch data.</div>;
    }

    if (manhwaData.length === 0) {
        return <div className="text-center py-20 text-slate-400">No titles found on MangaDex with current filters.</div>;
    }

    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-slate-200 border-b border-slate-700 pb-2">
                Popular Titles from MangaDex.org
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {manhwaData.map(manhwa => (
                    <div 
                        key={manhwa.id} 
                        className="bg-slate-800 p-3 rounded-xl shadow-lg hover:bg-slate-700 transition duration-300 cursor-pointer group" 
                        // FIX: Use the router's navigate to push to the /details/:manhwaId path
                        onClick={() => navigate(`/details/${manhwa.id}`)} 
                    >
                        <div className="w-full h-48 sm:h-64 mb-3 overflow-hidden rounded-lg">
                            <img 
                                src={manhwa.coverUrl || DEFAULT_COVER_URL} 
                                alt={`${manhwa.title} Cover`} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                        <h3 className="text-lg font-semibold truncate text-white">{manhwa.title}</h3>
                        <p className="text-sm text-indigo-400">{manhwa.genre}</p>
                        <span className={`text-xs ${manhwa.status === 'Completed' ? 'text-emerald-400' : 'text-amber-400'} font-medium`}>
                            {manhwa.status}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ManhwaList;