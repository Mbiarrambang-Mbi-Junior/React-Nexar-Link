import React, { useState } from 'react';
import { FaDownload, FaFileExport } from 'react-icons/fa';

// Mock data for demonstration purposes
const mockSensorData = [
    { id: 1, deviceId: 'DEV-001', sensorType: 'Temperature', value: 25.5, unit: '°C', timestamp: '2023-10-27T10:00:00Z' },
    { id: 2, deviceId: 'DEV-002', sensorType: 'Humidity', value: 45, unit: '%', timestamp: '2023-10-27T10:05:00Z' },
    { id: 3, deviceId: 'DEV-003', sensorType: 'Pressure', value: 1012, unit: 'hPa', timestamp: '2023-10-27T10:10:00Z' },
    { id: 4, deviceId: 'DEV-001', sensorType: 'Temperature', value: 26.1, unit: '°C', timestamp: '2023-10-27T10:15:00Z' },
    { id: 5, deviceId: 'DEV-002', sensorType: 'Humidity', value: 47, unit: '%', timestamp: '2023-10-27T10:20:00Z' },
];

function Reports({ isDarkMode }) {
    const [data, setData] = useState(mockSensorData);

    // Function to handle data export to CSV
    const handleExport = () => {
        const headers = ["ID", "Device ID", "Sensor Type", "Value", "Unit", "Timestamp"];
        const rows = data.map(row => 
            `${row.id},${row.deviceId},${row.sensorType},${row.value},${row.unit},${row.timestamp}`
        );
        
        const csvContent = [
            headers.join(','),
            rows.join('\n')
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "sensor_data_report.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        // Main container background/text color for dark mode
        <div className={`p-4 sm:p-6 lg:p-8 ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
            <div className="flex justify-between items-center mb-6">
                {/* Title and Icon color for dark mode */}
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    <FaFileExport className="text-blue-600 dark:text-blue-400" /> Reports
                </h1>
                {/* Export button styling for dark mode */}
                <button
                    onClick={handleExport}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                >
                    <FaDownload />
                    Export Data
                </button>
            </div>

            {/* Table container background and shadow for dark mode */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md overflow-x-auto">
                {/* Table Heading color for dark mode */}
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Sensor and Device Data</h2>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    {/* Table header background for dark mode */}
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            {/* Header text color for dark mode */}
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Device ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Sensor Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Value</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Unit</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Timestamp</th>
                        </tr>
                    </thead>
                    {/* Table body background and divider for dark mode */}
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {data.map((item) => (
                            <tr key={item.id}>
                                {/* Table data text color for dark mode */}
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.deviceId}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.sensorType}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.value}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.unit}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Reports;