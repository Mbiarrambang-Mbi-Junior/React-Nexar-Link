import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { BsThermometerHalf, BsDroplet, BsCloud, BsFillBellFill, BsDeviceSsdFill} from 'react-icons/bs';
import { FaBolt } from 'react-icons/fa';
import { ResponsiveContainer, RadialBarChart, RadialBar, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import mockData from '../utils/MOCK_DATA.json';

function Home() {
    // Data for the charts, now using months of the year
    const chartData = [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Aug', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Sep', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Oct', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Nov', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Dec', uv: 1890, pv: 4800, amt: 2181 },
    ];
    
    // Get the last data point from the mockData file for the display cards
    const lastDataPoint = mockData[mockData.length - 1];
    const tempData = lastDataPoint.temperature;
    const humidityData = lastDataPoint.humidity;

    // State for the power radial chart
    const [powerData, setPowerData] = useState([{ name: 'Power Used', uv: 45, fill: '#8884d8' }]);

    return (
        <main className='overflow-y-auto p-4 md:p-8 text-gray-800 bg-gray-100'>

            {/* Main Cards Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                {/* Power Card with Radial Chart */}
                <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                    <div className='flex items-center justify-between text-amber-500 w-full mb-4'>
                        <h3 className="text-xl font-semibold">Power</h3>
                        <FaBolt className='card_icon text-3xl' />
                    </div>
                    <ResponsiveContainer width="100%" height={150}>
                        <RadialBarChart
                            innerRadius="60%"
                            outerRadius="90%"
                            data={powerData}
                            startAngle={90}
                            endAngle={450}
                        >
                            <RadialBar dataKey="uv" cornerRadius={10} fill="#8884d8" />
                            <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold">
                                {powerData[0].uv}%
                            </text>
                            <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className="text-sm font-semibold text-gray-500">
                                used
                            </text>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>

                {/* Categories Card */}
                <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-blue-500 hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                     <BsCloud className='card_icon text-3xl' />
                    <div className='flex items-center justify-between w-full mb-4'>
                        <h3 className="text-xl font-semibold">
                            Temperature</h3>
                        <div className="temp-icon flex gap-4 items-center justify-center">
                            <BsThermometerHalf className='card_icon text-3xl text-red-500' />
                        </div>
                        <h1 className="text-2xl font-bold">{tempData}&deg;</h1>
                    </div>
                    <div className='flex items-center justify-between w-full mb-4'>
                        <h3 className="text-xl font-semibold">
                            Humidity</h3>
                        <div className="temp-icon flex gap-4 items-center justify-center">
                            <BsDroplet className='card_icon text-3xl text-blue-500' />
                        </div>
                        <h1 className="flex items-center justify-center w-full text-2xl font-bold">{humidityData}%</h1>
                    </div>

                </div>

                {/* Active Devices Card */}
                <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-green-500 hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                    <div className='flex items-center justify-between w-full mb-4'>
                        <h3 className="text-xl font-semibold">Active Devices</h3>
                        <BsDeviceSsdFill className='card_icon text-3xl' />
                    </div>
                    <h1 className="text-5xl font-bold">33</h1>
                </div>

                {/* Alerts Card */}
                <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-red-500 hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                    <div className='flex items-center justify-between w-full mb-4'>
                        <h3 className="text-xl font-semibold">Alerts</h3>
                        <BsFillBellFill className='card_icon text-3xl' />
                    </div>
                    <h1 className="text-5xl font-bold">42</h1>
                </div>
            </div>

            {/* Charts Section */}
            <div className='charts grid grid-cols-1 md:grid-cols-2 gap-6 h-auto'>
                <div className='bg-white rounded-lg shadow-md p-6'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-4'>Daily Revenue</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#ffb650ff" name="Revenue" />
                            <Bar dataKey="uv" fill="#008c69" name="Cost" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='bg-white rounded-lg shadow-md p-6'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-4'>User Engagement</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#ffb650ff" activeDot={{ r: 8 }} name="Page Views" />
                            <Line type="monotone" dataKey="uv" stroke="#008c69" name="Unique Visitors" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                 {/* New Temperature Chart */}
                <div className='bg-white rounded-lg shadow-md p-6'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-4'>Temperature Trend</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={mockData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="id" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="temperature" stroke="#ffb650ff" name="Temperature" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* New Humidity Chart */}
                <div className='bg-white rounded-lg shadow-md p-6'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-4'>Humidity Trend</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={mockData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="id" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="humidity" stroke="#008c69" name="Humidity" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </main>
    )
}

export default Home;