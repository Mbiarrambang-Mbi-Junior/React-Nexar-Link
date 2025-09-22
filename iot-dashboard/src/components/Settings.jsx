import React, { useState } from 'react';
import { BsFillGearFill, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';

function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [apiKey, setApiKey] = useState('');

  // Simulate a current user for role-based access control
  const [currentUser, setCurrentUser] = useState({ name: 'Admin User', role: 'Admin' });

  // Check if the current user has the 'Admin' role
  const isUserAdmin = currentUser.role === 'Admin';

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleSaveApiKey = () => {
    alert(`API Key saved: ${apiKey}`);
  };

  return (
    <div className={`p-4 sm:p-6 lg:p-8 ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
        <BsFillGearFill />
        Settings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Theme Settings Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between transition-colors">
          <div className="flex items-center gap-4">
            <span className="text-2xl text-yellow-500">
              {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
            </span>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Theme</h2>
              <p className="text-gray-500 dark:text-gray-400">Toggle between light and dark mode.</p>
            </div>
          </div>
          <div
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={toggleDarkMode}
          >
            <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </div>
        </div>

        {/* Conditional rendering for Admin-only settings */}
        {isUserAdmin && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl text-purple-600">
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
                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSaveApiKey}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200"
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