// src/Container.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import SignUp from './SignUp';
import DashboardName from './DashboardName';
import LogIn from './LogIn';
import Power from './Power';
import ForgotPassword from './ForgotPassword'; 
import DeviceManagement from './DeviceManagement';
import DeviceDetails from './DeviceDetails';
import DataAnalytics from './DataAnalytics';
import LandingPage from './Home/LandingPage';
import UserManagement from './UserManagement';
import Attendance from './Attendance';
import Reports from './Reports';
import Alerts from './Alerts';
import Settings from './Settings';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Container() {
    const [dashboardName, setDashboardName] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
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
        setDashboardName(''); // Clear dashboard name on logout
    };


    // Place this inside the Container function in Container.jsx
// useEffect(() => {
//     if (isAuth) {
//         // TODO: Implement the asynchronous logic here to fetch the full user object
//         // Example: onAuthStateChanged(auth, (user) => { if (user) { setUserData(user); } });
        
//         // TEMPORARY MOCK TO UNBLOCK RENDERING (Replace with real async call)
//         // If you need to test quickly without the full Firebase setup:
//         setUserData({ 
//             uid: '123', 
//             email: 'admin@example.com', 
//             name: 'Administrator', 
//             photoURL: null, 
//             role: 'Admin' 
//         });
//     }
// }, [isAuth]);
    // --- Core Routing Logic ---

    // 1. Authenticated AND Dashboard Name is Set
    if (isAuth && dashboardName) {
        
        // --- AUTHENTICATED VIEW (Full Dashboard Access) ---
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
                    <div
                        className={`fixed inset-y-0 left-0 z-50 md:hidden transition-transform duration-300 ease-in-out w-[280px] shadow-lg ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                            } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                        onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
                    >
                        <Sidebar open={isSidebarOpen} isDarkMode={isDarkMode} />
                    </div>

                    {/* Main Content Area */}
                    <main className={`flex-1 overflow-y-auto scrollbar-hide p-4 pt-5 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                        <Routes>
                            {/* Authenticated Routes */}
                            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
                            <Route path="/power" element={<Power isDarkMode={isDarkMode} />} />
                            <Route path="/devices/:id" element={<DeviceDetails isDarkMode={isDarkMode} />} />
                            <Route path="/dashboard-name" element={<DashboardName isDarkMode={isDarkMode} setIsAuth={setIsAuth} setDashboardName={setDashboardName} />} />
                            <Route path="/data-analytics" element={<DataAnalytics isDarkMode={isDarkMode} />} />
                            <Route path="/device-management" element={<DeviceManagement isDarkMode={isDarkMode} />} />
                            <Route path="/user-management" element={<UserManagement isDarkMode={isDarkMode} userData={userData}/>} />
                            <Route path="/attendance" element={<Attendance isDarkMode={isDarkMode} />} />
                            <Route path="/reports" element={<Reports isDarkMode={isDarkMode} />} />
                            <Route path="/alerts" element={<Alerts isDarkMode={isDarkMode} />} />
                            <Route path="/settings" element={<Settings isDarkMode={isDarkMode} />} />

                            {/* Catch any other URL and redirect to the dashboard home */}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                </div>
            </div>
        );
    }
    
    // 2. Authenticated BUT Dashboard Name is NOT Set
    // If authenticated, but don't have a dashboardName, and aren't already on the setup page, redirect.
    if (isAuth && !dashboardName && location.pathname !== '/dashboard-name') {
        return <Navigate to="/dashboard-name" replace />;
    }
    

    // 3. Unauthenticated OR Authenticated & on DashboardName Setup Page
    return (
        <div className='flex flex-col h-screen'>
            <main className={`flex-1 overflow-y-auto scrollbar-hide transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <Routes>
                    {/* Public Routes */}
                    <Route path='/' element={<LandingPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
                    
                    {/* Ensure setIsAuth and setUserData are passed to SignUp */}
                    <Route 
                        path="/signup" 
                        element={
                            <SignUp 
                                setIsAuth={setIsAuth} 
                                setUserData={setUserData} // This must be the correct setter function
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
                    
                    {/* Dashboard Name Setup Route */}
                    <Route 
                        path="/dashboard-name" 
                        element={
                            isAuth ? (
                                <DashboardName isDarkMode={isDarkMode} setIsAuth={setIsAuth} setDashboardName={setDashboardName} />
                            ) : (
                                <Navigate to="/signin" replace />
                            )
                        } 
                    />

                    {/* Catch any other URL and redirect appropriately */}
                    <Route path="*" element={<Navigate to={isAuth ? "/dashboard-name" : "/"} replace />} />
                </Routes>
            </main>
        </div>
    );
}

export default Container;