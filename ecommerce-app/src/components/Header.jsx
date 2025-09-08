import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import { BsCart4, BsSearch, BsHeartFill, BsMoonFill, BsSunFill } from 'react-icons/bs';

function Header() {
  const location = useLocation();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [theme, setTheme] = useState('light');
    useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
  };
    const handleThemeToggle = () => {
    // Toggle the theme state
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>E-<span>Shop</span></h1>
      </div>
      <nav className='navbar'>
        <ul className='nav-links'>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          </li>
          <li>
            <Link to="/contacts" className={location.pathname === '/contacts' ? 'active' : ''}>Contacts</Link>
          </li>
        </ul>
      </nav>
      <div className="topnav-icons">
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className={`cart-num search ${isSearchActive ? 'active' : ''}`} >
         <BsSearch size={24} className='topnav-icon' onClick={handleSearchToggle}/>
        </div>
        <div className="cart-num">
         <BsHeartFill size={24} className='topnav-icon' />
        </div>
        <div className="cart-num">
         <BsCart4 size={24} className='topnav-icon' /><p>0</p>
        </div>
        <div className="cart-num" onClick={handleThemeToggle}>
          {theme === 'dark' ? <BsMoonFill size={24} className='topnav-icon'/> : <BsSunFill size={24} className='topnav-icon'/>}
        </div>
        
      </div>
      
    </header>
  );
}

export default Header;