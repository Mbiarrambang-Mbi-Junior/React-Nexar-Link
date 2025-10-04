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
import { db } from '../config/firebase'; 
import { 
    collection, 
    onSnapshot, 
    doc, 
    updateDoc 
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

function DeviceManagement({ isDarkMode, userData }) { 
    
    const [devices, setDevices] = useState([]); 
    
    const [newDeviceName, setNewDeviceName] = useState('');
    const [newDeviceType, setNewDeviceType] = useState('light');
    
    // ⭐ NEW STATE FOR PROVISIONING FLOW
    const [isProvisioning, setIsProvisioning] = useState(false);
    // Default IP for common IoT devices (like ESP32/ESP8266) in Soft AP mode
    const [setupIP, setSetupIP] = useState('192.168.4.1'); 


    // --------------------------------------------------------
    // A. FETCH DEVICES (READ) - Remains the same
    // --------------------------------------------------------
    useEffect(() => {
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
    // B. PROVISION DEVICE (Replaces old Add function)
    // --------------------------------------------------------
    const handleProvisionDevice = async (e) => {
        e.preventDefault();
        
        // NOTE: In a production app, you would securely fetch home Wi-Fi credentials 
        // from the user or the operating system. For this simulation, we use placeholders.
        const homeSSID = "Your_Home_WiFi";
        const homePassword = "Your_Home_Password";
    
        if (!newDeviceName.trim() || !userData || !userData.uid) {
            alert("Device name is required, and user must be logged in.");
            return;
        }

        try {
            // Step 1: Send configuration payload to the device's temporary IP
            // This assumes the device (e.g., an ESP32) is running an HTTP server
            // and the user's PC is connected to the device's temporary Wi-Fi network.
            const response = await fetch(`http://${setupIP}/configure`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ssid: homeSSID,
                    password: homePassword,
                    firebaseUid: userData.uid, // PASS THE UID TO THE DEVICE
                    deviceName: newDeviceName.trim(),
                    deviceType: newDeviceType
                }),
            });
    
            if (!response.ok) {
                throw new Error('Device configuration failed. Check IP or device status.');
            }
    
            // Assuming the device returns a success response with a new device ID
            const data = await response.json();
            
            alert(`Configuration sent! The device should now connect to your home Wi-Fi and register to your dashboard shortly. Device ID: ${data.deviceId || 'N/A'}`);
            
            // Reset state
            setIsProvisioning(false);
            setNewDeviceName('');
            setNewDeviceType('light');
    
        } catch (error) {
            console.error("Provisioning error:", error);
            alert(`Error: ${error.message}. Make sure you are connected to the device's temporary setup Wi-Fi network.`);
        }
    };


    // --------------------------------------------------------
    // C. TOGGLE DEVICE STATUS (UPDATE) - Remains the same
    // --------------------------------------------------------
    const handleToggle = async (deviceId, currentStatus) => {
        if (!userData || !userData.uid) {
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
    
    
    return (
        <div className={`p-6 min-h-screen ${isDarkMode ? 'bg-zinc-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
            {/* Header */}
            <h1 className="text-3xl font-bold mb-6">Device Management</h1>

            {/* Device Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {/* Device Cards (Mapped from Firestore state) - Remains the same */}
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

            {/* ⭐ WI-FI PROVISIONING UI (Replaces the simple form) */}
            <div className="max-w-md mx-auto">
                <div className={`p-6 rounded-xl shadow-2xl ${isDarkMode ? 'bg-zinc-800' : 'bg-white'}`}>
                    <h2 className="text-2xl font-bold mb-4 text-center">Add New Device</h2>

                    {!isProvisioning ? (
                        <button
                            onClick={() => setIsProvisioning(true)}
                            className="w-full py-3 flex items-center justify-center rounded-full font-bold text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
                        >
                            <BsPlusCircleFill size={20} className='mr-2' />
                            Start Wi-Fi Provisioning
                        </button>
                    ) : (
                        <form onSubmit={handleProvisionDevice} className="space-y-4">
                            <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} border-l-4 pl-3 border-teal-500`}>
                                **Setup Mode:** First, manually connect your computer/phone to the new device's temporary Wi-Fi network (e.g., "MyDevice-Setup") before proceeding.
                            </p>
                            
                            {/* Device Setup IP Input */}
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Device Setup IP (e.g., 192.168.4.1)</label>
                                <input
                                    type="text"
                                    value={setupIP}
                                    onChange={(e) => setSetupIP(e.target.value)}
                                    required
                                    placeholder="e.g., 192.168.4.1"
                                    className={`w-full p-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${isDarkMode 
                                        ? 'bg-gray-800 border-gray-600 text-gray-100' 
                                        : 'bg-white border-gray-300 text-gray-900'}`
                                    }
                                />
                            </div>

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
                                className="w-full py-2 flex items-center justify-center rounded-full font-bold text-white bg-teal-500 hover:bg-teal-600 transition-colors duration-200"
                            >
                                Send Wi-Fi Credentials
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsProvisioning(false)}
                                className={`w-full py-2 rounded-full font-bold transition-colors duration-200 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}
                            >
                                Cancel Setup
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DeviceManagement;