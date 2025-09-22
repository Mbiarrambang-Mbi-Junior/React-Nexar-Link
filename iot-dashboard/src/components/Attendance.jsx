import React, { useState, useEffect } from 'react';
import { FaTable, FaDownload, FaLaptop } from 'react-icons/fa';
import { AiOutlineLaptop } from 'react-icons/ai';
import checkin from '../assets/checkin.png'
import cross from '../assets/cross.png'

const Attendance = () => {
  // State to hold the data
  const [liveUsers, setLiveUsers] = useState({});
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // This hook fetches data when the component first mounts.
    // In a real application, this is where you'd connect to Firebase or your API.
    const fetchData = () => {
      // Mock data for demonstration purposes
      const mockLiveUsers = {
        'user123': 1,
        'user456': 0,
        'user789': 1,
      };

      const mockAttendanceData = [
        { uid: 'user123', id: 'device01', time: new Date().toISOString(), status: true },
        { uid: 'user456', id: 'device02', time: new Date().toISOString(), status: false },
        { uid: 'user789', id: 'device03', time: new Date().toISOString(), status: true },
      ];

      setLiveUsers(mockLiveUsers);
      setAttendanceData(mockAttendanceData);
    };

    fetchData();
  }, []); // The empty dependency array ensures this runs only once

  const handleExport = () => {
    // This is a pure JavaScript function to export data to a CSV file.
    const headers = ['User ID', 'Device ID', 'Time', 'Status'];
    const rows = attendanceData.map(record => [
      record.uid,
      record.id,
      new Date(record.time).toLocaleString(),
      record.status ? 'Check In' : 'Check Out'
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(',') + "\n"
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance_data.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="attendance-container min-h-screen w-[1100px] p-4">
      <div className="bg-[#007BFF] shadow-md p-4 text-center">
        <h1 className="text-3xl font-bold text-white">SMART ATTENDANCE SYSTEM</h1>
      </div>
      <div className="container mx-auto p-4 md:p-8">
        {/* Attendance Summary Section */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="bg-gray-200 p-4 rounded-t-lg flex items-center text-gray-700">
            <FaTable className="mr-2" />
            <h2 className="text-lg font-semibold">Attendance Summary</h2>
          </div>
          <div className="p-4">
            <button
              type="button"
              className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              onClick={handleExport}
            >
              <FaDownload className="inline-block mr-2" />
              Export
            </button>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    <th className="py-3 px-4 border-b border-gray-300">User ID</th>
                    <th className="py-3 px-4 border-b border-gray-300">Device ID</th>
                    <th className="py-3 px-4 border-b border-gray-300">Time</th>
                    <th className="py-3 px-4 border-b border-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((record, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4">{record.uid}</td>
                      <td className="py-3 px-4">{record.id}</td>
                      <td className="py-3 px-4">{new Date(record.time).toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                            record.status
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                          }`}
                        >
                          {record.status ? 'Check In' : 'Check Out'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* LIVE STATUS Section */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-gray-200 p-4 rounded-t-lg flex items-center text-gray-700">
            <FaTable className="mr-2" />
            <h2 className="text-lg font-semibold">LIVE STATUS</h2>
          </div>
          <div className="p-4">
            {Object.keys(liveUsers).length === 0 ? (
              <p className="text-gray-500">No data available</p>
            ) : (
              <div className="flex flex-wrap gap-4">
                {Object.entries(liveUsers).map(([uid, status]) => (
                  <div key={uid} className="flex items-center gap-4 p-4 rounded-lg border border-gray-300 shadow-sm">
                    {/* The image is conditionally rendered based on the user's status */}
                    <img 
                      src={status === 1 ? checkin : cross} 
                      alt={status === 1 ? 'Checked In' : 'Checked Out'} 
                      className="w-16 h-16"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">UID: {uid}</h3>
                      <p className="text-sm">Status: {status === 1 ? 'Online' : 'Offline'}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;