import React from 'react';
import { useState, useRef } from 'react';

function Form() {
    const inputRef = useRef(null);
    const [link, setLink] = useState('');
    
    // ====================================================================
    // NEW HELPER FUNCTION: Extracts the Chapter UUID from the URL
    // ====================================================================
    const extractChapterId = (url) => {
        const regex = /(?:chapter|title)\/([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})/;
        const match = url.match(regex);
        
        // Return the first captured group (the UUID) or null
        return match ? match[1] : null;
    };
    // ====================================================================

    const handleDownload = async (e) => {
        e.preventDefault();
        
        // Use the value directly from the ref
        const rawLink = inputRef.current.value.trim(); 

        // 1. Extract the Chapter ID from the user-provided link
        const chapterId = extractChapterId(rawLink);

        if (!chapterId) {
            alert('Invalid MangaDex Chapter URL/ID entered. Please check the link format.');
            console.error('Failed to parse a valid Chapter ID from:', rawLink);
            return; // Stop the download if the ID is invalid
        }

        const serverUrl = `http://localhost:3001/download/${chapterId}`;

        try {
            // ... (rest of the download logic is fine)
            // Fetch the file stream from your proxy server
            const response = await fetch(serverUrl);

            // Add an explicit check for a non-CBZ response (e.g., when server sends JSON error)
            const contentType = response.headers.get('content-type');
            if (!response.ok && contentType && contentType.includes('application/json')) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Download request failed on server.');
            }
            if (!response.ok) {
                // Handle non-JSON errors (like a 404/500 that didn't return JSON)
                throw new Error(`Server returned status ${response.status}: Failed to get file.`);
            }

            const blob = await response.blob();

            // *** Client-Side File Saving Logic ***
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            // Use the chapter ID for the filename
            a.download = `${chapterId}.cbz`;
            document.body.appendChild(a);
            a.click();

            window.URL.revokeObjectURL(url);
            a.remove();
            // *** End Client-Side File Saving Logic ***

            console.log(`Download for Chapter ${chapterId} started.`);

        } catch (error) {
            console.error('Download initiation failed:', error.message);
            alert(`Download Error: ${error.message}. Check console for details.`);
        }
    };

    return (
        <>
            <form onSubmit={handleDownload}>
                <input
                    type="text"
                    placeholder='Paste MangaDex Chapter URL or ID here' // Updated placeholder
                    onChange={(e) => setLink(e.target.value)} // Still updates state if needed
                    ref={inputRef} // Attaches the ref
                />
                <button type="submit" disabled={!link.trim()}>
                    Download
                </button>
            </form>
        </>
    );
}

export default Form;