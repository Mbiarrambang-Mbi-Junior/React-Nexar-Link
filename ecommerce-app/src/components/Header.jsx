import React from 'react'
import '../styles/Header.css'
import { BsCart4,BsSearch,BsHeartFill } from 'react-icons/bs';

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1 className="logo">E-Shop</h1>
        </div>
        <nav className='navbar'>
          <ul className='nav-links'>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">Services</a>
            </li>
            <li>
              <a href="#about">Contacts</a>
            </li>
          </ul>
        </nav>
        <div className="topnav-icons">
          <BsSearch size={24} color="#61dafb" style={{ marginRight: '15px' }} />
          <BsHeartFill size={24} color="#61dafb" style={{ marginRight: '15px' }} />
          <BsCart4 size={24} color="#61dafb" />
        </div>
      </header>
    </>
  )
}

export default Header