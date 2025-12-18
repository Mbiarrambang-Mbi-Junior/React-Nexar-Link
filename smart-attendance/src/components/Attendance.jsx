import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase.config'; 
import { collection, getDocs } from "firebase/firestore";

const Attendance = () => {
    const [stats, setStats] = useState({ present: 0, absent: 0, total: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const calculateStats = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "StudentCol"));
                let p = 0;
                querySnapshot.forEach(doc => {
                    if (doc.data().status === true) p++;
                });
                setStats({
                    present: p,
                    absent: querySnapshot.size - p,
                    total: querySnapshot.size
                });
            } finally {
                setIsLoading(false);
            }
        };
        calculateStats();
    }, []);

    const attendanceRate = stats.total > 0 ? ((stats.present / stats.total) * 100).toFixed(1) : 0;

    return (
        <div className="p-6 m-4">
            <h2 className="text-xl font-bold mb-6">Attendance Analytics</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500 text-center">
                    <p className="text-gray-500 text-sm font-bold uppercase">Total Present</p>
                    <p className="text-3xl font-bold text-green-600">{stats.present}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-red-500 text-center">
                    <p className="text-gray-500 text-sm font-bold uppercase">Total Absent</p>
                    <p className="text-3xl font-bold text-red-600">{stats.absent}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500 text-center">
                    <p className="text-gray-500 text-sm font-bold uppercase">Attendance Rate</p>
                    <p className="text-3xl font-bold text-blue-600">{attendanceRate}%</p>
                </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm italic">
                    Note: These stats are calculated dynamically from the shared "StudentCol" collection.
                </p>
            </div>
        </div>
    );
};

export default Attendance;