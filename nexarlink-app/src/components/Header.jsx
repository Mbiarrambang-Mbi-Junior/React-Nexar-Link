import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiSearchLine, RiMenuLine, RiSunLine, RiMoonLine } from 'react-icons/ri'; // Import icons here
import '../models/header.css';



function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    // Toggle the theme state
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="logo">
          Nexar|Link<span>.</span>
        </Link>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link active-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" className="nav-link" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="#projects" className="nav-link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-actions">
          <div className="search-container">
            <input
              type="text"
              className={`search-input ${isSearchActive ? 'active' : ''}`}
              placeholder="Search..."
              aria-label="Search site"
            />
            <button className="search-toggle" aria-label="Toggle search bar" onClick={handleSearchToggle}>
                <RiSearchLine /> {/* Replaced <i> with the icon component */}
            </button>
          </div>
          <button id="theme-toggle" className="theme-toggle-btn" aria-label="Toggle dark/light mode" onClick={handleThemeToggle}>
            {theme === 'dark' ? <RiSunLine /> : <RiMoonLine />} {/* Replaced <i> with conditional icon components */}
          </button>
          <button className="menu-toggle" aria-label="Toggle navigation menu" onClick={handleMenuToggle}>
            <RiMenuLine /> {/* Replaced <i> with the icon component */}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;