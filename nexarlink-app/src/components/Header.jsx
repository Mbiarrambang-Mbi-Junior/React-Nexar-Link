import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { BsFillBellFill, BsSearch, BsCpuFill, BsList, BsMoonFill, BsSunFill, BsX } from 'react-icons/bs';

// Accept isDarkMode and toggleTheme as props
function Header({ isDarkMode, toggleTheme }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleCount = () => {
    setNotificationCount(notificationCount + 1);
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
   <header className={`header flex justify-between items-center h-[90px] w-full px-4 fixed z-50 shadow-[2px_2px_5px_#888] ${isDarkMode ? 'bg-white' : 'bg-[#191854] text-white'}`}>
      <div className='flex items-center gap-2'>
        <RouterLink to="/" className="flex items-center gap-2 text-2xl font-bold text-teal-500">
          <BsCpuFill className='text-teal-500' />ByteBot<span className='hidden sm:block text-orange-500'>.</span>
        </RouterLink>
      </div>

      {/* Navigation for larger screens */}
      <nav className='hidden md:flex'>
        <ul className='flex items-center gap-6 font-medium text-orange-400 text-basedark:text-gray-300'>
          <li><ScrollLink to="hero-section" spy={true} smooth={true} offset={-70} duration={500} className='hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition'>Hero</ScrollLink></li>
          <li><RouterLink to="about" spy={true} smooth={true} offset={-70} duration={500} className='hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition'>About</RouterLink></li>
          <li><RouterLink to="/projectsList" spy={true} smooth={true} offset={-70} duration={500} className='hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition'>Projects</RouterLink></li>
          <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className='hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition'>Contact</ScrollLink></li>
        </ul>
      </nav>

      <div className='flex items-center space-x-4 text-[#008c69]'>
        <div className='relative flex items-center gap-2'>
          <input
            type='text'
            placeholder='Search...'
            className={`
              transition-all duration-300 ease-in-out
              border-2 rounded-md h-[40px] p-4 focus:outline-none focus:ring-2 focus:ring-green-500
              ${isSearchOpen ? 'w-[250px] opacity-100 visible' : 'w-0 opacity-0 invisible'}
            `}
          />
          <BsSearch size={24} className='icon cursor-pointer dark:text-teal-400' onClick={toggleSearch} />
        </div>
        <div className="relative">
          <BsFillBellFill size={24} className='icon cursor-pointer dark:text-teal-400' onClick={handleCount} />
          {notificationCount > 0 && (
            <span className='absolute top-[-5px] right-[-5px] flex items-center justify-center rounded-full bg-red-500 h-4 w-4 text-white font-semibold text-xs'>
              {notificationCount}
            </span>
          )}
        </div>
        {/* Call the prop function on click */}
      <button onClick={toggleTheme} className='theme-toggle-btn p-2 rounded-full hover:bg-gray-200 transition-colors dark:hover:bg-zinc-700'>
        {isDarkMode ? (
          <BsMoonFill size={24} className='text-zinc-500' />

        ) : (
          <BsSunFill size={24} className='text-yellow-500' />
        )}
      </button>
      </div>
      
      {/* Hamburger menu for mobile */}
      <div className='md:hidden flex items-center'>
        <button onClick={handleToggleMenu} className='text-gray-900 dark:text-white'>
          {toggleMenu ? <BsX size={30} /> : <BsList size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`fixed top-[90px] right-0 bottom-0 w-[70%] bg-white dark:bg-zinc-800 shadow-lg transform transition-transform duration-300 ease-in-out ${toggleMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <ul className='flex flex-col items-start p-6 space-y-4 text-gray-700 dark:text-gray-300'>
          <li><ScrollLink to="hero-section" spy={true} smooth={true} offset={-70} duration={500} className='hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition'>Hero</ScrollLink></li>
          <li><RouterLink to="about" spy={true} smooth={true} offset={-70} duration={500} className='hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition'>About</RouterLink></li>
          <li><RouterLink to="/projectsList" spy={true} smooth={true} offset={-70} duration={500} className='hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition'>Projects</RouterLink></li>
          <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className='hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition'>Contact</ScrollLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;