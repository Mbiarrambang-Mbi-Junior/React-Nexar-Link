import React, { useState } from 'react';
import { BsDeviceSsdFill, BsLightbulbFill, BsFan } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DeviceManagement({ isDarkMode }) {
    const [devices, setDevices] = useState([
        { id: 'parlor-light', name: 'Parlor Light', type: 'light', icon: <BsLightbulbFill size={30} className='text-amber-500' />, status: false },
        { id: 'room-light', name: 'Room Light', type: 'light', icon: <BsLightbulbFill size={30} className='text-amber-500' />, status: false },
        { id: 'kitchen-light', name: 'Kitchen Light', type: 'light', icon: <BsLightbulbFill size={30} className='text-amber-500' />, status: false },
        { id: 'fan', name: 'Fan', type: 'fan', icon: <BsFan size={30} className='text-blue-500' />, status: false },
        { id: 'blender', name: 'Blender', type: 'appliance', icon: <FaTshirt size={30} className='text-gray-500' />, status: false },
        { id: 'washing-machine', name: 'Washing Machine', type: 'appliance', icon: <FaTshirt size={30} className='text-green-500' />, status: false },
    ]);

    const handleToggle = (id) => {
        setDevices(prevDevices =>
            prevDevices.map(device =>
                device.id === id ? { ...device, status: !device.status } : device
            )
        );
    };

    return (
        // Existing dark mode background logic preserved
        <div className={`p-4 rounded-lg shadow-md min-h-screen ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
            {/* ✅ Updated text color for dark mode (assuming --text-primary-color needs to be white/light in dark mode) */}
            <h1 className='text-2xl font-bold mb-6 text-teal-500'>Device Management</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {devices.map((device) => (
                    <Link key={device.id} to={`/devices/${device.id}`}>
                        <div
                            className={`
                                device-card p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center
                                transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer
                                ${!device.status && 'opacity-75'}
                                
                                // ✅ Card background, shadow, and hover effect for dark mode
                                bg-white shadow-md dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl
                            `}
                        >
                            <div className='mb-4 text-gray-800 dark:text-gray-100'>
                                {/* Icon color is handled by the icon component itself (e.g., text-amber-500) */}
                                {device.icon}
                            </div>
                            
                            {/* ✅ Heading text color for dark mode */}
                            <h3 className='text-xl font-semibold mb-2 text-black'>{device.name}</h3>

                            <p className={`text-sm font-medium ${device.status ? 'text-green-500' : 'text-red-500'}`}>
                                Status: {device.status ? 'On' : 'Off'}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleToggle(device.id);
                                }}
                                className={`mt-4 px-6 py-2 rounded-full font-bold transition-colors duration-300 ${
                                    // ✅ Accent color for 'Turn On' button for consistency in dark mode
                                    device.status 
                                        ? 'bg-red-500 text-white hover:bg-red-600' 
                                        : 'bg-green-500 text-white hover:bg-green-600'
                                }`}
                            >
                                {device.status ? 'Turn Off' : 'Turn On'}
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DeviceManagement;