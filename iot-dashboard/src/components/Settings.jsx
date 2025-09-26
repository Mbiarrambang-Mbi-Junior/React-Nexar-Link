import React, { useState } from 'react';
import { BsFillGearFill, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';

function Settings({ isDarkMode, toggleDarkMode }) {
    const [apiKey, setApiKey] = useState('');

    // Simulate a current user for role-based access control
    const [currentUser, setCurrentUser] = useState({ name: 'Admin User', role: 'Admin' });

    // Check if the current user has the 'Admin' role
    const isUserAdmin = currentUser.role === 'Admin';

    const handleApiKeyChange = (e) => {
        setApiKey(e.target.value);
    };

    const handleSaveApiKey = () => {
        alert(`API Key saved: ${apiKey}`);
    };

    return (
        // Main container dark mode bg/text already set
        <div className={`p-4 sm:p-6 lg:p-8 ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
            {/* Title and Icon color for dark mode */}
            <h1 className="text-3xl font-bold text-teal-400 mb-6 flex items-center gap-2">
                <BsFillGearFill className="text-blue-600 dark:text-blue-400" />
                Settings
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Theme Settings Card (Background and text are fine) */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between transition-colors">
                    <div className="flex items-center gap-4">
                        {/* ICON COLOR FIX: Use conditional colors for better contrast in dark mode */}
                        <span className="text-2xl text-yellow-500 dark:text-yellow-300">
                            {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
                        </span>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Theme</h2>
                            <p className="text-gray-500 dark:text-gray-400">Toggle between light and dark mode.</p>
                        </div>
                    </div>
                    <div
                        // Toggle track colors are fine
                        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
                        onClick={toggleDarkMode}
                    >
                        <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                </div>

                {/* Conditional rendering for Admin-only settings (Background and text are fine) */}
                {isUserAdmin && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            {/* ICON COLOR FIX: Adjust color for dark mode contrast */}
                            <span className="text-2xl text-purple-600 dark:text-purple-400">
                                <FaKey />
                            </span>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">API Key</h2>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Configure your application's API key for external services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={apiKey}
                                onChange={handleApiKeyChange}
                                placeholder="Enter your API key"
                                // Input field dark mode styling is mostly correct
                                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                            />
                            {/* BUTTON FIX: Apply dark mode background and hover styling */}
                            <button
                                onClick={handleSaveApiKey}
                                className="px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold rounded-lg transition-colors duration-200"
                            >
                                Save Key
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Settings;