import React, { useState } from 'react';
import { BsSearch, BsHeartFill, BsCart4, BsList, BsX } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';

function Header({ cartCount }) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSeeCart = () => {
        navigate('/mycart');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <section className="hero-section">
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
                        <Link to="/" ><li className="topnav-link active">Home</li></Link>
                        <Link to="#aboutus-section" className='topnav-link'><li>About</li></Link>
                        <Link to="#services-section" className='topnav-link'><li>Services</li></Link>
                        <Link to="#contact-section" className='topnav-link'><li>Contact</li></Link>
                        <Link to="/shop" className='topnav-link'><li>Shop</li></Link>
                    </ul>
                </div>
                
                <div className="topnav-icon">
                    <div className="cart-num search">
                        <BsSearch size={24} className='topnav-icon' />
                    </div>
                    <Link to="/favourit" className="favourite-link">
                        <div className="cart-num">
                            <BsHeartFill size={24} className='topnav-icon' />
                        </div>
                    </Link>
                    <div className="cart-num" onClick={handleSeeCart}>
                        <BsCart4 size={24} className='topnav-icon' />
                        {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;