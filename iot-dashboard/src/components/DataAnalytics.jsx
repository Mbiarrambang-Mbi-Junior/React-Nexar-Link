import React from 'react'
import { BsFillGrid3X3GapFill, BsCpuFill } from 'react-icons/bs';
import { FaLaptop, FaUsers, FaChartLine } from 'react-icons/fa';
import { ResponsiveContainer, RadialBarChart, RadialBar, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend }
    from 'recharts';

function DataAnalytics() {
    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

    const radialData = [
        { name: 'Active Devices', uv: 75, fill: '#8884d8' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Data Analytics Dashboard</h1>

            {/* Data Summary Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                <div className='bg-white p-6 rounded-lg shadow-md flex items-center justify-between'>
                    <div>
                        <h4 className='text-gray-500 font-semibold'>Total Users</h4>
                        <p className='text-3xl font-bold text-gray-900'>2400</p>
                    </div>
                    <FaUsers size={36} className='text-blue-500' />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md flex items-center justify-between'>
                    <div>
                        <h4 className='text-gray-500 font-semibold'>Active Devices</h4>
                        <p className='text-3xl font-bold text-gray-900'>150</p>
                    </div>
                    <FaLaptop size={36} className='text-green-500' />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md flex items-center justify-between'>
                    <div>
                        <h4 className='text-gray-500 font-semibold'>Data Ingestion Rate</h4>
                        <p className='text-3xl font-bold text-gray-900'>98%</p>
                    </div>
                    <FaChartLine size={36} className='text-red-500' />
                </div>
            </div>

            {/* Charts Section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Bar Chart */}
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4'>Revenue Overview</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" name="Revenue" />
                            <Bar dataKey="uv" fill="#82ca9d" name="Cost" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Line Chart */}
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4'>User Engagement</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} name="Page Views" />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" name="Unique Visitors" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Radial Chart */}
                <div className='bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2'>
                    <h2 className='text-xl font-semibold mb-4'>Device Active Rate</h2>
                    <div className='flex justify-center items-center h-full'>
                        <ResponsiveContainer width="30%" height={250}>
                            <RadialBarChart
                                innerRadius="60%"
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
                                    fill="#ffc658"
                                />
                                <text
                                    x="50%" y="45%"
                                    textAnchor="middle" dominantBaseline="middle"
                                    className="text-4xl font-bold text-gray-800"
                                >
                                    {`${radialData[0].uv}%`}
                                </text>
                                <text
                                    x="50%" y="65%"
                                    textAnchor="middle" dominantBaseline="middle"
                                    className="text-lg text-gray-500"
                                >
                                    Active
                                </text>
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataAnalytics;