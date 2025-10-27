import React from 'react';
import { BsCpuFill } from 'react-icons/bs';

// Accept isDarkMode and handletheme from LandingPage.jsx
export default function Footer() {

    return (
        <footer className={`w-full border-t shadow-md transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Main Content Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Brand/Logo */}
                    <div className="footer-brand flex items-center space-x-2 text-2xl font-bold text-teal-600 dark:text-teal-400 transition-colors">
                        <BsCpuFill size={30} className='text-green-400' />
                        <a href="#home">Nexar|Link.<span className='text-orange-400'>.</span></a>
                    </div>

                    {/* Footer Navigation */}
                    <nav className="footer-nav" aria-label="Footer Navigation">
                        <ul className="footer-menu flex flex-wrap justify-center gap-4 md:gap-6">
                            <li><a href="#home"
                                className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</a></li>
                            <li><a href="#about"
                                className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">About</a></li>
                            <li><a href="#projects"
                                className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Projects</a></li>
                            <li><a href="#contact"
                                className="text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Contact</a></li>
                        </ul>
                    </nav>

                    {/* Social Icons */}
                    <div className="social-icons flex gap-4 text-2xl text-gray-500 dark:text-gray-400">
                        {/* Assuming 'uil' is a globally available icon class (e.g., Unicons) */}
                        <a href="#" className="social-icon hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                            aria-label="Instagram"><i className="uil uil-instagram"></i></a>
                        <a href="#" className="social-icon hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label="LinkedIn"><i className="uil uil-linkedin-alt"></i></a>
                        <a href="#" className="social-icon hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label="Dribbble"><i className="uil uil-dribbble"></i></a>
                        <a href="#" className="social-icon hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label="GitHub"><i className="uil uil-github-alt"></i></a>
                    </div>
                </div>

                {/* Copyright/Bottom Bar */}
                <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
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