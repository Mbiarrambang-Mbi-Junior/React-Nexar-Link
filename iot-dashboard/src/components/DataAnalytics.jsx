import React from 'react';
import { BsFillGrid3X3GapFill, BsCpuFill } from 'react-icons/bs';
import { FaLaptop, FaUsers, FaChartLine } from 'react-icons/fa';
import { ResponsiveContainer, RadialBarChart, RadialBar, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend }
    from 'recharts';
import data from '../utils/data.json'

function DataAnalytics({ isDarkMode }) {

    const radialData = [
        { name: 'Active Devices', uv: 75, fill: '#82ca9d' } // Use fixed green for radial bar
    ];

    // Define chart colors for dark mode to ensure visibility
    const axisColor = isDarkMode ? '#f3f4f6' : '#1f2937'; // gray-100 or gray-900
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb'; // gray-700 or gray-200
    const accentColor = isDarkMode ? '#4ade80' : '#22c55e'; // green-400 or green-600

    return (
        <div className={`p-4 ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
            {/* Title */}
            <h1 className="flex items-center gap-2 text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                <FaChartLine className={`text-green-500`} /> Data Analytics
            </h1>

            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-1'>
                    {/* Stats Cards */}
                    <div className='flex flex-col md:flex-row gap-4 mb-4'>
                        {/* Card 1 */}
                        <div className='stats-card p-4 rounded-lg shadow-lg flex-1 bg-white dark:bg-gray-800'>
                            <p className='text-sm text-gray-600 dark:text-gray-300'>Total Devices</p>
                            <h2 className='text-3xl font-bold text-green-500'>500</h2>
                        </div>
                        {/* Card 2 */}
                        <div className='stats-card p-4 rounded-lg shadow-lg flex-1 bg-white dark:bg-gray-800'>
                            <p className='text-sm text-gray-600 dark:text-gray-300'>Active Users</p>
                            <h2 className='text-3xl font-bold text-green-500'>150</h2>
                        </div>
                        {/* Card 3 */}
                        <div className='stats-card p-4 rounded-lg shadow-lg flex-1 bg-white dark:bg-gray-800'>
                            <p className='text-sm text-gray-600 dark:text-gray-300'>Revenue</p>
                            <h2 className='text-3xl font-bold text-green-500'>$25,000</h2>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className='p-6 rounded-lg shadow-md bg-white dark:bg-gray-800'>
                        <h3 className='text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100'>Device Metrics</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                {/* Conditional stroke for dark mode */}
                                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                                {/* Conditional stroke and tick fill for dark mode */}
                                <XAxis dataKey="name" stroke={gridColor} tick={{ fill: axisColor }} />
                                <YAxis stroke={gridColor} tick={{ fill: axisColor }} />
                                {/* Conditional tooltip styling for dark mode */}
                                <Tooltip contentStyle={{ background: isDarkMode ? '#1f2937' : '#ffffff', border: isDarkMode ? '1px solid #4b5563' : '1px solid #e5e7eb' }} 
                                         labelStyle={{ color: axisColor }}/>
                                {/* Conditional legend text color */}
                                <Legend wrapperStyle={{ color: axisColor }}/>
                                <Bar dataKey="pv" fill="#8884d8" name="Power Usage (pv)" />
                                <Bar dataKey="uv" fill="#82ca9d" name="CPU Load (uv)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Radial Bar Chart */}
                <div className='p-6 rounded-lg shadow-md flex-1 flex flex-col justify-center items-center bg-white dark:bg-gray-800'>
                    <h3 className='text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100'>Device Activity</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <RadialBarChart
                            innerRadius="70%"
                            outerRadius="90%"
                            data={radialData}
                            startAngle={90}
                            endAngle={450}
                        >
                            <RadialBar
                                minAngle={15}
                                background
                                clockWise
                                dataKey='uv'
                                cornerRadius={10}
                                fill={radialData[0].fill} // Keep a fixed, bright color
                            />
                            <text
                                x="50%" y="45%"
                                textAnchor="middle" dominantBaseline="middle"
                                // Conditional fill color for dark mode
                                className="text-4xl font-bold"
                                fill={axisColor}
                            >
                                {`${radialData[0].uv}%`}
                            </text>
                            <text
                                x="50%" y="65%"
                                textAnchor="middle" dominantBaseline="middle"
                                // Conditional fill color for dark mode
                                className="text-lg"
                                fill={isDarkMode ? '#9ca3af' : '#6b7280'} // gray-400 or gray-500
                            >
                                Active
                            </text>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default DataAnalytics;