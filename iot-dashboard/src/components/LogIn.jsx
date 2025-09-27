import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';

// Import Firebase Auth methods and config
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function LogIn({ isDarkMode, setIsAuth, setUserData }) {
    // FIX 1: Changed state variable from 'email' to 'dashboardName'
    const [dashboardName, setDashboardName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // FIX 2: Use dashboardName as the email argument for Firebase sign-in
            const result = await signInWithEmailAndPassword(auth, dashboardName, password);

            // Store Auth Token
            cookies.set("auth-token", result.user.accessToken, { path: '/', maxAge: 3600 * 24 * 7 });
            console.log('Login successful:', result.user.uid);

            // Update the parent authentication state and navigate to dashboardName route
            setIsAuth(true);
            // FIX: Navigate to the Dashboard Name setup route
            navigate('/dashboard-name'); 
            
            // FIX: Ensure 'result.user' is used to get data
            setUserData({
                photoURL: result.user.photoURL, // Must use 'photoURL'
                name: result.user.displayName,  // Using 'name' is safer if you don't update Firebase displayName
                email: result.user.email,
                uid: result.user.uid
            });
        } catch (error) {
            console.error("Login Error:", error.message);
            alert("Login Failed: " + error.message);
        }
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
                }`}
        >
            <div
                className={`w-full max-w-md p-8 rounded-xl shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
                    }`}
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <BsFillGearFill className={`mx-auto text-5xl mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <h1 className="text-3xl font-extrabold">Welcome Back</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Sign in to manage your devices</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Dashboard Name/Email Input */}
                    <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text" // Use text type to allow dashboard names or emails
                            // FIX 3: Updated placeholder and value/onChange handler
                            placeholder="Dashboard Name or Email"
                            value={dashboardName}
                            onChange={(e) => setDashboardName(e.target.value)}
                            required
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                                : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'}`} />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                                : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'}`} />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className={`w-full py-3 rounded-lg font-bold text-lg shadow-md transition-colors duration-200 ${isDarkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                        Log In
                    </button>
                </form>

                {/* Footer Links */}
                <div className="mt-6 text-center text-sm">
                    <Link
                        to="/signin"
                        className={`font-medium hover:underline transition-colors ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`}
                    >
                        Don't have an account? Sign Up
                    </Link>
                    <span className="mx-2 text-gray-400 dark:text-gray-500">|</span>
                    {/* FIX 5: Replaced 'a' tag with 'Link' component pointing to the new route */}
                    <Link
                        to="/forgot-password"
                        className={`font-medium hover:underline transition-colors ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                    >
                        Forgot password?
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LogIn;