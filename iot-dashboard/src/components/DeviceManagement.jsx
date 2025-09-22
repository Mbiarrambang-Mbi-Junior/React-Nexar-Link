import React, { useState } from 'react';
import { BsDeviceSsdFill, BsLightbulbFill, BsFan } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

function DeviceManagement() {
    const [devices, setDevices] = useState([
        { id: 'parlor-light', name: 'Parlor Light', type: 'light', icon: <BsLightbulbFill size={30} className='text-amber-500' />, status: true },
        { id: 'room-light', name: 'Room Light', type: 'light', icon: <BsLightbulbFill size={30} className='text-amber-500' />, status: false },
        { id: 'kitchen-light', name: 'Kitchen Light', type: 'light', icon: <BsLightbulbFill size={30} className='text-amber-500' />, status: true },
        { id: 'fan', name: 'Fan', type: 'fan', icon: <BsFan size={30} className='text-blue-500' />, status: true },
        { id: 'blender', name: 'Blender', type: 'appliance', icon: <FaTshirt size={30} className='text-gray-500' />, status: false },
        { id: 'washing-machine', name: 'Washing Machine', type: 'appliance', icon: <FaTshirt size={30} className='text-green-500' />, status: true },
        { id: 'iron', name: 'Iron', type: 'appliance', icon: <FaTshirt size={30} className='text-purple-500' />, status: false }
    ]);

    const handleToggle = (id) => {
        setDevices(prevDevices => 
            prevDevices.map(device => 
                device.id === id ? { ...device, status: !device.status } : device
            )
        );
    };

    return (
        <main className='overflow-y-auto p-4 md:p-8 text-gray-800 bg-gray-100'>
            <div className='flex items-center gap-4 mb-8'>
                <BsDeviceSsdFill size={36} className='text-blue-500' />
                <h1 className='text-3xl font-bold'>Device Management</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {devices.map(device => (
                    // Wrap the card with the Link component
                    <Link key={device.id} to={`/devices/${device.id}`}>
                        <div 
                            className={`bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer ${!device.status && 'opacity-75'}`}
                        >
                            <div className='mb-4'>
                                {device.icon}
                            </div>
                            
                            <h3 className='text-xl font-semibold mb-2'>{device.name}</h3>

                            <p className={`text-sm font-medium ${device.status ? 'text-green-600' : 'text-red-600'}`}>
                                Status: {device.status ? 'On' : 'Off'}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.preventDefault(); // Prevents the link from navigating
                                    handleToggle(device.id);
                                }}
                                className={`mt-4 px-6 py-2 rounded-full font-bold transition-colors duration-300 ${
                                    device.status ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'
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