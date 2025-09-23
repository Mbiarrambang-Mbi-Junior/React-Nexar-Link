import React, { useState, useEffect } from 'react';
import { FaTable, FaDownload, FaLaptop } from 'react-icons/fa';
import { AiOutlineLaptop } from 'react-icons/ai';
import checkin from '../assets/checkin.png';
import cross from '../assets/cross.png';

const Attendance = () => {
  const [liveUsers, setLiveUsers] = useState({});
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
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
  }, []);

  const downloadReport = () => {
    alert('Download functionality would be implemented here.');
  };

  return (
    <div className="p-4">
      <h1 className="flex items-center gap-2 text-2xl font-bold mb-6 text-[var(--text-primary-color)]">
        <FaLaptop className="text-[var(--text-accent-color)]" /> Attendance Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ATTENDANCE REPORT Section */}
        <div className="rounded-lg shadow-md">
          <div className=" p-4 rounded-t-lg flex items-center text-[var(--text-primary-color)]">
            <FaTable className="mr-2 text-[var(--text-accent-color)]" />
            <h2 className="text-lg font-semibold">ATTENDANCE REPORT</h2>
          </div>
          <div className="p-4">
            {attendanceData.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No attendance data available.</p>
            ) : (
              <ul className="space-y-2">
                {attendanceData.map((record, index) => (
                  <li key={index} className="flex justify-between items-center p-2 rounded-lg ">
                    <div className="flex items-center">
                      <AiOutlineLaptop className="mr-2 text-xl text-[var(--text-accent-color)]" />
                      <span className="font-medium text-[var(--text-primary-color)]">User ID: {record.uid}</span>
                    </div>
                    <span className={`text-sm font-semibold ${record.status ? 'text-green-500' : 'text-red-500'}`}>
                      {record.status ? 'Present' : 'Absent'}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={downloadReport}
              className="mt-4 w-full bg-[var(--text-accent-color)] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              <FaDownload className="inline-block mr-2" /> Download Report
            </button>
          </div>
        </div>

        {/* LIVE STATUS Section */}
        <div className="rounded-lg shadow-md">
          <div className=" p-4 rounded-t-lg flex items-center text-[var(--text-primary-color)]">
            <FaTable className="mr-2 text-[var(--text-accent-color)]" />
            <h2 className="text-lg font-semibold">LIVE STATUS</h2>
          </div>
          <div className="p-4">
            {Object.keys(liveUsers).length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No data available</p>
            ) : (
              <div className="flex flex-wrap gap-4">
                {Object.entries(liveUsers).map(([uid, status]) => (
                  <div key={uid} className="flex items-center gap-4 p-4 rounded-lg border border-gray-300 shadow-sm dark:border-zinc-700">
                    <img 
                      src={status === 1 ? checkin : cross} 
                      alt={status === 1 ? 'Checked In' : 'Checked Out'} 
                      className="w-16 h-16"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-[var(--text-primary-color)]">UID: {uid}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Status: {status === 1 ? 'Online' : 'Offline'}</p>
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