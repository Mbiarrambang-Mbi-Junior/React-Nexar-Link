// src/Container.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import '../styles/Content.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Power from './Power';
import DataAnalytics from './DataAnalytics';
import UserManagement from './UserManagement';
import Attendance from './Attendance';
import Reports from './Reports';
import Alerts from './Alerts';
import Setting from './Settings';
import Header from './Header'; // Import Header here

function Container() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
        <main className='flex-1 overflow-y-auto bg-gray-100 p-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/power" element={<Power />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Container;