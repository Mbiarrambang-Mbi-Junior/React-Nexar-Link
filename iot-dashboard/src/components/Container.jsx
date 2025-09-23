// src/Container.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Power from './Power';
import DeviceManagement from './DeviceManagement';
import DeviceDetails from './DeviceDetails';
import DataAnalytics from './DataAnalytics';
import UserManagement from './UserManagement';
import Attendance from './Attendance';
import Reports from './Reports';
import Alerts from './Alerts';
import Settings from './Settings';
import Header from './Header'; 

function Container() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className='flex flex-col h-screen'>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className='flex flex-1 overflow-hidden'>
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-[280px]' : 'w-[64px]'} hidden md:block`}>
          <Sidebar open={isSidebarOpen} />
        </div>
        <div className={`fixed inset-y-0 left-0 z-50 transform md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-[280px] bg-white shadow-lg`}>
          <Sidebar open={isSidebarOpen} />
        </div>
        <main className='flex-1 overflow-y-auto scrollbar-hide bg-[var(--body-bg-color)]  p-4 pt-5 transition-colors duration-300'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/power" element={<Power />} />
            <Route path="/device-management" element={<DeviceManagement />} />
            <Route path="/devices/:id" element={<DeviceDetails />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Container;