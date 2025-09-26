import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function SignUp({ isDarkMode }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // In a real application, you would handle user registration here
        console.log('Attempting signup with:', { name, email, password });
        alert(`User registered: ${name}`);
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
                    <BsFillPersonLinesFill className={`mx-auto text-5xl mb-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                    <h1 className="text-3xl font-extrabold">Create Account</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Join the IoT management platform</p>
                </div>

                {/* Sign Up Form */}
                <form onSubmit={handleSignUp} className="space-y-6">
                    {/* Name Input */}
                    <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                                isDarkMode 
                                    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
                                    : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
                            }`}
                        />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
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
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                                isDarkMode 
                                    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
                                    : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
                            }`}
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className={`w-full py-3 rounded-lg font-bold text-lg shadow-md transition-colors duration-200 ${
                            isDarkMode
                                ? 'bg-green-600 hover:bg-green-700 text-white'
                                : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer Links */}
                <div className="mt-6 text-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                        Already have an account? 
                        <a 
                            href="/login" // Change to the actual login route
                            className="font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:underline transition-colors ml-1"
                        >
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;