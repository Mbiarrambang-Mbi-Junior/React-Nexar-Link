import React, { useState } from 'react';
import { BsFillGearFill, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaKey, FaUserPlus } from 'react-icons/fa'; // Added FaUserPlus

function Settings({ isDarkMode, toggleDarkMode }) {
    const [apiKey, setApiKey] = useState('');

    // State for the new user form
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        role: 'User', // Default role
    });

    // Simulate a current user for role-based access control
    const [currentUser, setCurrentUser] = useState({ name: 'Admin User', role: 'Admin' });

    // Check if the current user has the 'Admin' role
    const isUserAdmin = currentUser.role === 'Admin';

    // Handler for API Key changes
    const handleApiKeyChange = (e) => {
        setApiKey(e.target.value);
    };

    // Handler for saving API Key
    const handleSaveApiKey = () => {
        alert(`API Key saved: ${apiKey}`);
    };

    // Handler for new user form changes
    const handleNewUserChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handler for adding a new user
    const handleAddUser = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Basic validation
        if (!newUser.name || !newUser.email) {
            alert('Please fill out Name and Email.');
            return;
        }
        // In a real app, you would send this data to a backend API
        console.log('New User to Add:', newUser);
        alert(`User '${newUser.name}' with role '${newUser.role}' added (simulated).`);

        // Reset the form
        setNewUser({
            name: '',
            email: '',
            role: 'User',
        });
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
                    <>
                        {/* API Key Settings */}
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

                        {/* Add User Settings (Completed Section) */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors col-span-1 md:col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-2xl text-green-600 dark:text-green-400">
                                    <FaUserPlus />
                                </span>
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Add New User</h2>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 mb-4">
                                Create a new account and assign a role within the application.
                            </p>
                            <form onSubmit={handleAddUser} className="space-y-4">
                                {/* Name Input */}
                                <input
                                    type="text"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleNewUserChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                {/* Email Input */}
                                <input
                                    type="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleNewUserChange}
                                    placeholder="Email Address"
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                {/* Role Selection */}
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <label htmlFor="role" className="text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap">
                                        User Role:
                                    </label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={newUser.role}
                                        onChange={handleNewUserChange}
                                        className="flex-1 p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none bg-no-repeat bg-[length:1.2em] bg-[right_0.75em_center] transition-colors"
                                        style={{backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='${isDarkMode ? '%239ca3af' : '%234b5563'}' d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/%3E%3C/svg%3E")`}}
                                    >
                                        <option value="User">User</option>
                                        <option value="Editor">Editor</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-600 text-white font-bold rounded-lg transition-colors duration-200"
                                >
                                    <FaUserPlus className="inline-block mr-2" /> Add User
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Settings;