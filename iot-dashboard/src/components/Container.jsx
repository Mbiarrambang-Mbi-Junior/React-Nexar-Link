// src/Container.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
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

function Container({/* toggleDarkMode, isDarkMode */}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className='flex flex-1 overflow-hidden'>
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-[280px]' : 'w-[64px]'} ${isDarkMode ? 'bg-gray-900' : 'bg-white'} hidden md:block`}>
          {/* ✅ Prop flow fixed here */}
          <Sidebar open={isSidebarOpen} isDarkMode={isDarkMode} /> 
        </div>
         <div className={`fixed inset-y-0 left-0 z-50 transform :hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-transform duration-300 ease-in-out w-[280px] bg-white shadow-lg`}>
          {/* ✅ Prop flow fixed here (for mobile sidebar) */}
          <Sidebar open={isSidebarOpen} isDarkMode={isDarkMode} />
        </div>
        <main className={`flex-1 overflow-y-auto scrollbar-hide p-4 pt-5 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <Routes>
            <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path='/signup' element={<SignUp toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path='/login'  element={<LogIn toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path="/power" element={<Power toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path="/device-management" element={<DeviceManagement toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path="/devices/:id" element={<DeviceDetails toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path="/data-analytics" element={<DataAnalytics toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path="/user-management" element={<UserManagement toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path="/attendance" element={<Attendance toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path="/reports" element={<Reports toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path="/alerts" element={<Alerts toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
            <Route path="/settings" element={<Settings toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Container;