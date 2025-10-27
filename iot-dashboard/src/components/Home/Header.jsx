import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import NexarLink from '../../assets/icons/NexarLink';
import { Link as ScrollLink } from 'react-scroll';
import { BsCpuFill, BsList, BsMoonFill, BsSunFill, BsX } from 'react-icons/bs';


function Header({ isDarkMode, handletheme, userData }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isDocDropdownOpen, setIsDocDropdownOpen] = useState(false);
    
    // FIX: Derive isAuth status locally from the 'userData' object
    const isAuth = !!userData; 
    const userPhotoUrl = userData?.photoURL;

    const toggleMenuState = () => {
        setToggleMenu(prev => !prev);
        setIsDocDropdownOpen(false);
    }

    const toggleDocDropdown = () => {
        setIsDocDropdownOpen(prev => !prev);
    };

    const handleLinkClick = () => {
        setIsDocDropdownOpen(false);
        setToggleMenu(false);
    }


    // Helper classes for theming the desktop dropdown
    const dropdownBg = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
    // Helper classes for theming the overall header
    const headerBg = isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800';

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "Features", to: "features" },
        { name: "About Us", to: "aboutus" },
        {
            name: "Documentation", hasDropdown: true, subLinks: [
                { name: "API Reference", to: "/docs/api" },
                { name: "Guides", to: "/docs/guides" },
                { name: "Blog", to: "/blog" },
                { name: "Help Center", to: "/help" },
                { name: "Careers", to: "/careers" },
                { name: "Privacy Policy", to: "/privacy" },
            ]
        },
        { name: "Contact", to: "contactus" },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 shadow-md transition-colors duration-300 border-b ${headerBg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 text-2xl text-[#049c63] font-bold">
                        <NexarLink size={30} className='' />
                        <h1>Nexar|Link<span className='text-orange-400'>.</span></h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex flex-grow justify-center space-x-8">
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative group">
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={toggleDocDropdown}
                                            className="text-teal-700 hover:text-[#f58424] dark:hover:text-[#f58424] font-medium flex items-center transition"
                                        >
                                            {link.name}
                                        </button>
                                        {/* Desktop Dropdown Menu */}
                                        {isDocDropdownOpen && (
                                            <div className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 ${dropdownBg}`}>
                                                {link.subLinks.map((subLink, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={subLink.to}
                                                        className="block px-4 py-2 text-sm text-teal-700 hover:text-[#f58424] transition"
                                                        onClick={() => setIsDocDropdownOpen(false)}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <ScrollLink
                                        to={link.to}
                                        className="text-teal-600 hover:text-[#f58424] font-medium transition"
                                    >
                                        {link.name}
                                    </ScrollLink>
                                )}
                            </div>
                        ))}
                    </nav>
                    {/* signup */}
                    {/* Auth Status / Profile or Login Buttons */}
                    {isAuth && userPhotoUrl ? (
                        <div className="ml-4 flex items-center">
                            <img
                                src={userPhotoUrl} // Use the actual user photo URL
                                alt={userData.displayName || 'User Profile'}
                                className="h-10 w-10 rounded-full object-cover border border-teal-600 cursor-pointer"
                            />
                        </div>
                    ) : (
                        <div
                            className="signup-login hidden lg:flex items-center space-x-4 mr-5"
                        >
                            {/* Log In Button */}
                            <Link
                                to='/login'
                                className={`px-4 py-2 rounded-lg transition-colors font-medium
 text-teal-700 hover:text-teal-600 dark:hover:text-teal-400`}
                            >
                                Log In
                            </Link>
                            {/* Sign Up Button */}
                            <Link to='/signup' className={`px-4 py-2 rounded-lg transition-colors font-semibold
     shadow-md bg-teal-600 text-white hover:bg-teal-700`}>Sign Up
                            </Link>
                        </div>
                    )}

                    {/* Right Icons and Buttons */}
                    <div className="flex items-center space-x-4">

                        {/* Dark Mode Toggle (Now uses the prop function) */}
                        <button
                            onClick={handletheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 text-teal-600"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDarkMode ? <BsSunFill size={20} className="text-yellow-400" /> : <BsMoonFill size={20} className="text-gray-500" />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenuState}
                            className="lg:hidden p-2 text-teal-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition duration-300"
                            aria-label="Toggle Menu"
                        >
                            {toggleMenu ? <BsX size={24} /> : <BsList size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Conditional Rendering) */}
            {toggleMenu && (
                <div className={`lg:hidden shadow-lg p-4 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <ul className="space-y-3">
                        {navLinks.map((link, index) => (
                            <li key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                {link.hasDropdown ? (
                                    <>
                                        {/* Dropdown Toggle */}
                                        <div
                                            className="flex justify-between items-center py-2"
                                            onClick={toggleDocDropdown}
                                        >
                                            <span className="font-medium ">{link.name}</span>
                                        </div>
                                        {/* Mobile Sub-Links */}
                                        {isDocDropdownOpen && (
                                            <ul className={`pl-4 pb-2 space-y-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {link.subLinks.map((subLink, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={subLink.to}
                                                            onClick={handleLinkClick}
                                                            className="block py-1 hover:text-teal-600 dark:hover:text-teal-400 transition"
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        to={link.to}
                                        onClick={handleLinkClick}
                                        className="block py-2 hover:text-teal-600 dark:hover:text-teal-400 transition font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;