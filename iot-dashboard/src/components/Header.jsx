import React, { useState, useRef } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsCpuFill, BsList } from 'react-icons/bs';

function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className='sticky top-0 z-[999] h-[60px] flex items-center justify-between bg-white/75 backdrop-blur-[10px] px-[30px] shadow-[0_6px_7px_-3px_rgba(0,0,0,0.35)]'>
      <div className='flex items-center gap-4'>
        <BsList size={28} className='text-blue-500 cursor-pointer md:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className='sidebar-title'>
          <div className='logo text-blue-500 flex gap-2'>
            <BsCpuFill className='align-middle leading-[1px] text-[26px] mr-[5px]' />
            <span className='hidden sm:inline'>Nexar|Link</span>
          </div>
        </div>
      </div>
      
      <div className='text-blue-500 flex items-center gap-4'>
        <div className='relative flex items-center gap-2 justify-center'>
          <BsSearch size={24} className='icon cursor-pointer' onClick={toggleSearch} />
          {isSearchOpen && (
            <input
              type='text'
              placeholder='Search...'
              className={`border-2 rounded-md w-[250px] h-[40px] p-4 focus:outline-none focus:ring-2 focus:ring-green-500
                transition-all duration-300 ease-in-out
              `}
            />
          )}
        </div>
      </div>

      <div className='text-blue-500 flex gap-4'>
        <BsFillBellFill size={24} className='icon' />
        <BsFillEnvelopeFill size={24} className='icon' />
        <BsPersonCircle size={24} className='icon' />
      </div>
    </header>
  );
}

export default Header;