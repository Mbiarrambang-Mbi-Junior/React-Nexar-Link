import React, { useState, useEffect } from 'react';
import { BsFillBellFill, BsSearch, BsCpuFill, BsList, BsMoonFill, BsSunFill, BsX } from 'react-icons/bs';

function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  // This effect synchronizes the body class with the dark mode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCount = () => {
    setNotificationCount(notificationCount + 1);
  };

  return (
    <header className='sticky top-0 z-[999] h-[60px] flex items-center justify-between bg-white/75 backdrop-blur-[10px] px-[30px] shadow-[0_6px_7px_-3px_rgba(0,0,0,0.35)] dark:bg-zinc-800/75'>
      <div className='flex items-center gap-4'>
        {/* Sidebar toggle button for mobile */}
        {isSidebarOpen ? (
          <BsX size={28} className='text-[#008c69] cursor-pointer md:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        ) : (
          <BsList size={28} className='text-[#008c69] cursor-pointer md:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        )}
        <div className='logo text-[#008c69] text-[20px] font-semibold flex gap-2'>
          <BsCpuFill className='align-middle leading-[1px] text-[26px] mr-[5px]' />
          <h1 className='hidden sm:inline'>Nexar|Link<span className='text-[#ffb650]'>.</span></h1>
        </div>
      </div>

      <div className='text-[#008c69] flex gap-4'>
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
          <BsSearch size={24} className='icon cursor-pointer' onClick={toggleSearch} />
        </div>
        <div className="relative">
          <BsFillBellFill size={24} className='icon cursor-pointer' onClick={handleCount}/>
          {notificationCount > 0 && (
            <span className='absolute top-[-5px] right-[-5px] flex items-center justify-center rounded-full bg-red-500 h-4 w-4 text-white font-semibold text-xs'>
              {notificationCount}
            </span>
          )}
        </div>
        <button onClick={toggleTheme} className='theme-toggle-btn p-2 rounded-full hover:bg-gray-200 transition-colors dark:hover:bg-zinc-700'>
          {isDarkMode ? (
            <BsSunFill size={24} className='text-yellow-500' />
          ) : (
            <BsMoonFill size={24} className='text-gray-700' />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;