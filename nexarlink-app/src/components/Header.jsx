import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NexarLink from '../assets/icons/NexarLink';
import { RiSearchLine, RiMenuLine, RiSunLine, RiMoonLine } from 'react-icons/ri'; 


// The Header component should receive theme state and toggle handler from the parent
function Header({ isDarkMode, handleThemeToggle }) { // Added handleThemeToggle to props
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
    
  return (
    // .site-header: fixed, top-0, left-0, w-full, z-50, bg-box-bg, shadow-md (0 2px 10px rgba)
    <header className="fixed top-0 left-0 w-full z-50 bg-transperent backdrop-blur-xl shadow-md">
      {/* .navbar: max-w-6xl (1200px), centered, flex, justify-between, items-center, p-4 (1rem), lg:px-8 (2rem) */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4 lg:px-8">
        
        {/* .logo: text-2xl (1.5rem), font-semibold, text-accent, transition, hover:text-highlight */}
        <Link to="/" className="text-2xl font-semibold text-accent transition duration-300 hover:text-highlight flex items-center">
          <NexarLink size={30} className='text-green-400 mr-1' />
          Nexar|Link
          {/* .logo span: color-highlight, relative, left-0.5 (2px) */}
          <span className="text-highlight relative left-0.5">.</span>
        </Link>

        {/* .nav-links (Desktop Menu) */}
        {/* Mobile: hidden by default (lg:flex to show on desktop) */}
        <div 
          className={`grow justify-center 
                      hidden lg:flex 
                      ${isMenuOpen ? 'active' : ''}`} // The 'active' class is handled below for mobile
          id="navMenu"
        >
          {/* .nav-list: list-none, flex, gap-8 (2rem) */}
          <ul className="flex list-none gap-8">
            <li>
              {/* .nav-link: text-primary, font-medium, relative, transition, hover:text-accent */}
              {/* active-link: text-accent, relative (for the dot) */}
              <Link to="/" onClick={closeMenu}
                className="text-orange-400 font-medium relative transition duration-300 hover:text-accent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" onClick={closeMenu} 
              className="text-orange-400 font-medium relative transition duration-300 hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="#projects" onClick={closeMenu} className="text-orange-400 font-medium relative transition duration-300 hover:text-accent">
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contact" onClick={closeMenu} className="text-orange-400 font-medium relative transition duration-300 hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Mobile Menu Overlay (Replicating .nav-links.active) */}
        {isMenuOpen && (
             <div 
                // Mobile only, stacked menu: flex-col, absolute, top-full, left-0, w-full, bg-body-bg, shadow-md, p-4
                className={`${isDarkMode ? 'bg-[#0d1320] backdrop-blur-xl' : 'bg-white'}
                lg:hidden absolute top-full left-0 w-full 
                shadow-md py-4 text-center`}
              >
              {/* .nav-list (Mobile): flex-col, gap-4 (1rem) */}
              <ul className="flex flex-col gap-4 list-none p-0">
                  <li>
                    <Link to="/" onClick={closeMenu} className="text-orange-400 font-medium relative transition duration-300 hover:text-accent">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#about" onClick={closeMenu} className="text-orange-400 font-medium relative transition duration-300 hover:text-accent">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#projects" onClick={closeMenu} className="text-orange-400 font-medium relative transition duration-300 hover:text-accent">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="#contact" onClick={closeMenu} className="text-orange-400 font-medium relative transition duration-300 hover:text-accent">
                      Contact
                    </Link>
                  </li>
              </ul>
          </div>
        )}

        {/* .header-actions: flex, items-center, gap-4 (1rem) */}
        <div className="flex items-center gap-4">
          
          {/* .search-container */}
          <div className="flex items-center relative">
            <input
              type="text"
              // .search-input: transition, border-b-2, border-primary, bg-transparent, text-primary
              // active class logic: w-0, p-0, invisible, opacity-0 -> active: w-48 (200px), px-0 py-2 (0.5rem 0), visible, opacity-100
              // lg:active: w-[200px]; base: w-[150px]
              className={`bg-transparent border-b-2 border-primary text-primary text-base transition-all duration-300 
                         focus:outline-none focus:border-accent
                         ${isSearchActive ? 'w-36 py-2 visible opacity-100 lg:w-48' : 'w-0 p-0 invisible opacity-0'}`}
              placeholder="Search..."
              aria-label="Search site"
            />
            {/* .search-toggle: bg-transparent, border-none, text-primary, text-2xl (1.5rem), hover:text-accent */}
            <button className="bg-transparent border-none text-primary text-2xl cursor-pointer transition duration-300 hover:text-accent p-2" 
                    aria-label="Toggle search bar" 
                    onClick={handleSearchToggle}>
              <RiSearchLine className={` ${isDarkMode ? 'text-accent hover:text-orange-400' : 'text-primary'}`}/> 
            </button>
          </div>
          
          {/* Theme Toggle Button */}
          {/* .theme-toggle-btn: bg-transparent, border-none, text-primary, text-2xl, hover:text-accent */}
          <button 
            id="theme-toggle" 
            className="bg-transparent border-none text-primary text-2xl cursor-pointer transition duration-300 hover:text-accent p-2" 
            aria-label="Toggle dark/light mode" 
            onClick={handleThemeToggle} // Using prop function
          >
            {isDarkMode ? <RiSunLine className={` ${isDarkMode ? 'text-accent hover:text-orange-400' : 'text-primary'}`} /> : <RiMoonLine />} 
          </button>
          
          {/* Reusable Button (Assuming login/signup) */}
          <Link to="/signin"
                // .btn: font-medium, px-5 py-3 (12px 20px), rounded-lg (10px), bg-btn-bg, text-btn-text, hover:bg-accent
                className="font-medium px-5 py-3 rounded-lg bg-btn-bg text-btn-text transition duration-400 hover:bg-accent hover:text-btn-text no-underline hidden lg:inline-flex"
          >
            Sign In
          </Link>
          
          {/* Hamburger Menu Toggle (Mobile only) */}
          {/* .menu-toggle: display: none (lg:hidden to show on mobile), bg-none, border-none, text-primary, text-2xl, hover:text-accent */}
          <button 
            className="lg:hidden bg-none border-none text-primary text-2xl cursor-pointer transition duration-300 hover:text-accent" 
            aria-label="Toggle navigation menu" 
            onClick={handleMenuToggle}>
            <RiMenuLine className={` ${isDarkMode ? 'text-accent hover:text-orange-400' : 'text-primary'}`}/>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;