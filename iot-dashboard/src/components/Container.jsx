// src/Container.jsx
import React, { useState } from 'react';
// IMPORT FIX: Added Navigate for redirection logic
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'; 
import Header from './Header'; 
import Sidebar from './Sidebar';
import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Power from './Power';
import ForgotPassword from './ForgotPassword'; // Ensure this import is correct
import DeviceManagement from './DeviceManagement';
import DeviceDetails from './DeviceDetails';
import DataAnalytics from './DataAnalytics';
import UserManagement from './UserManagement';
import Attendance from './Attendance';
import Reports from './Reports';
import Alerts from './Alerts';
import Settings from './Settings';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Container() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isAuth, setIsAuth] = useState(cookies.get("auth-token")); 
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    // Get current path to determine if we are already on a public page
    const location = useLocation();

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            document.documentElement.classList.toggle('dark', newMode);
            return newMode;
        });
    };
    
    const signUserOut = () => {
        cookies.remove("auth-token", { path: '/' });
        setIsAuth(false);
    };

    // Define public paths that shouldn't redirect an unauthenticated user
    // FIX: Added /forgot-password to the list of public paths
    const publicPaths = ['/signin', '/login', '/forgot-password'];

    // --- Core Routing Logic ---
    // If the user is authenticated (isAuth is true)
    if (isAuth) {
        // If the user is on a public path (like /signin or /login), navigate them to the dashboard (/).
        if (publicPaths.includes(location.pathname)) {
            return <Navigate to="/" replace />;
        }

        // --- AUTHENTICATED VIEW ---
        return (
            <div className='flex flex-col h-screen'>
                <Header 
                    isSidebarOpen={isSidebarOpen} 
                    setIsSidebarOpen={setIsSidebarOpen} 
                    toggleDarkMode={toggleDarkMode} 
                    isDarkMode={isDarkMode} 
                    signUserOut={signUserOut}
                />
                
                <div className='flex flex-1 overflow-hidden'>
                    {/* Desktop Sidebar */}
                    <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-[280px]' : 'w-[64px]'} ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hidden md:block`}>
                        <Sidebar open={isSidebarOpen} isDarkMode={isDarkMode} />
                    </div>
                    
                    {/* Mobile Sidebar */}
                    <div 
                        className={`fixed inset-y-0 left-0 z-50 md:hidden transition-transform duration-300 ease-in-out w-[280px] shadow-lg ${
                            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                        onClick={() => isSidebarOpen && setIsSidebarOpen(false)} 
                    >
                        <Sidebar open={isSidebarOpen} isDarkMode={isDarkMode} />
                    </div>
                    
                    {/* Main Content Area */}
                    <main className={`flex-1 overflow-y-auto scrollbar-hide p-4 pt-5 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                        <Routes>
                            {/* Authenticated Routes - / is the Dashboard */}
                            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
                            <Route path="/power" element={<Power isDarkMode={isDarkMode} />} />
                            <Route path="/device-management" element={<DeviceManagement isDarkMode={isDarkMode} />} />
                            <Route path="/devices/:id" element={<DeviceDetails isDarkMode={isDarkMode} />} />
                            <Route path="/data-analytics" element={<DataAnalytics isDarkMode={isDarkMode} />} />
                            <Route path="/user-management" element={<UserManagement isDarkMode={isDarkMode} />} />
                            <Route path="/attendance" element={<Attendance isDarkMode={isDarkMode} />} />
                            <Route path="/reports" element={<Reports isDarkMode={isDarkMode} />} />
                            <Route path="/alerts" element={<Alerts isDarkMode={isDarkMode} />} />
                            <Route path="/settings" element={<Settings isDarkMode={isDarkMode} />} />
                            
                            {/* Catch any other URL and redirect to dashboard */}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                </div>
            </div>
        );
    }
    
    // If the user is NOT authenticated (isAuth is false)
    // If the user attempts to access a protected route, navigate them to /signin.
    // The base path "/" is explicitly handled below.
    if (!publicPaths.includes(location.pathname) && location.pathname !== '/') {
        return <Navigate to="/signin" replace />;
    }

    // --- UNAUTHENTICATED VIEW ---
    return (
        <div className='flex flex-col h-screen'>
            <main className={`flex-1 overflow-y-auto scrollbar-hide transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <Routes>
                    {/* Public Routes */}
                    <Route path='/signin' element={<SignUp isDarkMode={isDarkMode} setIsAuth={setIsAuth} />} /> 
                    <Route path='/login' element={<LogIn isDarkMode={isDarkMode} setIsAuth={setIsAuth} />} />
                    {/* FIX 4: Added the ForgotPassword Route */}
                    <Route path='/forgot-password' element={<ForgotPassword isDarkMode={isDarkMode} />} />
                    
                    {/* Catch the base path "/" and redirect to /signin */}
                    <Route path="/" element={<Navigate to="/signin" replace />} />
                    {/* Catch any other URL and redirect to /signin */}
                    <Route path="*" element={<Navigate to="/signin" replace />} />
                </Routes>
            </main>
        </div>
    );
}

export default Container;