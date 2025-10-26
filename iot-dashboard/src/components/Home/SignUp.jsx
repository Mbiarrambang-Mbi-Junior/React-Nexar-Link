import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { auth, provider } from '../../config/firebase';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

// The setUserData prop is now correctly received from the parent
function SignUp({ isDarkMode, setIsAuth, setUserData }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Store Auth Token
            cookies.set("auth-token", user.accessToken, { path: '/', maxAge: 3600 * 24 * 7 });
            console.log('Google Sign Up successful. User UID:', user.uid);

            // Set User Data
            setUserData({
                photoURL: user.photoURL,
                name: user.displayName || user.email?.split('@')[0],
                email: user.email,
                uid: user.uid
            })

            setIsAuth(true);
            // FIX: Navigate to the dashboard name setup page as required
            navigate('/dashboard-name');
        } catch (error) {
            // FIX: Display a user-friendly message by using only the error.message property
            console.error("Google Sign Up Error:", error);
            alert(`Google Sign Up Failed: ${error.message}`);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;

            // Store Auth Token
            cookies.set("auth-token", user.accessToken, { path: '/', maxAge: 3600 * 24 * 7 });
            console.log('Email Sign Up successful. User UID:', user.uid);

            // Setting basic user data for email/password sign up
            setUserData({
                photoURL: user.photoURL,
                name: user.email?.split('@')[0],
                email: user.email,
                uid: user.uid
            })

            setIsAuth(true);
            // FIX: Navigate to the dashboard name setup page as required
            navigate('/dashboard-name');
        } catch (error) {
            console.error("Email/Password Sign Up Error:", error.message);
            alert(`Sign Up Failed: ${error.message}`);
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className={`w-full max-w-md p-8 rounded-xl shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
                {/* Header */}
                <div className="text-center mb-8">
                    <BsFillPersonLinesFill className={`mx-auto text-5xl mb-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                    <h1 className="text-3xl font-extrabold">Create Account</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Join the IoT management platform</p>
                </div>

                {/* Sign Up Form */}
                <form onSubmit={handleSignUp} className="space-y-6">
                    {/* Email Input */}
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                                : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'}`} />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Password (min 6 characters)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                                : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'}`} />
                    </div>

                    {/* Sign Up Button (Email/Password) */}
                    <button
                        type='submit'
                        className={`w-full py-3 rounded-lg font-bold text-lg hover:cursor-pointer shadow-md transition-colors duration-200 ${isDarkMode
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'}`}>
                        Sign Up with Email
                    </button>
                    <hr className='mt-6 border-gray-300 dark:border-gray-600' />
                </form>

                <div className="mt-6">
                    <button
                        onClick={signInWithGoogle}
                        className={`w-full flex gap-4 items-center justify-center hover:cursor-pointer py-3 rounded-lg font-bold text-lg shadow-md transition-colors duration-200 
                            ${isDarkMode
                                ? 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                            }`}
                    >
                        <FaGoogle className='text-red-500' /> Sign Up with Google
                    </button>
                </div>

                {/* Footer Links */}
                <div className="mt-6 text-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                        Already have an account?
                        <Link to="/signin" className="font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:underline transition-colors ml-1">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;