import React from 'react';
import { BsPeopleFill, BsPersonCheckFill, BsClockHistory, BsExclamationTriangleFill } from 'react-icons/bs';

function Home() {
  const stats = [
    { title: "Total Students", value: "1,240", icon: <BsPeopleFill />, color: "bg-blue-500" },
    { title: "Present Today", value: "1,180", icon: <BsPersonCheckFill />, color: "bg-green-500" },
    { title: "Late Arrivals", value: "42", icon: <BsClockHistory />, color: "bg-yellow-500" },
    { title: "Absent", value: "18", icon: <BsExclamationTriangleFill />, color: "bg-red-500" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Attendance Dashboard</h1>
        <p className="text-gray-500">Overview for Thursday, Dec 18, 2025</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`${stat.color} p-4 rounded-lg text-white text-2xl`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-semibold">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Attendance Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recent Logs</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-sm uppercase border-b">
                  <th className="pb-3 font-medium">Student Name</th>
                  <th className="pb-3 font-medium">Check-in Time</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b last:border-0">
                  <td className="py-4">John Doe</td>
                  <td className="py-4">08:15 AM</td>
                  <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">On Time</span></td>
                </tr>
                <tr className="border-b last:border-0">
                  <td className="py-4">Jane Smith</td>
                  <td className="py-4">08:45 AM</td>
                  <td className="py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Late</span></td>
                </tr>
                <tr className="border-b last:border-0">
                  <td className="py-4">Mike Ross</td>
                  <td className="py-4">08:02 AM</td>
                  <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">On Time</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Summary Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Class Performance</h2>
          <div className="space-y-4">
             <p className="text-sm text-gray-600">Average weekly attendance: <span className="font-bold">94%</span></p>
             <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
             </div>
             <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Generate Report
             </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;