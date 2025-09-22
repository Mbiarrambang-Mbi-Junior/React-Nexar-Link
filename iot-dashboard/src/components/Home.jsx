import React from 'react'
import '../styles/home.css'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill, BsDeviceSsdFill }
    from 'react-icons/bs'
import { FaBolt } from 'react-icons/fa';
import { ResponsiveContainer, RadialBarChart, RadialBar, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend }
    from 'recharts';

function Home() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <main className='overflow-y-auto p-5 text-white/[.95]'>
            <div className='main-title text-green-500 flex justify-between'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards grid grid-cols-4 gap-[20px] m-[15px_0]'>
                <div className='flex flex-cols text-blue-500 justify-around p-[8px_15px] h-[200px] rounded-[5px] shadow-md hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                    <div className='flex items-center justify-between gap-4'>
                        <h3>Power</h3>
                        <FaBolt className='card_icon text-[25px]' />
                    </div>
                    <ResponsiveContainer width="100%" height={150} >
                        <RadialBarChart
                            innerRadius="60%"
                            outerRadius="90%"
                            data={data}
                            startAngle={90}
                            endAngle={-270}
                        >
                            <RadialBar dataKey="uv" cornerRadius={10} fill="#8884d8" />
                            <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="percentage-text">
                                17%
                            </text>
                            <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className="status-text">
                                used
                            </text>
                        </RadialBarChart>
                    </ResponsiveContainer>
                    <h1>300</h1>
                </div>
                <div className='flex flex-cols text-blue-500 justify-around p-[8px_15px] h-[200px] rounded-[5px] shadow-md hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                    <div className='flex items-center justify-between gap-4'>
                        <h3>Categories</h3>
                        <BsFillGrid3X3GapFill className='card_icon text-[25px]' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='flex flex-cols text-blue-500 justify-around p-[8px_15px] h-[200px] rounded-[5px] shadow-md hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                    <div className='flex items-center justify-between gap-4'>
                        <h3>Active</h3>
                        <BsDeviceSsdFill className='card_icon text-[25px]' />
                    </div>
                    <h1>33</h1>
                </div>
                <div className='flex flex-cols text-blue-500 justify-around p-[8px_15px] h-[200px] rounded-[5px] shadow-md hover:translate-y-[-10px] duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>
                    <div className='flex items-center justify-between gap-4'>
                        <h3>Alerts</h3>
                        <BsFillBellFill className='card_icon text-[25px]' />
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts grid md:grid-cols-2 gap-[20px] h-[300px] mt-[60px] grid-cols-1'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart className='rounded-[5px] shadow-md p-4'
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart className='rounded-[5px] shadow-md p-4'
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </main>
    )
}

export default Home