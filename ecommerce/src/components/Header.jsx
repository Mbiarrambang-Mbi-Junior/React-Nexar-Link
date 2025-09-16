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
            <section className="header-section flex justify-around items-center relative bg-teal-600 font-bold mb-[10px] capitalize w-full top-0">
            <div className="logo-container">
                <RouterLink to="/">
                    <h1 className="logo">E<span className='text-orange-400'>-shop</span></h1>
                </RouterLink>
            </div>

            <div className={`topnav-bar ${isMenuOpen ? 'open' : ''}`}>
                <ul className="flex gap-[1.5rem] text-[18px] text-none">
                    <li className={`topnav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        <RouterLink to="/">Home</RouterLink>
                    </li>

                    <li className="topnav-link">
                        <ScrollLink
                            to="explore-section"
                            smooth={true}
                            duration={500}
                        >
                            Explore
                        </ScrollLink>
                    </li>

                    <li className="topnav-link">
                        <ScrollLink
                            to="discover-section"
                            smooth={true}
                            duration={500}
                        >
                            Discover
                        </ScrollLink>
                    </li>

                    <li className="topnav-link">
                        <ScrollLink
                            to="contact-section"
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </ScrollLink>
                    </li>

                    <li className={`topnav-link ${location.pathname === '/shop' ? 'active' : ''}`}>
                        <RouterLink to="/shop">Shop</RouterLink>
                    </li>
                </ul>
            </div>

                <div className="topnav-icon flex justify-around items-center gap-[2rem] hover:text-orange-600">
                    {isSearchOpen && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    )}
                    <div className="cart-num search text-white " onClick={toggleSearch}>
                        <BsSearch size={24} className='topnav-icon hover:text-orange-400 hover:cursor-pointer' />
                    </div>
                    <RouterLink to="/favorites" className="favourite-link">
                        <div className="cart-num favourite">
                            <BsHeartFill size={24} className='topnav-icon hover:text-orange-400 hover:cursor-pointer' />
                        </div>
                    </RouterLink>
                    <div className="cart-num cart-icon flex justify-center items-center" onClick={handleSeeCart}>
                        <BsCart4 size={24} className='topnav-icon text-white hover:text-orange-400 hover:cursor-pointer' />
                        {cartCount > 0 && <span className='cart-count flex justify-center items-center bg-orange-400 p-2 rounded-full text-xs text-white relative top-[-5px] right-[10px] w-[10px] h-[10px]'>{cartCount}</span>}
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