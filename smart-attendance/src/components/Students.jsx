import React, { useState, useEffect } from 'react';
import { BsCheck, BsX } from 'react-icons/bs';
import { db } from '../utils/firebase.config'; 
import { collection, getDocs } from "firebase/firestore";

const Students = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "StudentCol")); 
                const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setStudents(list);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchStudents();
    }, []);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg m-4">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Student Management (Raw Data)</h2>
            {isLoading ? <p>Loading...</p> : (
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 uppercase text-xs">
                            <th className="p-3 border">ID</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((s) => (
                            <tr key={s.id} className="hover:bg-gray-50">
                                <td className="p-3 border">{s.ID}</td>
                                <td className="p-3 border font-medium">{s.name}</td>
                                <td className="p-3 border">{s.email}</td>
                                <td className="p-3 border">
                                    {s.status ? <span className="text-green-600 flex items-center">Present <BsCheck /></span> 
                                              : <span className="text-red-600 flex items-center">Absent <BsX /></span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Students;