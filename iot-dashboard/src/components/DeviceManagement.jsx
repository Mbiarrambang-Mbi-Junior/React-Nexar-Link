import React, { useState } from 'react';
import { BsDeviceSsdFill, BsLightbulbFill, BsFan } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DeviceManagement() {
    const [devices, setDevices] = useState([
        { id: 'parlor-light', name: 'Parlor Light', type: 'light', icon: <BsLightbulbFill size={30} className='text-amber-500' />, status: true },
        { id: 'room-light', name: 'Room Light', type: 'light', icon: <BsLightbulbFill size={30} className='text-amber-500' />, status: false },
        { id: 'kitchen-light', name: 'Kitchen Light', type: 'light', icon: <BsLightbulbFill size={30} className='text-amber-500' />, status: true },
        { id: 'fan', name: 'Fan', type: 'fan', icon: <BsFan size={30} className='text-blue-500' />, status: true },
        { id: 'blender', name: 'Blender', type: 'appliance', icon: <FaTshirt size={30} className='text-gray-500' />, status: false },
        { id: 'washing-machine', name: 'Washing Machine', type: 'appliance', icon: <FaTshirt size={30} className='text-green-500' />, status: true },
    ]);

    const handleToggle = (id) => {
        setDevices(prevDevices =>
            prevDevices.map(device =>
                device.id === id ? { ...device, status: !device.status } : device
            )
        );
    };

    return (
        <main className='p-4 bg-[var(--body-bg-color)] dark:bg-[var(--box-bg-color)] rounded-lg shadow-md min-h-screen'>
            <h1 className='text-2xl font-bold mb-6 text-[var(--text-primary-color)]'>Device Management</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {devices.map((device) => (
                    <Link key={device.id} to={`/devices/${device.id}`}>
                        <div
                            className={`
                                device-card p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center
                                transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer
                                ${!device.status && 'opacity-75'}
                            `}
                        >
                            <div className='mb-4 text-[var(--text-primary-color)]'>
                                {device.icon}
                            </div>
                            
                            <h3 className='text-xl font-semibold mb-2 text-[var(--text-primary-color)]'>{device.name}</h3>

                            <p className={`text-sm font-medium ${device.status ? 'text-green-500' : 'text-red-500'}`}>
                                Status: {device.status ? 'On' : 'Off'}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleToggle(device.id);
                                }}
                                className={`mt-4 px-6 py-2 rounded-full font-bold transition-colors duration-300 ${
                                    device.status ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-[var(--text-accent-color)] text-white hover:bg-green-600'
                                }`}
                            >
                                {device.status ? 'Turn Off' : 'Turn On'}
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default DeviceManagement;