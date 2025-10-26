import React, { useState, useEffect } from 'react';
import { BsThermometerHalf, BsDroplet, BsCloud, BsFillBellFill, BsDeviceSsdFill} from 'react-icons/bs';
import { FaBolt } from 'react-icons/fa';
import { ResponsiveContainer, RadialBarChart, RadialBar, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import mockData from '../utils/MOCK_DATA.json';
import chartData from '../utils/chartData.json';



function Home({ isDarkMode }) {
    // Data for the charts, now using months of the year
    
    // Get the last data point from the mockData file for the display cards
    const lastDataPoint = mockData[mockData.length - 1];
    const tempData = lastDataPoint.temperature;
    const humidityData = lastDataPoint.humidity;

    // State for the power radial chart
    const [powerData, setPowerData] = useState([{ name: 'Power Used', uv: 45, fill: '#8884d8' }]);

    return (
        // ✅ Main background color logic is kept (assumes parent applies the 'dark' class to <html>)
        <main className={`overflow-y-auto p-4 md:p-8 text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen`}>

            {/* Main Cards Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                {/* Power Card with Radial Chart */}
                {/* ✅ Added dark:bg-gray-800 and dark:shadow-xl */}
                <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl flex flex-col items-center justify-center hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
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
                            <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold dark:fill-gray-100">
                                {powerData[0].uv}%
                            </text>
                            {/* ✅ Added dark:fill-gray-400 */}
                            <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className="text-sm font-semibold text-gray-500 dark:fill-gray-400">
                                used
                            </text>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>

                {/* Categories Card */}
                {/* ✅ Added dark:bg-gray-800 and dark:shadow-xl */}
                <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl flex flex-col items-center justify-center text-blue-500 hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                     <BsCloud className='card_icon text-3xl' />
                    <div className='flex items-center justify-between w-full mb-4'>
                        {/* ✅ Added dark:text-gray-100 to headings */}
                        <h3 className="text-xl font-semibold dark:text-gray-100">
                            Temperature</h3>
                        <div className="temp-icon flex gap-4 items-center justify-center">
                            <BsThermometerHalf className='card_icon text-3xl text-red-500' />
                        </div>
                         {/* ✅ Added dark:text-gray-100 */}
                        <h1 className="text-2xl font-bold dark:text-gray-100">{tempData}&deg;</h1>
                    </div>
                    <div className='flex items-center justify-between w-full mb-4'>
                         {/* ✅ Added dark:text-gray-100 to headings */}
                        <h3 className="text-xl font-semibold dark:text-gray-100">
                            Humidity</h3>
                        <div className="temp-icon flex gap-4 items-center justify-center">
                            <BsDroplet className='card_icon text-3xl text-blue-500' />
                        </div>
                        {/* ✅ Added dark:text-gray-100 */}
                        <h1 className="flex items-center justify-center w-full text-2xl font-bold dark:text-gray-100">{humidityData}%</h1>
                    </div>

                </div>

                {/* Active Devices Card */}
                {/* ✅ Added dark:bg-gray-800 and dark:shadow-xl */}
                <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl flex flex-col items-center justify-center text-green-500 hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                    <div className='flex items-center justify-between w-full mb-4'>
                        {/* ✅ Added dark:text-gray-100 to headings */}
                        <h3 className="text-xl font-semibold dark:text-gray-100">Active Devices</h3>
                        <BsDeviceSsdFill className='card_icon text-3xl' />
                    </div>
                    {/* ✅ Added dark:text-gray-100 */}
                    <h1 className="text-5xl font-bold dark:text-gray-100">33</h1>
                </div>

                {/* Alerts Card */}
                {/* ✅ Added dark:bg-gray-800 and dark:shadow-xl */}
                <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl flex flex-col items-center justify-center text-red-500 hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                    <div className='flex items-center justify-between w-full mb-4'>
                        {/* ✅ Added dark:text-gray-100 to headings */}
                        <h3 className="text-xl font-semibold dark:text-gray-100">Alerts</h3>
                        <BsFillBellFill className='card_icon text-3xl' />
                    </div>
                    {/* ✅ Added dark:text-gray-100 */}
                    <h1 className="text-5xl font-bold dark:text-gray-100">42</h1>
                </div>
            </div>

            {/* Charts Section */}
            <div className='charts grid grid-cols-1 md:grid-cols-2 gap-6 h-auto'>
                {/* Bar Chart */}
                {/* ✅ Added dark:bg-gray-800 and dark:shadow-xl */}
                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-xl p-6'>
                    {/* ✅ Added dark:text-gray-100 to headings */}
                    <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4'>Daily Revenue</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            {/* ✅ Added dark:stroke-gray-700 */}
                            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" dark:stroke-gray-700 /> 
                            {/* ✅ Added tick and axis color adjustments */}
                            <XAxis dataKey="name" tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <YAxis tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <Tooltip contentStyle={{ background: isDarkMode ? '#374151' : '#ffffff', border: isDarkMode ? '1px solid #4b5563' : '1px solid #e5e7eb', color: isDarkMode ? '#f3f4f6' : '#1f2937' }}/>
                            <Legend wrapperStyle={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}/>
                            <Bar dataKey="pv" fill="#ffb650ff" name="Revenue" />
                            <Bar dataKey="uv" fill="#008c69" name="Cost" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* User Engagement Chart */}
                {/* ✅ Added dark:bg-gray-800 and dark:shadow-xl */}
                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-xl p-6'>
                    {/* ✅ Added dark:text-gray-100 to headings */}
                    <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4'>User Engagement</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            {/* ✅ Added dark:stroke-gray-700 */}
                            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" dark:stroke-gray-700 />
                            {/* ✅ Added tick and axis color adjustments */}
                            <XAxis dataKey="name" tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <YAxis tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <Tooltip contentStyle={{ background: isDarkMode ? '#374151' : '#ffffff', border: isDarkMode ? '1px solid #4b5563' : '1px solid #e5e7eb', color: isDarkMode ? '#f3f4f6' : '#1f2937' }}/>
                            <Legend wrapperStyle={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}/>
                            <Line type="monotone" dataKey="pv" stroke="#ffb650ff" activeDot={{ r: 8 }} name="Page Views" />
                            <Line type="monotone" dataKey="uv" stroke="#008c69" name="Unique Visitors" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                 {/* New Temperature Chart */}
                {/* ✅ Added dark:bg-gray-800 and dark:shadow-xl */}
                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-xl p-6'>
                    {/* ✅ Added dark:text-gray-100 to headings */}
                    <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4'>Temperature Trend</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={mockData}>
                            {/* ✅ Added dark:stroke-gray-700 */}
                            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" dark:stroke-gray-700 />
                            {/* ✅ Added tick and axis color adjustments */}
                            <XAxis dataKey="id" tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <YAxis tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <Tooltip contentStyle={{ background: isDarkMode ? '#374151' : '#ffffff', border: isDarkMode ? '1px solid #4b5563' : '1px solid #e5e7eb', color: isDarkMode ? '#f3f4f6' : '#1f2937' }}/>
                            <Legend wrapperStyle={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}/>
                            <Line type="monotone" dataKey="temperature" stroke="#ffb650ff" name="Temperature" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* New Humidity Chart */}
                {/* ✅ Added dark:bg-gray-800 and dark:shadow-xl */}
                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-xl p-6'>
                    {/* ✅ Added dark:text-gray-100 to headings */}
                    <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4'>Humidity Trend</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={mockData}>
                            {/* ✅ Added dark:stroke-gray-700 */}
                            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" dark:stroke-gray-700 />
                            {/* ✅ Added tick and axis color adjustments */}
                            <XAxis dataKey="id" tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <YAxis tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <Tooltip contentStyle={{ background: isDarkMode ? '#374151' : '#ffffff', border: isDarkMode ? '1px solid #4b5563' : '1px solid #e5e7eb', color: isDarkMode ? '#f3f4f6' : '#1f2937' }}/>
                            <Legend wrapperStyle={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}/>
                            <Line type="monotone" dataKey="humidity" stroke="#008c69" name="Humidity" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </main>
    )
}

export default Home;