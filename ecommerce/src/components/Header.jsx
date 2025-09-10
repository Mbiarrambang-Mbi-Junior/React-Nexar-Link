import React, { useState } from 'react';
import { BsSearch, BsHeartFill, BsCart4, BsList, BsX } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';

function Header({ cartCount }) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // New state for search bar

    const handleSeeCart = () => {
        navigate('/mycart');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen); // Toggle the search bar state
    };

    return (
        <>
            <section className="header-section">
                <div className="logo-container">
                    <Link to="/">
                        <h1 className="logo">E<span>-shop</span></h1>
                    </Link>
                </div>
                {/* Hamburger menu for small screens */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <BsX size={30} /> : <BsList size={30} />}
                </div>

                <div className={`topnav-bar ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <Link to="/"><li className="topnav-link active">Home</li></Link>
                        <Link to="#aboutus-section" className='topnav-link'><li>About</li></Link>
                        <Link to="#contact-section" className='topnav-link'><li>Contact</li></Link>
                        <Link to="/shop" className='topnav-link'><li>Shop</li></Link>
                    </ul>
                </div>
                
                <div className="topnav-icon">        
                    {/* Conditionally render the search input field */}
                    {isSearchOpen && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    )}
                    {/* Add onClick handler to the search icon */}
                    <div className="cart-num search" onClick={toggleSearch}>
                        <BsSearch size={24} className='topnav-icon' />
                    </div>
                    <Link to="/favourit" className="favourite-link">
                        <div className="cart-num favourite">
                            <BsHeartFill size={24} className='topnav-icon' />
                        </div>
                    </Link>
                    <div className="cart-num cart-icon" onClick={handleSeeCart}>
                        <BsCart4 size={24} className='topnav-icon' />
                        {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;