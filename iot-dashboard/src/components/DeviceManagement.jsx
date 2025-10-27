import React, { useState, useEffect } from 'react';
import {
    BsDeviceSsdFill,
    BsLightbulbFill,
    BsFan,
    BsPlusCircleFill,
    BsTrash3Fill // for delete (optional but good practice)
} from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { MdOutlineElectricalServices } from 'react-icons/md';
import { Link } from 'react-router-dom';


// Import necessary Firebase Firestore functions
import { auth, db } from '../config/firebase';
import {
    collection,
    onSnapshot,
    doc,
    updateDoc,
    addDoc // <-- Added for creating new documents
} from "firebase/firestore";

// Utility function remains the same
const getDeviceIcon = (type) => {
    switch (type.toLowerCase()) {
        case 'light':
            return <BsLightbulbFill size={30} className='text-amber-500' />;
        case 'fan':
            return <BsFan size={30} className='text-blue-500' />;
        case 'appliance':
            return <FaTshirt size={30} className='text-green-500' />;
        case 'ssd':
            return <BsDeviceSsdFill size={30} className='text-purple-500' />;
        default:
            return <MdOutlineElectricalServices size={30} className='text-gray-500' />;
    }
};

function DeviceManagement({ isDarkMode, userData, isAuth}) {

    const [devices, setDevices] = useState([]);

    // States for the *simple* Add Device form
    const [newDeviceName, setNewDeviceName] = useState('');
    const [newDeviceType, setNewDeviceType] = useState('light');


    // --------------------------------------------------------
    // A. FETCH DEVICES (READ) - Remains the same
    // --------------------------------------------------------
    useEffect(() => {
        // The check here is correct: only run if userData and uid exist
        if (!userData || !userData.uid) return;

        const devicesRef = collection(db, "users", userData.uid, "devices");

        const unsubscribe = onSnapshot(devicesRef, (snapshot) => {
            const devicesList = [];
            snapshot.forEach((doc) => {
                devicesList.push({ id: doc.id, ...doc.data() });
            });
            setDevices(devicesList);
        }, (error) => {
            console.error("Error fetching devices:", error);
        });

        return () => unsubscribe();
    }, [userData]);


    // --------------------------------------------------------
    // B. TOGGLE DEVICE STATUS (UPDATE) - Fixed check for robustness
    // --------------------------------------------------------
    const handleToggle = async (deviceId, currentStatus) => {
        if (!userData || !userData.uid) { // Check for existence of userData AND uid
            alert("Must be logged in to control devices.");
            return;
        }

        try {
            const deviceDocRef = doc(db, "users", userData.uid, "devices", deviceId);

            await updateDoc(deviceDocRef, {
                status: !currentStatus // Toggle status
            });

        } catch (error) {
            console.error("Error updating device status:", error);
            alert("Failed to toggle device status.");
        }
    };

    // --------------------------------------------------------
    // C. ADD NEW DEVICE (CREATE) - Fixed authentication check
    // --------------------------------------------------------
    const handleAddDevice = async (e) => {
        e.preventDefault();

        // FIX: Simplified the check to only rely on userData.uid
        if (!userData || !userData.uid) { 
            alert("Must be logged in to add devices.");
            return;
        }

        if (newDeviceName.trim() === '') {
            alert("Device name cannot be empty.");
            return;
        }

        try {
            const devicesRef = collection(db, "users", userData.uid, "devices");

            // Add the new device to Firestore
            await addDoc(devicesRef, {
                name: newDeviceName,
                type: newDeviceType, // light, fan, appliance, etc.
                status: false, // Default to OFF
                lastUpdated: new Date()
            });

            // Clear the form fields after successful submission
            setNewDeviceName('');
            setNewDeviceType('light');
            alert(`Device "${newDeviceName}" added successfully!`);

        } catch (error) {
            console.error("Error adding device:", error);
            alert("Failed to add new device.");
        }
    };


    return (
        <div className={`p-6 min-h-screen ${isDarkMode ? 'bg-zinc-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
            {/* Header */}
            <h1 className="text-3xl font-bold mb-6">Device Management</h1>
            
            {/* Device Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {/* Device Cards (Mapped from Firestore state) */}
                {devices.map((device) => (
                    <div
                        key={device.id}
                        className={`p-6 rounded-xl shadow-lg flex flex-col items-center justify-between transition-all duration-300 ${device.status
                            ? (isDarkMode ? 'bg-teal-700 text-white shadow-teal-500/50' : 'bg-teal-500 text-white shadow-teal-300/50')
                            : (isDarkMode ? 'bg-zinc-800 text-gray-300 hover:bg-zinc-700' : 'bg-white hover:bg-gray-100')}`
                        }
                    >
                        {/* Link Wrapper */}
                        <Link to={`/devices/${device.id}`} className='flex flex-col items-center justify-center w-full'>
                            <div className='mb-4'>
                                {/* Use getDeviceIcon with the stored type */}
                                {getDeviceIcon(device.type)}
                            </div>

                            <h3 className="text-xl font-semibold mb-1 text-center">{device.name}</h3>
                            <p className={`text-sm font-medium mb-4 ${device.status ? 'text-white' : (isDarkMode ? 'text-teal-400' : 'text-teal-600')}`}>
                                Status: {device.status ? 'ON' : 'OFF'}
                            </p>
                        </Link>

                        {/* Toggle Button */}
                        <button
                            onClick={() => handleToggle(device.id, device.status)}
                            className={`w-full py-2 rounded-full font-bold transition-colors duration-200 ${device.status
                                ? 'bg-white text-teal-500 hover:bg-gray-100'
                                : (isDarkMode ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-teal-500 text-white hover:bg-teal-600')}`
                            }
                        >
                            {device.status ? 'Turn Off' : 'Turn On'}
                        </button>
                    </div>
                ))}
            </div>

            {/* Simple Add Device Form */}
            <div className="max-w-md mx-auto">
                <div className={`p-6 rounded-xl shadow-2xl ${isDarkMode ? 'bg-zinc-800' : 'bg-white'}`}>
                    <h2 className="text-2xl font-bold mb-4 text-center">Add New Device</h2>

                    <form onSubmit={handleAddDevice} className="space-y-4">
                        
                        {/* Device Name Input */}
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Device Name</label>
                            <input
                                type="text"
                                value={newDeviceName}
                                onChange={(e) => setNewDeviceName(e.target.value)}
                                required
                                placeholder="e.g., Bedroom Light"
                                className={`w-full p-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${isDarkMode
                                    ? 'bg-gray-800 border-gray-600 text-gray-100'
                                    : 'bg-white border-gray-300 text-gray-900'}`
                                }
                            />
                        </div>

                        {/* Device Type Select */}
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Device Type</label>
                            <select
                                value={newDeviceType}
                                onChange={(e) => setNewDeviceType(e.target.value)}
                                className={`w-full p-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${isDarkMode
                                    ? 'bg-gray-800 border-gray-600 text-gray-100'
                                    : 'bg-white border-gray-300 text-gray-900'}`
                                }
                            >
                                <option value="light">Light</option>
                                <option value="fan">Fan</option>
                                <option value="appliance">Appliance</option>
                                <option value="ssd">SSD/Storage</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 flex items-center justify-center rounded-full font-bold text-white bg-teal-500 hover:bg-teal-600 transition-colors duration-200"
                        >
                            <BsPlusCircleFill size={20} className='mr-2' />
                            Add Device to Account
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default DeviceManagement;