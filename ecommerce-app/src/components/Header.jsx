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
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to={'/'}className='.Link'>
        <h1>E-<span>Shop</span></h1>
        </Link>
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
          <li>
            <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
          </li>
        </ul>
      </nav>
      <div className="topnav-icons">
        {/* The dynamic class is now on the input itself */}
        <input 
          type="text" 
          className={`search-bar ${isSearchActive ? 'active' : ''}`} 
          placeholder="Search..." 
        />
        <div className="cart-num search">
          {/* The onClick handler is on the icon */}
          <BsSearch size={24} className='topnav-icon' onClick={handleSearchToggle}/>
        </div>
        <Link to="/favourit" className="favourite-link">
        <div className="cart-num">
          <BsHeartFill size={24} className='topnav-icon' />
        </div>
        </Link>
        <Link to="/cart" className="cart-link">
        <div className="cart-num">
          <BsCart4 size={24} className='topnav-icon'/><p>0</p>
        </div>
        </Link>
        <div className="cart-num" onClick={handleThemeToggle}>
          {theme === 'dark' ? <BsMoonFill size={24} className='topnav-icon'/> : <BsSunFill size={24} className='topnav-icon'/>}
        </div>
      </div>
    </header>
  );
}

export default Header;