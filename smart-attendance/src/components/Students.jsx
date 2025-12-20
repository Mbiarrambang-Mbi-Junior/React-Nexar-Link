import React, { useState, useEffect } from 'react';
import { BsCheck, BsX, BsPencilSquare, BsTrash, BsEye, BsPlus } from 'react-icons/bs'; 
import { db } from '../utils/firebase.config'; 
// 1. Import serverTimestamp from firestore
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

const Students = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', ID: '', status: true });

    const fetchStudents = async () => {
        setIsLoading(true);
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

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleAddStudent = async (e) => {
        e.preventDefault();
        try {
            // 2. Add serverTimestamp() to the document
            const dataToSave = {
                ...formData,
                createdAt: serverTimestamp() 
            };
            
            await addDoc(collection(db, "StudentCol"), dataToSave);
            setShowModal(false);
            setFormData({ name: '', email: '', ID: '', status: true });
            fetchStudents();
        } catch (err) {
            alert("Error adding student: " + err.message);
        }
    };

    // 3. Helper function to format the Firebase Timestamp into a readable string
    const formatTime = (timestamp) => {
        if (!timestamp) return "--:--";
        // Firebase timestamps have a .toDate() method
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg m-4">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-xl font-bold text-gray-800">Student Management</h2>
                <button 
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <BsPlus size={20} /> Add Student
                </button>
            </div>

            {/* MODAL OVERLAY */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
                        <h3 className="text-lg font-bold mb-4">Add New Student</h3>
                        <form onSubmit={handleAddStudent}>
                            <div className="mb-3">
                                <label className="block text-sm font-medium">Student ID</label>
                                <input required className="w-full border p-2 rounded mt-1" value={formData.ID}
                                    onChange={(e) => setFormData({...formData, ID: e.target.value})} placeholder="e.g. STU-001" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium">Full Name</label>
                                <input required className="w-full border p-2 rounded mt-1" value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium">Email</label>
                                <input required type="email" className="w-full border p-2 rounded mt-1" value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Status</label>
                                <select className="w-full border p-2 rounded mt-1" value={formData.status}
                                    onChange={(e) => setFormData({...formData, status: e.target.value === 'true'})} >
                                    <option value="true">Present</option>
                                    <option value="false">Absent</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save Student</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* TABLE SECTION */}
            {isLoading ? <p>Loading...</p> : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100 uppercase text-xs text-gray-600">
                                <th className="p-3 border">ID</th>
                                <th className="p-3 border">Name</th>
                                <th className="p-3 border">Email</th>
                                <th className="p-3 border">Created At</th>
                                <th className="p-3 border">Status</th>
                                <th className="p-3 border text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((s) => (
                                <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-3 border">{s.ID}</td>
                                    <td className="p-3 border font-medium">{s.name}</td>
                                    <td className="p-3 border">{s.email}</td>
                                    {/* 4. Display formatted server time */}
                                    <td className="p-3 border text-gray-500 text-sm">{formatTime(s.createdAt)}</td>
                                    <td className="p-3 border">
                                        {s.status ? 
                                            <span className="text-green-600 font-medium flex items-center gap-1"><BsCheck /> Present</span> 
                                            : <span className="text-red-600 font-medium flex items-center gap-1"><BsX /> Absent</span>
                                        }
                                    </td>
                                    <td className="p-3 border text-center">
                                        <div className="flex justify-center gap-2">
                                            <button className="p-2 bg-blue-100 text-blue-600 rounded"><BsEye /></button>
                                            <button className="p-2 bg-yellow-100 text-yellow-600 rounded"><BsPencilSquare /></button>
                                            <button className="p-2 bg-red-100 text-red-600 rounded"><BsTrash /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Students;