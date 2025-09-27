import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsDisplay } from 'react-icons/bs';

function DashboardName({ isDarkMode }) {
    // Keep only the state for dashboardName
    const [dashboardName, setDashboardName] = useState('');
    const navigate = useNavigate();

    // Renamed and simplified the handler to only process the dashboardName
    const handleDashboardNameSubmit = (e) => {
         e.preventDefault();
        console.log('Dashboard Name Submitted:', dashboardName);
        alert(`Dashboard Name "${dashboardName}" submitted successfully!`);
        setDashboardName('');
        navigate('/dashboard');
        
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className={`w-full max-w-md p-8 rounded-xl shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
                
                {/* Header */}
                <div className="text-center mb-8">
                    {/* Updated Icon and Header Text */}
                    <BsDisplay className={`mx-auto text-5xl mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <h1 className="text-3xl font-extrabold">Set Dashboard Name</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Choose a unique name for your dashboard</p>
                </div>
                
                {/* Form */}
                <form onSubmit={handleDashboardNameSubmit} className="space-y-6">
                    
                    {/* Dashboard Name Input */}
                    <div className="relative">
                        <BsDisplay className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Dashboard Name"
                            value={dashboardName}
                            onChange={(e) => setDashboardName(e.target.value)}
                            required
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                                : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'}`} />
                    </div>
                    {/* Submit Button */}
                    <button
                        type='submit'
                        className={`w-full py-3 rounded-lg font-bold text-lg hover:cursor-pointer shadow-md transition-colors duration-200 ${isDarkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                        Submit Dashboard Name
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DashboardName;