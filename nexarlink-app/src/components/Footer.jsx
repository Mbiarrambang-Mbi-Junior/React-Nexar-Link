import React from 'react';
import { BsCpuFill } from 'react-icons/bs';

// 🚀 FIX APPLIED: Accept isDarkMode prop
export default function Footer({ isDarkMode }) {

    // Define background and border for the footer based on isDarkMode
    const footerBg = isDarkMode ? 'bg-gray-900' : 'bg-white';
    const borderClasses = isDarkMode ? 'border-gray-700' : 'border-gray-200';

    return (
        // Apply background and primary border conditionally
        <footer className={`w-full border-t shadow-md transition-colors duration-300 ${footerBg} ${borderClasses}`}>
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Main Content Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Brand/Logo - dark: classes should still work but main text relies on parent text color */}
                    <div className="footer-brand flex items-center space-x-2 text-2xl font-bold text-teal-600 dark:text-teal-400 transition-colors">
                        <BsCpuFill size={30} className='text-green-400' />
                        <a href="#home">Nexar|Link.<span className='text-orange-400'>.</span></a>
                    </div>

                    {/* Footer Navigation - dark: classes are good */}
                    <nav className="footer-nav" aria-label="Footer Navigation">
                        <ul className="footer-menu flex flex-wrap justify-center gap-4 md:gap-6">
                            <li><a href="#home"
                                className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</a></li>
                            {/* ... other links with dark: classes ... */}
                        </ul>
                    </nav>

                    {/* Social Icons - dark: classes are good */}
                    <div className="social-icons flex gap-4 text-2xl text-gray-500 dark:text-gray-400">
                        {/* ... icons with dark: classes ... */}
                    </div>
                </div>

                {/* Copyright/Bottom Bar - border relies on conditional class */}
                <div className={`mt-8 pt-4 border-t ${borderClasses} text-center`}>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Copyright &copy; 
                        <a href="#home" className="font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors"> Mbi Junior</a> 
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}