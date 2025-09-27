import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsDisplay } from 'react-icons/bs'; // Import BsDisplay for the new field
import { auth, provider } from '../config/firebase';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function SignUp({ isDarkMode, setIsAuth, setUserData }) { 
    // FIX 1: Added state for dashboardName
    const [dashboardName, setDashboardName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            
            // Store Auth Token
            cookies.set("auth-token", result.user.accessToken, { path: '/', maxAge: 3600 * 24 * 7 });
            console.log('Google Sign Up successful:', result.user.refreshToken);
            console.log(result.user);
            
            // FIX 2: You would typically handle setting the dashboardName (e.g., to the user's name) after Google sign-in here.
             setUserData({
                // Changed from 'img' to 'photoURL'
                photoURL: result.user.photoURL, 
                // Header uses 'name' as a fallback, so 'displayName' (or just 'name') is fine.
                name: result.user.displayName || result.user.email?.split('@')[0], 
                email: result.user.email,
                uid: result.user.uid
            })
            setIsAuth(true); 
            navigate('/'); 
        } catch (error) {
            console.error("Google Sign Up Error:", error.message);
            alert("Google Sign Up Failed: " + error.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault(); 
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            
            // Store Auth Token
            cookies.set("auth-token", result.user.accessToken, { path: '/', maxAge: 3600 * 24 * 7 });
            console.log('Email Sign Up successful:', result.user.refreshToken);
            
            // NOTE: If you need to save the dashboardName to the user's profile in Firebase, 
            // you would use updateProfile or a Firestore/Realtime Database call here, e.g.:
            // await updateProfile(result.user, { displayName: dashboardName });
            
            setIsAuth(true); 
            navigate('/'); 
        } catch (error) {
            console.error("Email/Password Sign Up Error:", error.message);
            alert("Sign Up Failed: " + error.message);
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
                    
                    {/* FIX 3: Dashboard Name Input */}
                    <div className="relative">
                        <BsDisplay className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text" // Changed to type="text"
                            placeholder="Dashboard Name"
                            value={dashboardName}
                            onChange={(e) => setDashboardName(e.target.value)}
                            required
                            className={`w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                                : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'}`} />
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
                        <Link to="/login" className="font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:underline transition-colors ml-1">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;