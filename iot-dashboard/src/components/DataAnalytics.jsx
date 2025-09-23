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
        { name: 'Active Devices', uv: 75, fill: '#8884d8' }
    ];

    return (
        <div className='p-4'>
            <h1 className="flex items-center gap-2 text-2xl font-bold mb-6 text-[var(--text-primary-color)]">
                <FaChartLine className="text-[var(--text-accent-color)]" /> Data Analytics
            </h1>

            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-1'>
                    <div className='flex flex-col md:flex-row gap-4 mb-4'>
                        <div className='stats-card p-4 rounded-lg shadow-lg flex-1'>
                            <p className='text-sm text-[var(--text-primary-color)]'>Total Devices</p>
                            <h2 className='text-3xl font-bold text-[var(--text-accent-color)]'>500</h2>
                        </div>
                        <div className='stats-card  p-4 rounded-lg shadow-lg flex-1'>
                            <p className='text-sm text-[var(--text-primary-color)]'>Active Users</p>
                            <h2 className='text-3xl font-bold text-[var(--text-accent-color)]'>150</h2>
                        </div>
                        <div className='stats-card  p-4 rounded-lg shadow-lg flex-1'>
                            <p className='text-sm text-[var(--text-primary-color)]'>Revenue</p>
                            <h2 className='text-3xl font-bold text-[var(--text-accent-color)]'>$25,000</h2>
                        </div>
                    </div>

                    <div className=' p-6 rounded-lg shadow-md'>
                        <h3 className='text-lg font-semibold mb-4 text-[var(--text-primary-color)]'>Device Metrics</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke='var(--text-secondary-color)' />
                                <XAxis dataKey="name" stroke='var(--text-primary-color)' />
                                <YAxis stroke='var(--text-primary-color)' />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='p-6 rounded-lg shadow-md flex-1 flex flex-col justify-center items-center'>
                    <h3 className='text-lg font-semibold mb-4 text-[var(--text-primary-color)]'>Device Activity</h3>
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
                                fill="var(--text-accent-color)"
                            />
                            <text
                                x="50%" y="45%"
                                textAnchor="middle" dominantBaseline="middle"
                                className="text-4xl font-bold fill-[var(--text-primary-color)]"
                            >
                                {`${radialData[0].uv}%`}
                            </text>
                            <text
                                x="50%" y="65%"
                                textAnchor="middle" dominantBaseline="middle"
                                className="text-lg fill-gray-500"
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