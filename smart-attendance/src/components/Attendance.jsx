import React, { useState, useEffect } from 'react';
import { BsCheck, BsX, BsLaptop, BsDownload, BsTable } from 'react-icons/bs';
// 👈 Import the Firestore instance from your config file
import { db } from '../utils/firebase.config'; 
import { collection, getDocs } from "firebase/firestore"; // 👈 Import Firestore functions


const Attendance = () => {
    // 1. STATE to hold student data and loading status
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "StudentCol")); 
                const studentsList = [];
                
                querySnapshot.forEach((doc) => {
                    // Data is mapped as: id (Doc ID), name, email, status (fields inside the document)
                    studentsList.push({ 
                        id: doc.id,
                        ...doc.data()
                    });
                });
                
                setStudents(studentsList);
            } catch (err) {
                console.error("Error fetching student data: ", err);
                // Display error message if fetch fails (e.g., wrong collection name, bad config)
                setError("Failed to load data. Check console for details.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchStudents();
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
        <div className={`p-4 flex flex-col items-center`}>
            {/* Title */}
            <h1 className={`flex items-center gap-2 text-2xl font-bold mb-6 ${primaryTextClass}`}>
                <BsLaptop className={accentIconClass} /> Attendance Dashboard
            </h1>

            <div className="flex gap-6">

                {/* ATTENDANCE REPORT Section */}
                <div className={`rounded-lg shadow-md ${cardBgClass} self-start`}>
                    <div className={`p-4 rounded-t-lg flex items-center ${headerBgClass} ${primaryTextClass}`}>
                        <BsTable className={`mr-2 ${accentIconClass}`} />
                        <h2 className="text-lg font-semibold">ATTENDANCE REPORT</h2>
                    </div>
                    <div className="p-4">
                        <button
                            onClick={downloadReport}
                            className="mt-4 w-full bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                        >
                            <BsDownload className="inline-block mr-2" /> Download Report
                        </button>
                    </div>
                </div>
                
                {/* credentials Section */}
                <div className={`rounded-lg shadow-md ${cardBgClass} p-4`}>
                    <div className={`flex flex-col items-center w-150 ${headerBgClass} ${primaryTextClass} mb-4 rounded-lg`}>
                        <h2 className="text-lg font-semibold">CREDENTIALS</h2>
                        
                        {/* Conditional Rendering: Loading or Table */}
                        {isLoading ? (
                            <p className="p-4 text-center">Loading student data...</p>
                        ) : (
                            <div className="credential-table overflow-x-auto">
                                <table className={`w-full divide-gray-200 dark:divide-gray-600 ${primaryTextClass}`}>
                                    <thead>
                                        <tr className='border-b'>
                                            <th className='p-3 text-left text-xs font-medium uppercase tracking-wider'>Student ID</th>
                                            <th className='p-3 text-left text-xs font-medium uppercase tracking-wider'>Student Name</th>
                                            <th className='p-3 text-left text-xs font-medium uppercase tracking-wider'>Student Email</th>
                                            <th className='p-3 text-left text-xs font-medium uppercase tracking-wider'>Student Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* 3. MAP FUNCTION over the fetched 'students' state */}
                                        {students.map((student) => (
                                            <tr key={student.id} className='border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'>
                                                {/* Data Cells */}
                                                <td className='p-3 whitespace-nowrap text-sm'>{student.ID}</td>
                                                <td className='p-3 whitespace-nowrap text-sm'>{student.name}</td>
                                                <td className='p-3 whitespace-nowrap text-sm'>{student.email}</td>
                                                
                                                {/* Status Cell with Conditional Rendering based on student.status (boolean) */}
                                                <td className='p-3 whitespace-nowrap text-sm'>
                                                    {student.status ? (
                                                        <span className="flex items-center text-green-600 dark:text-green-500 font-medium">
                                                            Present <BsCheck size={20} className='ml-1' />
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center text-red-600 dark:text-red-500 font-medium">
                                                            Absent <BsX size={20} className='ml-1' />
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Attendance;