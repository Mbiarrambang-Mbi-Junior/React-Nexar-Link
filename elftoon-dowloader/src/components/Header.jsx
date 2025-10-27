import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import router hooks
import { BookOpenCheck, ChevronLeft, Search } from 'lucide-react';

const Header = () => {
    // Hooks for navigation and current location
    const navigate = useNavigate();
    const location = useLocation();

    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Determine if we are on the homepage ('/')
    const isListView = location.pathname === '/';

    const handleSearchClick = () => {
        setIsSearchClicked(true);
        // Optional: Immediately navigate to the list view when search is focused
        // navigate('/'); 
    };

    const handleGoBack = () => {
        // Use the built-in navigation history function
        navigate(-1);
    };
    
    // Logic for returning to the main list view
    const handleGoHome = () => {
        // Navigate directly to the root path
        navigate('/');
    };

    // Note: Search functionality itself is mocked here. 
    // In a real app, 'searchTerm' would be used to filter or navigate to a search results page.

    return (
        <header className="flex justify-between items-center py-4 border-b border-slate-700 mb-6">
            
            {/* 1. Back Button (Visible if NOT on the list view) */}
            {!isListView ? (
                <button 
                    className="flex items-center text-slate-300 hover:text-indigo-400 transition order-1 md:order-1" 
                    onClick={handleGoBack}
                >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back
                </button>
            ) : (
                // Add an empty space or placeholder to maintain layout when Back button is hidden
                <div className="w-14 order-1 md:order-1"></div> 
            )}

            {/* 2. Logo/Title (Always visible, navigate to home) */}
            <h1 
                className="text-3xl font-extrabold text-indigo-400 tracking-tight cursor-pointer order-2 md:order-2" 
                onClick={handleGoHome}
            >
                <BookOpenCheck className="inline-block mr-2 w-6 h-6" />
                <span className="hidden sm:inline">Elftoon Mock Reader</span>
                <span className="sm:hidden">E-Reader</span>
            </h1>

            {/* 3. Search Bar (Mocked) */}
            <div className="search flex items-center order-3 md:order-3">
                <div 
                    className="bg-slate-800 rounded-lg px-3 py-1 cursor-text flex items-center" 
                    onClick={handleSearchClick}
                >
                    <Search className="w-5 h-5 text-slate-500" />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`ml-2 bg-slate-800 text-slate-200 placeholder-slate-500 rounded-lg py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isSearchClicked ? 'w-32 sm:w-48' : 'w-0 hidden sm:block'}`}
                        // If the user clicks the whole search div, the input appears and is ready for use.
                    />
                </div>
            </div>
            
        </header>
    );
};

export default Header;