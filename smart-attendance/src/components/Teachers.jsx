import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase.config'; 
import { collection, getDocs } from "firebase/firestore";

const Teachers = () => {
    // FIXED: Changed state names to 'teachers' to match your fetch logic
    const [teachers, setTeachers] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchForTeachers = async () => {
            try {
                // Ensure "TeacherCol" exists exactly with this spelling in Firebase
                const querySnapshot = await getDocs(collection(db, "TeacherCol"));
                
                const list = querySnapshot.docs.map(doc => ({ 
                    id: doc.id, 
                    ...doc.data() 
                }));

                // FIXED: Using setTeachers (which matches the state definition above)
                // Added a check to ensure 'name' exists before calling localeCompare
                setTeachers(list.sort((a, b) => (a.name || "").localeCompare(b.name || "")));
            } catch (error) {
                console.error("Error fetching teachers:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchForTeachers();
    }, []);

    if (isLoading) return <div className="p-6">Loading teachers...</div>;

    return (
        <div className="p-6 bg-white shadow-md rounded-lg m-4">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Teacher Directory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* FIXED: Changed students.map to teachers.map */}
                {teachers.length > 0 ? (
                    teachers.map(t => (
                        <div key={t.id} className="p-4 border rounded-lg flex justify-between items-center bg-gray-50 hover:shadow-sm transition-shadow">
                            <div>
                                <p className="font-bold text-gray-800">{t.name || "Unnamed Teacher"}</p>
                                <p className="text-xs text-gray-500">{t.email || "No Email Provided"}</p>
                                <p className="text-xs text-blue-600 font-semibold mt-1">{t.department || "General"}</p>
                            </div>
                            <div className={`text-xs px-2 py-1 rounded ${t.status ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                {t.status ? 'On Duty' : 'Off Duty'}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No teachers found in the collection.</p>
                )}
            </div>
        </div>
    );
};

export default Teachers;