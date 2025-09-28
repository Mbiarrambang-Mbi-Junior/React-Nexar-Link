import React, { useState } from 'react';
// Added MdOutlineElectricalServices for a generic device icon, and BsTrash3Fill for delete
import { BsDeviceSsdFill, BsLightbulbFill, BsFan, BsPlusCircleFill, BsTrash3Fill } from 'react-icons/bs'; 
import { FaTshirt } from 'react-icons/fa';
import { MdOutlineElectricalServices } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Utility function to get the icon based on device type
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

function DeviceManagement({ isDarkMode }) {
    const [devices, setDevices] = useState([
        { id: 'parlor-light', name: 'Parlor Light', type: 'light', icon: getDeviceIcon('light'), status: false },
        { id: 'room-light', name: 'Room Light', type: 'light', icon: getDeviceIcon('light'), status: false },
        { id: 'fan', name: 'Fan', type: 'fan', icon: getDeviceIcon('fan'), status: false },
    ]);
    
    // NEW STATE for form inputs
    const [newDeviceName, setNewDeviceName] = useState('');
    const [newDeviceType, setNewDeviceType] = useState('light'); // Default to 'light'

    const handleToggle = (id) => {
        setDevices(prevDevices =>
            prevDevices.map(device =>
                device.id === id ? { ...device, status: !device.status } : device
            )
        );
    };

    // NEW FUNCTION: Handle form submission to add a device
    const handleAddDeviceSubmit = (e) => {
        e.preventDefault();

        if (!newDeviceName.trim()) {
            alert("Device name cannot be empty.");
            return;
        }

        const newId = newDeviceName.toLowerCase().replace(/\s/g, '-');
        
        // Prevent adding a device if an ID already exists (simple uniqueness check)
        if (devices.some(device => device.id === newId)) {
            alert(`Device with name "${newDeviceName}" already exists.`);
            return;
        }

        const newDevice = {
            id: newId,
            name: newDeviceName.trim(),
            type: newDeviceType,
            icon: getDeviceIcon(newDeviceType),
            status: false,
        };

        setDevices(prevDevices => [...prevDevices, newDevice]);

        // Clear the form
        setNewDeviceName('');
        setNewDeviceType('light');
    };

    return (
        <div className={`p-4 rounded-lg shadow-md min-h-screen ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
            <h1 className='text-2xl font-bold mb-6 text-teal-500'>Device Management</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                
                {/* 1. Existing Device Cards (Mapped from state) */}
                {devices.map((device) => (
                    <div
                        key={device.id}
                        className={`
                            device-card p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center
                            transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer
                            ${!device.status && 'opacity-85'}
                            ${isDarkMode ? 'bg-gray-800 text-gray-100 shadow-xl hover:shadow-2xl' : 'bg-white shadow-md hover:shadow-xl'}
                        `}
                    >
                        {/* Link Wrapper */}
                        <Link to={`/devices/${device.id}`} className='flex flex-col items-center justify-center w-full'>
                            <div className='mb-4 text-gray-800 dark:text-gray-100'>
                                {device.icon}
                            </div>
                            
                            <h3 className='text-xl font-semibold mb-2 text-black dark:text-gray-100'>{device.name}</h3>

                            <p className={`text-sm font-medium ${device.status ? 'text-green-500' : 'text-red-500'}`}>
                                Status: {device.status ? 'On' : 'Off'}
                            </p>
                        </Link>

                        {/* Toggle Button (outside of Link to prevent navigation on click) */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleToggle(device.id);
                            }}
                            className={`mt-4 px-6 py-2 rounded-full font-bold transition-colors duration-300 ${
                                device.status 
                                    ? 'bg-red-500 text-white hover:bg-red-600' 
                                    : 'bg-green-500 text-white hover:bg-green-600'
                            }`}
                        >
                            {device.status ? 'Turn Off' : 'Turn On'}
                        </button>
                    </div>
                ))}

                {/* 2. COMPLETED: The "Add Device" Card now contains the form */}
                <div 
                    className={`
                        add-device-card p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center
                        border-4 border-dashed border-teal-500/50 
                        transition-colors duration-300 
                        ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                    `}
                >
                    <form onSubmit={handleAddDeviceSubmit} className='w-full space-y-4'>
                        <h3 className='text-xl font-semibold mb-1 text-teal-500'>Add New Device</h3>
                        
                        {/* Device Name Input */}
                        <div className="flex flex-col items-start w-full">
                            <label 
                                htmlFor="deviceName" 
                                className='text-sm font-medium mb-1'
                            >
                                Device Name
                            </label>
                            <input
                                type="text"
                                id="deviceName"
                                value={newDeviceName}
                                onChange={(e) => setNewDeviceName(e.target.value)}
                                placeholder="e.g., Bedroom Fan"
                                required
                                className={`w-full p-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${isDarkMode 
                                    ? 'bg-gray-800 border-gray-600 text-gray-100' 
                                    : 'bg-white border-gray-300 text-gray-900'}`}
                            />
                        </div>

                        {/* Device Type Select */}
                        <div className="flex flex-col items-start w-full">
                            <label 
                                htmlFor="deviceType" 
                                className='text-sm font-medium mb-1'
                            >
                                Device Type
                            </label>
                            <select
                                id="deviceType"
                                value={newDeviceType}
                                onChange={(e) => setNewDeviceType(e.target.value)}
                                className={`w-full p-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${isDarkMode 
                                    ? 'bg-gray-800 border-gray-600 text-gray-100' 
                                    : 'bg-white border-gray-300 text-gray-900'}`}
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
                            <BsPlusCircleFill size={20} className='mr-2' />
                            Add Device
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DeviceManagement;