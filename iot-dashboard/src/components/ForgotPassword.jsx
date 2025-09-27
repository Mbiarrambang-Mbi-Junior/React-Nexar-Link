import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';

// Import Firebase Auth methods and config
import { auth } from '../config/firebase'; // Assuming your firebase config is here
import { sendPasswordResetEmail } from 'firebase/auth';

function ForgotPassword({ isDarkMode }) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setLoading(true);

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Success! Check your email for a link to reset your password.');
        } catch (err) {
            console.error("Password Reset Error:", err.message);
            
            // Provide user-friendly error messages
            if (err.code === 'auth/user-not-found') {
                setError('No user found with that email address.');
            } else {
                setError('Failed to send reset email. Please try again.');
            }
        } finally {
            setLoading(false);
        }
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
                    <BsArrowRepeat className={`mx-auto text-5xl mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <h1 className="text-3xl font-extrabold">Reset Password</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Enter your email to receive a password reset link.
                    </p>
                </div>

                {/* Status Messages */}
                {message && (
                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg dark:bg-green-800 dark:text-green-200">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg dark:bg-red-800 dark:text-red-200">
                        {error}
                    </div>
                )}

                {/* Forgot Password Form */}
                <form onSubmit={handlePasswordReset} className="space-y-6">
                    {/* Email Input */}
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                            disabled={loading}
                        />
                    </div>

                    {/* Reset Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-lg font-bold text-lg shadow-md transition-colors duration-200 flex items-center justify-center ${
                            loading 
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            'Send Reset Link'
                        )}
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-6 text-center text-sm">
                    <Link 
                        to="/login" 
                        className={`font-medium hover:underline transition-colors ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`}
                    >
                        Remembered your password? Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;