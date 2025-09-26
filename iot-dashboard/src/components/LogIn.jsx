import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';

function LogIn({ isDarkMode }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real application, you would handle authentication here (e.g., Firebase Auth)
        console.log('Attempting login with:', { email, password });
        alert(`Logged in as: ${email}`);
    };

    return (
        <div 
            className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
            }`}
        >
            <div 
                className={`w-full max-w-md p-8 rounded-xl shadow-2xl transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
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
                    {/* Email Input */}
                    <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                isDarkMode 
                                    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
                                    : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
                            }`}
                        />
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
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                isDarkMode 
                                    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
                                    : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
                            }`}
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className={`w-full py-3 rounded-lg font-bold text-lg shadow-md transition-colors duration-200 ${
                            isDarkMode
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                        Log In
                    </button>
                </form>

                {/* Footer Links */}
                <div className="mt-6 text-center text-sm">
                    <a 
                        href="#" 
                        className="font-medium hover:underline transition-colors"
                    >
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LogIn;