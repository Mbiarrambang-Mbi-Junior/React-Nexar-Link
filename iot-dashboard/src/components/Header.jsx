import React, { useState, useRef } from 'react';
import { BsFillBellFill, BsSearch, BsCpuFill, BsPerson, BsList, BsMoonFill, BsSunFill, BsX } from 'react-icons/bs';

function Header({ isSidebarOpen, setIsSidebarOpen, toggleDarkMode, isDarkMode, signUserOut, userData }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [notificationCount, setNotificationCount] = useState(0);


  const handleCount = () => {
    setNotificationCount(notificationCount + 1);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <header className={`sticky top-0 z-[999] h-[60px] flex items-center justify-between  backdrop-blur-[10px] px-[30px] shadow-[0_6px_7px_-3px_rgba(0,0,0,0.35)] ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className='flex items-center gap-4'>
        {
          isSidebarOpen ?
            <BsX size={28} className='text-[#008c69] cursor-pointer md:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            : <BsList size={28} className='text-[#008c69] cursor-pointer md:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        }

        <div className='sidebar-title'>
          <div className='logo text-[#008c69] text-[20px] font-semibold flex gap-2'>
            <BsCpuFill className='align-middle leading-[1px] text-[26px] mr-[5px]' />
            <h1 className='hidden sm:inline'>Nexar|Link<span className='text-[#ffb650]'>.</span></h1>
          </div>
        </div>
      </div>

      <div className='text-blue-500 flex items-center gap-4'>
        {/* You can add more icons/elements here if needed */}
      </div>

      <div className='text-[#008c69] flex gap-4'>
        <div className='relative flex items-center gap-2 justify-center'>
          {isSearchOpen && (
            <input
              type='text'
              placeholder='Search...'
              className={`border-2 rounded-md w-[250px] h-[40px] p-4 focus:outline-none focus:ring-2 focus:ring-green-500
                transition-all duration-300 ease-in-out
              `}
            />
          )}
          <BsSearch size={24} className='icon cursor-pointer' onClick={toggleSearch} />
        </div>
        <div className="alert-span flex">
          <BsFillBellFill size={24} className='icon cursor-pointer' onClick={handleCount} />
          <span className='flex items-center justify-center relative top-[1px] rounded-full p-1 right-[10px] bg-red-500 h-4 text-white font-semibold text-xs w-4'>{notificationCount}</span>
        </div>
        <div className="person flex">
          {!userData ?
            <BsPerson size={24} className='icon cursor-pointer' onClick={handleCount} />
            : <span className='flex items-center justify-center relative top-[1px] rounded-full p-1 right-[10px] bg-red-500 h-4 text-white font-semibold text-xs w-4'>{result.user.photoURL}</span>
          }
        </div>
        <button id="theme-toggle" className="theme-toggle-btn" aria-label="Toggle dark/light mode" onClick={handleThemeToggle}>
          {
            isDarkMode ?
              <BsSunFill size={24} className='icon cursor-pointer text-yellow-500' onClick={toggleDarkMode} />
              :
              <BsMoonFill size={24} className='icon cursor-pointer text-gray-500' onClick={toggleDarkMode} />
          }
        </button>
      </div>
    </header>
  );
}

export default Header;