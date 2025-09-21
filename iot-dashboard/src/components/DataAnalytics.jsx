import React from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend }
    from 'recharts';
import data from '../utils/MOCK_DATA.json'

function DataAnalytics() {
    return (
        <div className="p-4 rounded-lg shadow-lg w-[1230px] h-full">
            <div className='flex flex-col lg:flex-row gap-4'>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
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
                        <Bar dataKey="temperature" fill="#8884d8" />
                        <Bar dataKey="timestamps" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
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
                        <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="timestamps" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className="avtive-devices bg-red-500">
Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio quas, doloremque, iste ipsam sint vero veritatis assumenda dolorem iusto officia vitae atque tenetur nostrum culpa quo, totam voluptas non!
                </div>
            </div>
        </div>
    )
}

export default DataAnalytics