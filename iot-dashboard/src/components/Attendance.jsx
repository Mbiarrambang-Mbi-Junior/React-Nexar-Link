import React, { useState, useEffect } from 'react';
import { FaTable, FaDownload, FaLaptop } from 'react-icons/fa';
import { AiOutlineLaptop } from 'react-icons/ai';


const Attendance = () => {
  const [liveUsers, setLiveUsers] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // This is where you would typically fetch data from a backend
    // Since Firebase and JQuery were removed, this is a placeholder
    // for a data fetching function.
    const fetchData = async () => {
      // Mock data for demonstration
      const mockLiveUsers = {
        'user123': 1,
        'user456': 0,
      };

      const mockAttendanceData = [
        { uid: 'user123', id: 'device01', time: new Date().toISOString(), status: true },
        { uid: 'user456', id: 'device02', time: new Date().toISOString(), status: false },
      ];

      setLiveUsers(mockLiveUsers);
      setAttendanceData(mockAttendanceData);
    };

    fetchData();
  }, []);

  const handleExport = () => {
    // Logic for exporting data (e.g., to CSV) goes here
    console.log('Exporting data...');
    // In a real application, you'd use a library like 'papaparse'
    // to convert the attendanceData array to a CSV string and trigger a download.
  };

  return (
    <div className="max-h-screen w-[1200px] ml-[20px] mt-[20px]">
      <div className="bg-[#007BFF] shadow-md p-4 text-center flex flex-wrap justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800">SMART ATTENDANCE SYSTEM</h1>
      </div>
      <div className="container mx-auto p-4 md:p-8">
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
                    {/* Placeholder for images. In a real app, you would import these or use a CDN. */}
                    <img src="./img/checkin.png" alt="Check In" className="w-16 h-16" />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">UID: {uid}</h3>
                      <div className="flex gap-2 mt-2">
                        <img
                          src="./img/tick.png"
                          alt="True"
                          className={`w-8 h-8 ${status === 1 ? 'visible' : 'hidden'}`}
                        />
                        <img
                          src="./img/cross.png"
                          alt="False"
                          className={`w-8 h-8 ${status === 0 ? 'visible' : 'hidden'}`}
                        />
                      </div>
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