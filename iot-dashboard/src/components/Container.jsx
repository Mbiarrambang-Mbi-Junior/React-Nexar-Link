// src/Container.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import SignUp from './Home/SignUp';
import DashboardName from './DashboardName';
import LogIn from './Home/LogIn';
import Power from './Power';
import ForgotPassword from './ForgotPassword';
import DeviceManagement from './DeviceManagement';
import DeviceDetails from './DeviceDetails';
import DataAnalytics from './DataAnalytics';
import LandingPage from './Home/LandingPage';
import UserManagement from './UserManagement';
import Reports from './Reports';
import Alerts from './Alerts';
import Settings from './Settings';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Container() {
    const [dashboardName, setDashboardName] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    // Check for "auth-token". It will be a string (truthy) if present, or undefined (falsy) if not.
    const [isAuth, setIsAuth] = useState(!!cookies.get("auth-token")); 
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [userData, setUserData] = useState(null); // userData state is crucial

    // Get current path for redirection logic
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
        setUserData(null); // Clear user data on logout
        setDashboardName(''); // Clear dashboard name on logout
    };

    // --- Core Routing Logic ---

    // 1. Authenticated AND Dashboard Name is Set (Full Dashboard Access)
    if (isAuth && dashboardName) {
        return (
            <div className='flex flex-col h-screen'>
                <Header
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    toggleDarkMode={toggleDarkMode}
                    isDarkMode={isDarkMode}
                    signUserOut={signUserOut}
                    userData={userData}
                    dashboardName={dashboardName}
                />

                <div className='flex flex-1 overflow-hidden'>
                    {/* Sidebar components... */}
                    <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-[280px]' : 'w-[64px]'} ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hidden md:block`}>
                        <Sidebar open={isSidebarOpen} isDarkMode={isDarkMode} />
                    </div>
                    <div className={`fixed inset-y-0 left-0 z-50 md:hidden transition-transform duration-300 ease-in-out w-[280px] shadow-lg ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} onClick={() => isSidebarOpen && setIsSidebarOpen(false)} >
                        <Sidebar open={isSidebarOpen} isDarkMode={isDarkMode} />
                    </div>
                    {/* Main Content Area */}
                    <main className={`flex-1 overflow-y-auto scrollbar-hide p-4 pt-5 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                        <Routes>
                            {/* Authenticated Dashboard Routes */}
                            <Route path="/home" element={<Home isDarkMode={isDarkMode} userData={userData} />} />
                            <Route path="/" element={<Navigate to="/home" replace />} />
                            <Route path="/device-management" element={<DeviceManagement isDarkMode={isDarkMode} isAuth={isAuth} userData={userData}/>} />
                            <Route path="/device/:id" element={<DeviceDetails isDarkMode={isDarkMode} />} />
                            <Route path="/data-analytics" element={<DataAnalytics isDarkMode={isDarkMode} />} />
                            <Route path="/power" element={<Power isDarkMode={isDarkMode} />} />

                            {/* User Management Route */}
                            <Route
                                path="/user-management"
                                element={<UserManagement isDarkMode={isDarkMode} userData={userData} />}
                            />

                            <Route path="/reports" element={<Reports isDarkMode={isDarkMode} />} />
                            <Route path="/alerts" element={<Alerts isDarkMode={isDarkMode} />} />
                            <Route path="/settings" element={<Settings isDarkMode={isDarkMode} />} />

                            {/* Catch all to redirect to home */}
                            <Route path="*" element={<Navigate to="/home" replace />} />
                        </Routes>
                    </main>
                </div>
            </div>
        );
    }
    
    // 2. Authenticated but Dashboard Name NOT Set (Redirect to setup)
    else if (isAuth && !dashboardName) {
        // The error was here: if a user is authenticated but hits any path other than '/dashboard-name', 
        // the code should render the DashboardName component directly, or redirect to it if on an irrelevant path.
        // It's cleaner to handle this redirect in the Routes.

        return (
            <main className={`flex-1 min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <Routes>
                    {/* Only allow DashboardName route when authenticated but not set */}
                    <Route
                        path="/dashboard-name"
                        element={<DashboardName isDarkMode={isDarkMode} setDashboardName={setDashboardName} />}
                    />
                    {/* Redirect any other path (including '/') to the setup page */}
                    <Route path="*" element={<Navigate to="/dashboard-name" replace />} />
                </Routes>
            </main>
        );
    }
    
    // 3. Not Authenticated (Show Login/Signup/Landing/Forgot Password)
    // Note: Removed the unused '4.' comment and consolidated.
    else { 
        return (
            <main className={`flex-1 min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <Routes>
                    <Route path="/" element={<LandingPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
                    <Route
                        path="/signup"
                        element={
                            <SignUp
                                setIsAuth={setIsAuth}
                                setUserData={setUserData}
                            />
                        }
                    />

                    {/* Ensure setIsAuth and setUserData are passed to LogIn */}
                    <Route
                        path="/signin"
                        element={
                            <LogIn
                                setIsAuth={setIsAuth}
                                setUserData={setUserData}
                            />
                        }
                    />

                    <Route path="/forgot-password" element={<ForgotPassword />} />

                    {/* The DashboardName route logic was redundant here and is simplified: 
                        If not authenticated, redirect to signin/landing for *any* protected route attempt. */}
                    <Route path="/dashboard-name" element={<Navigate to="/signin" replace />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        );
    }
}

export default Container;