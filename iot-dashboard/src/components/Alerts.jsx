import React, { useState } from 'react';
import { BsBellFill, BsXCircleFill, BsCheckCircleFill, BsExclamationTriangleFill, BsExclamationCircleFill } from 'react-icons/bs';
import { FaPlusCircle } from 'react-icons/fa';

// Mock data for initial alerts
const mockAlerts = [
    { id: 1, message: 'Your payment was processed successfully.', type: 'success' },
    { id: 2, message: 'Warning: The device temperature is rising.', type: 'warning' },
    { id: 3, message: 'Error: Connection lost. Please check your network.', type: 'error' },
];

function Alerts({ isDarkMode }) {
    const [alerts, setAlerts] = useState(mockAlerts);
    const [newAlert, setNewAlert] = useState({ message: '', type: 'error' });

    // Function to remove an alert
    const dismissAlert = (id) => {
        setAlerts(alerts.filter(alert => alert.id !== id));
    };

    // Function to get the correct icon based on alert type
    const getAlertIcon = (type) => {
        switch (type) {
            case 'success':
                return <BsCheckCircleFill />;
            case 'warning':
                return <BsExclamationTriangleFill />;
            case 'error':
                return <BsXCircleFill />;
            default:
                return <BsExclamationCircleFill />;
        }
    };

    // Function to get classes for alert types (already dark mode compatible)
    const getAlertClasses = (type) => {
        switch (type) {
            case 'success':
                return 'bg-green-100 text-green-700 border-green-400 dark:bg-green-900 dark:text-green-300 dark:border-green-700';
            case 'warning':
                return 'bg-yellow-100 text-yellow-700 border-yellow-400 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-700';
            case 'error':
                return 'bg-red-100 text-red-700 border-red-400 dark:bg-red-900 dark:text-red-300 dark:border-red-700';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700';
        }
    };

    // Define consistent colors for general components
    const primaryTextClass = 'text-gray-800 dark:text-gray-100';
    const cardBgClass = 'bg-white dark:bg-gray-800';
    const accentColorClass = 'text-blue-600 dark:text-blue-400';
    const buttonBgClass = 'bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600';
    const inputBorderClass = 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100';


    const handleSubmit = (e) => {
        e.preventDefault();
        const alertToAdd = {
            id: Date.now(),
            message: newAlert.message,
            type: newAlert.type,
        };
        setAlerts([alertToAdd, ...alerts]);
        setNewAlert({ message: '', type: 'error' });
    };

    return (
        // Main container dark mode bg/text already set
        <div className={`p-4 rounded-lg shadow-md min-h-screen ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
            {/* Title */}
            <h1 className={`flex items-center gap-2 text-2xl font-bold mb-6 ${primaryTextClass}`}>
                <BsBellFill size={28} className={accentColorClass} /> Alerts
            </h1>

            {/* Create New Alert Form */}
            <div className={`alert-form-container p-6 rounded-lg shadow-lg mb-6 ${cardBgClass}`}>
                <h2 className={`text-xl font-semibold mb-4 ${primaryTextClass}`}>Create New Alert</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        {/* Label text color */}
                        <label className={`block text-sm font-bold mb-2 ${primaryTextClass}`}>
                            Alert Message
                        </label>
                        <input
                            type="text"
                            value={newAlert.message}
                            onChange={(e) => setNewAlert({ ...newAlert, message: e.target.value })}
                            placeholder="Enter alert message"
                            // Input dark mode styling
                            className={`w-full p-3 border ${inputBorderClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`}
                            required
                        />
                    </div>
                    <div>
                        {/* Label text color */}
                        <label className={`block text-sm font-bold mb-2 ${primaryTextClass}`}>
                            Alert Type
                        </label>
                        <select
                            value={newAlert.type}
                            onChange={(e) => setNewAlert({ ...newAlert, type: e.target.value })}
                            // Select dark mode styling
                            className={`w-full p-3 border ${inputBorderClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`}
                        >
                            <option value="error">Error</option>
                            <option value="warning">Warning</option>
                            <option value="success">Success</option>
                        </select>
                    </div>
                    {/* Button dark mode styling */}
                    <button
                        type="submit"
                        className={`w-full ${buttonBgClass} text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200`}
                    >
                        <FaPlusCircle className="inline-block mr-2" /> Add Alert
                    </button>
                </form>
            </div>

            {/* Alert List */}
            <div className="alert-list space-y-4">
                {alerts.length === 0 ? (
                    <p className={`text-center text-gray-500 dark:text-gray-400`}>No active alerts.</p>
                ) : (
                    alerts.map(alert => (
                        <div
                            key={alert.id}
                            // Alert box classes are already dark mode compatible via getAlertClasses
                            className={`p-4 rounded-lg shadow-md flex items-center justify-between border-l-4 ${getAlertClasses(alert.type)}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">{getAlertIcon(alert.type)}</span>
                                {/* Alert message text color: use the inherited alert text color */}
                                <p className="font-medium">{alert.message}</p>
                            </div>
                            {/* Dismiss button dark mode color */}
                            <button onClick={() => dismissAlert(alert.id)} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition-colors">
                                <BsXCircleFill />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Alerts;