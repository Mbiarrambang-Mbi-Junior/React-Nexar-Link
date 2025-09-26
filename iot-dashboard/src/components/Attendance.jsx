import React, { useState, useEffect } from 'react';
import { FaTable, FaDownload, FaLaptop } from 'react-icons/fa';
import { AiOutlineLaptop } from 'react-icons/ai';
import checkin from '../assets/checkin.png';
import cross from '../assets/cross.png';

const Attendance = ({ isDarkMode }) => {
    const [liveUsers, setLiveUsers] = useState({});
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const mockLiveUsers = {
                'user123': 1,
                'user456': 0,
                'user789': 1,
            };

            const mockAttendanceData = [
                { uid: 'user123', id: 'device01', time: new Date().toISOString(), status: true },
                { uid: 'user456', id: 'device02', time: new Date().toISOString(), status: false },
                { uid: 'user789', id: 'device03', time: new Date().toISOString(), status: true },
            ];

            setLiveUsers(mockLiveUsers);
            setAttendanceData(mockAttendanceData);
        };
        fetchData();
    }, []);

    const downloadReport = () => {
        alert('Download functionality would be implemented here.');
    };

    // Define consistent color classes
    const accentIconClass = "text-green-500 dark:text-green-400";
    const primaryTextClass = "text-gray-800 dark:text-gray-100";
    const cardBgClass = "bg-white dark:bg-gray-800";
    const headerBgClass = "bg-gray-100 dark:bg-gray-700";

    return (
        <div className={`p-4 ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
            {/* Title */}
            <h1 className={`flex items-center gap-2 text-2xl font-bold mb-6 ${primaryTextClass}`}>
                <FaLaptop className={accentIconClass} /> Attendance Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* ATTENDANCE REPORT Section */}
                <div className={`rounded-lg shadow-md ${cardBgClass}`}>
                    {/* Header with contrasting background */}
                    <div className={`p-4 rounded-t-lg flex items-center ${headerBgClass} ${primaryTextClass}`}>
                        <FaTable className={`mr-2 ${accentIconClass}`} />
                        <h2 className="text-lg font-semibold">ATTENDANCE REPORT</h2>
                    </div>
                    <div className="p-4">
                        {attendanceData.length === 0 ? (
                            <p className="text-gray-500 dark:text-gray-400">No attendance data available.</p>
                        ) : (
                            <ul className="space-y-2">
                                {attendanceData.map((record, index) => (
                                    // FIXED LINE: Removed redundant cardBgClass and added explicit background/hover for better contrast
                                    <li key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 transition-all duration-150 border border-gray-200 dark:border-gray-700 hover:shadow-sm">
                                        <div className="flex items-center">
                                            <AiOutlineLaptop className={`mr-2 text-xl ${accentIconClass}`} />
                                            <span className={`font-medium ${primaryTextClass}`}>User ID: {record.uid}</span>
                                        </div>
                                        <span className={`text-sm font-semibold ${record.status ? 'text-green-500' : 'text-red-500'}`}>
                                            {record.status ? 'Present' : 'Absent'}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {/* Download button using consistent accent color */}
                        <button
                            onClick={downloadReport}
                            className="mt-4 w-full bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                        >
                            <FaDownload className="inline-block mr-2" /> Download Report
                        </button>
                    </div>
                </div>

                {/* LIVE STATUS Section */}
                <div className={`rounded-lg shadow-md ${cardBgClass}`}>
                    {/* Header with contrasting background */}
                    <div className={`p-4 rounded-t-lg flex items-center ${headerBgClass} ${primaryTextClass}`}>
                        <FaTable className={`mr-2 ${accentIconClass}`} />
                        <h2 className="text-lg font-semibold">LIVE STATUS</h2>
                    </div>
                    <div className="p-4">
                        {Object.keys(liveUsers).length === 0 ? (
                            <p className="text-gray-500 dark:text-gray-400">No data available</p>
                        ) : (
                            <div className="flex flex-wrap gap-4">
                                {Object.entries(liveUsers).map(([uid, status]) => (
                                    <div 
                                        key={uid} 
                                        // Live User Card background/border for dark mode
                                        className={`flex items-center gap-4 p-4 rounded-lg border border-gray-300 shadow-sm dark:border-gray-700 ${cardBgClass}`}
                                    >
                                        <img 
                                            src={status === 1 ? checkin : cross} 
                                            alt={status === 1 ? 'Checked In' : 'Checked Out'} 
                                            className="w-16 h-16"
                                        />
                                        <div className="flex flex-col">
                                            {/* Text color for dark mode */}
                                            <h3 className={`text-lg font-semibold ${primaryTextClass}`}>UID: {uid}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Status: {status === 1 ? 'Online' : 'Offline'}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;