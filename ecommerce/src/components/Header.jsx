import React, { useState } from 'react';
import { BsSearch, BsHeartFill, BsCart4, BsList, BsX } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import with an alias
import '../styles/header.css';

function Header({ cartCount }) {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSeeCart = () => {
        navigate('/mycart');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <>
            <section className="header-section">
                <div className="logo-container">
                    <RouterLink to="/">
                        <h1 className="logo">E<span>-shop</span></h1>
                    </RouterLink>
                </div>

                <div className={`topnav-bar ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <RouterLink to="/">
                            <li className={`topnav-link ${location.pathname === '/' ? 'active' : ''}`}>
                                Home
                            </li>
                        </RouterLink>

                        {/* Use ScrollLink for sections on the same page */}
                        <ScrollLink
                            to="products-section"
                            smooth={true}
                            duration={500}
                            className='topnav-link'
                        >

                            <RouterLink to="/">
                                <li>Products</li>
                            </RouterLink>
                        </ScrollLink>

                        <ScrollLink
                            to="contact-section"
                            smooth={true}
                            duration={500}
                            className='topnav-link'
                        >
                            <li>Contact</li>
                        </ScrollLink>

                        {/* Use RouterLink for other pages */}
                        <RouterLink to="/shop">
                            <li className={`topnav-link ${location.pathname === '/shop' ? 'active' : ''}`}>
                                Shop
                            </li>
                        </RouterLink>
                    </ul>
                </div>

                <div className="topnav-icon">
                    {isSearchOpen && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    )}
                    <div className="cart-num search" onClick={toggleSearch}>
                        <BsSearch size={24} className='topnav-icon' />
                    </div>
                    <RouterLink to="/favorites" className="favourite-link">
                        <div className="cart-num favourite">
                            <BsHeartFill size={24} className='topnav-icon' />
                        </div>
                    </RouterLink>
                    <div className="cart-num cart-icon" onClick={handleSeeCart}>
                        <BsCart4 size={24} className='topnav-icon' />
                        {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                    </div>

                    <div className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <BsX size={30} /> : <BsList size={30} />}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;