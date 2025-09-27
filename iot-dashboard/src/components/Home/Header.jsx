import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsCpuFill, BsList, BsMoonFill, BsSunFill, BsX, BsChevronDown } from 'react-icons/bs';

// Ensure toggleDarkMode is included in the props list if it's used below
function Header({ isDarkMode, toggleDarkMode, signUserOut, userData }) { 
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false); // State for mobile menu visibility
    const [isDocDropdownOpen, setIsDocDropdownOpen] = useState(false); 
    // const [theme, setTheme] = useState('light'); // Removed unused state

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const toggleDocDropdown = () => {
        setIsDocDropdownOpen(prev => !prev);
    };
    
    // Removed redundant handleMenuClick, use toggle function directly

    const handleLinkClick = () => {
        setIsDocDropdownOpen(false); // Close dropdown if a link is clicked
        setToggleMenu(false); // Close the mobile menu automatically
    }

    // Helper classes for theming the desktop dropdown
    const dropdownBg = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
    const linkHover = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

    // Desktop/Mobile Navigation Links Data
    const navLinks = [
        { name: "Getting Started", to: "/getting-started", isDropdown: false },
        { 
            name: "Documentation", 
            to: "#", 
            isDropdown: true,
            subLinks: [
                { name: "API Reference", to: "/docs/api" },
                { name: "User Guides", to: "/docs/guides" },
                { name: "FAQ", to: "/docs/faq" },
                { name: "Automation", to: "/docs/automation" },
                { name: "Energy Management", to: "/docs/energy" },
                { name: "Device Organisation", to: "/docs/devices" },
                { name: "Dashboards", to: "/docs/dashboards" },
                { name: "Advanced configuration", to: "/docs/advanced" },
            ]
        },
        { name: "Integration", to: "/integration", isDropdown: false },
        { name: "Blog", to: "/blog", isDropdown: false },
        { name: "Need help?", to: "/help", isDropdown: false },
    ];


    return (
        <header className={`sticky top-0 z-[999] h-[60px] flex items-center justify-between backdrop-blur-[10px] px-[30px] shadow-[0_6px_7px_-3px_rgba(0,0,0,0.35)] ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            
            {/* Logo */}
            <div className='logo text-[#008c69] text-[20px] font-semibold flex gap-2'>
                <BsCpuFill className='align-middle leading-[1px] text-[26px] mr-[5px]' />
                <h1 className='hidden sm:inline'>Nexar|Link<span className='text-[#ffb650]'>.</span></h1>
            </div>

            {/* Desktop Navigation (Hidden on Small Screens) */}
            <nav className="topnav-bar hidden md:block">
                <ul className="flex space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative">
                            {link.isDropdown ? (
                                <>
                                    <button
                                        onClick={toggleDocDropdown}
                                        className="nav-link flex items-center text-[#008c69] hover:text-[#008c69] dark:hover:text-green-400 transition"
                                        aria-expanded={isDocDropdownOpen}
                                    >
                                        {link.name}
                                        <BsChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isDocDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                                    </button>
                                    {isDocDropdownOpen && (
                                        <div 
                                            className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg border ${dropdownBg} ring-1 ring-black ring-opacity-5 z-20`}
                                            role="menu"
                                        >
                                            <div className="py-1">
                                                {link.subLinks.map(subLink => (
                                                    <Link
                                                        key={subLink.name}
                                                        to={subLink.to}
                                                        onClick={() => setIsDocDropdownOpen(false)} 
                                                        className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${linkHover}`}
                                                        role="menuitem"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link to={link.to} className="nav-link text-[#008c69] hover:text-[#008c69] dark:hover:text-green-400 transition">
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            
            {/* Right Side Icons (Search & Toggles) */}
            <div className='flex items-center gap-4 text-[#008c69]'>
                
                {/* Search Bar */}
                <div className='relative flex items-center gap-2 justify-center'>
                    {isSearchOpen && (
                        <input
                            type='text'
                            placeholder='Search...'
                            className={`border-2 rounded-md w-[200px] sm:w-[250px] h-[40px] p-4 focus:outline-none focus:ring-2 focus:ring-green-500
                                transition-all duration-300 ease-in-out bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600
                            `}
                        />
                    )}
                    <BsSearch size={24} className='icon cursor-pointer hover:opacity-80 transition' onClick={toggleSearch} />
                </div>

                <div className="signin-login">
                    <button className='flex gap-2 items-center justify-center'>
                        {/* FIX: Corrected path to /signin and text to 'Sign Up' (maps to SignUp.jsx) */}
                        <Link to="/signup" className='hover:text-[#008c69] transition duraion-300'>Sign Up</Link>
                        {/* FIX: Corrected path to /login and text to 'Log In' (maps to LogIn.jsx) */}
                        <Link to="/signin" className='hover:text-[#008c69] transition duraion-300'>Log In</Link>
                    </button>
                </div>

                {/* Theme Toggle Button (Logic is correct: show sun when dark, show moon when light) */}
                <button id="theme-toggle" className="theme-toggle-btn" aria-label="Toggle dark/light mode" onClick={toggleDarkMode}>
                    {isDarkMode ?
                        <BsSunFill size={24} className='icon cursor-pointer text-yellow-500'/>
                        :
                        <BsMoonFill size={24} className='icon cursor-pointer text-gray-500'/>
                    }
                </button>
                
                {/* Mobile Menu Toggle (Visible on Small Screens) */}
                <div className='md:hidden'>
                    {toggleMenu ?
                        // FIX: Use setToggleMenu(false) to close
                        <BsX size={32} className='text-[#008c69] cursor-pointer' onClick={() => setToggleMenu(false)} /> 
                        : 
                        // FIX: Use setToggleMenu(true) to open
                        <BsList size={32} className='text-[#008c69] cursor-pointer' onClick={() => setToggleMenu(true)} />
                    }
                </div>
            </div>
            
            {/* Mobile Navigation Menu (Fixed & Full-Screen) */}
            {toggleMenu && (
                <div className={`fixed inset-0 top-[60px] w-full h-[calc(100vh-60px)] z-50 p-6 
                                ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} 
                                transition-transform duration-300 ease-in-out md:hidden`}>
                    <ul className="flex flex-col space-y-4 text-xl font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {link.isDropdown ? (
                                    <>
                                        <button
                                            onClick={toggleDocDropdown}
                                            className="w-full text-left py-2 flex items-center"
                                        >
                                            {link.name}
                                            <BsChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isDocDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                                        </button>
                                        {isDocDropdownOpen && (
                                            <ul className="pl-4 mt-2 space-y-2 text-base border-l border-gray-300 dark:border-gray-700">
                                                {link.subLinks.map(subLink => (
                                                    <li key={subLink.name}>
                                                        <Link
                                                            to={subLink.to}
                                                            onClick={handleLinkClick} // Closes both dropdown and menu
                                                            className="block py-1 hover:text-[#008c69] dark:hover:text-green-400 transition"
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
                                        onClick={handleLinkClick} // Closes menu
                                        className="block py-2 hover:text-[#008c69] dark:hover:text-green-400 transition"
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