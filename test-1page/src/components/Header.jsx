import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">
          1<span>PAGE</span>
        </div>
        <ul className="nav-list">
          <li><a href="#home" className="nav-link active">HOME</a></li>
          <li><a href="#about" className="nav-link">ABOUT US</a></li>
          <li><a href="#services" className="nav-link">OUR SERVICES</a></li>
          <li><a href="#portfolio" className="nav-link">OUR PORTFOLIO</a></li>
          <li><a href="#contact" className="nav-link">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;