// Header.jsx
import React, { useState } from 'react';
import { BsSearch, BsHeartFill, BsCart4, BsList, BsX } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/header.css';

function Header({ cartCount }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false); // New state for search bar visibility

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/?q=${searchTerm}`);
            setIsSearchVisible(false); // Hide the search bar after searching
        }
    };

    const handleSeeCart = () => {
        navigate('/mycart');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
        setIsMenuOpen(false); // Close the menu if the search bar is opened
    };

    return (
        <>
            <section className="bg-teal-600 text-white shadow-md w-full sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <RouterLink to="/" className="text-2xl font-bold logo">
                        E<span className='text-orange-400'>-shop</span>
                    </RouterLink>

                    {/* Desktop Navigation & Search */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-6 text-lg font-medium">
                            <li>
                                <RouterLink to="/" className={`hover:text-orange-400 transition-colors ${location.pathname === '/' ? 'text-orange-400' : ''}`}>Home</RouterLink>
                            </li>
                            <li>
                                <ScrollLink to="explore-section" smooth={true} duration={500} className="hover:text-orange-400 cursor-pointer transition-colors">Explore</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="discover-section" smooth={true} duration={500} className="hover:text-orange-400 cursor-pointer transition-colors">Discover</ScrollLink>
                            </li>
                            <li>
                                <RouterLink to="/shop" className={`hover:text-orange-400 transition-colors ${location.pathname === '/shop' ? 'text-orange-400' : ''}`}>Shop</RouterLink>
                            </li>
                        </ul>

                        {/* Search Bar (Desktop) */}
                        <form onSubmit={handleSearch} className="relative hidden lg:block">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search..."
                                className="w-64 pl-4 pr-10 py-2 rounded-full border border-teal-500 bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
                                <BsSearch className="text-orange-400" size={20} />
                            </button>
                        </form>
                    </div>

                    {/* Icons & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        {/* Search icon (Mobile & Tablet) */}
                        <div className="lg:hidden">
                            <BsSearch size={24} className="hover:text-orange-400 cursor-pointer" onClick={toggleSearch} />
                        </div>

                        <RouterLink to="/favorites" className="hidden sm:block">
                            <BsHeartFill size={24} className="hover:text-orange-400" />
                        </RouterLink>

                        <div className="relative cursor-pointer" onClick={handleSeeCart}>
                            <BsCart4 size={24} className="hover:text-orange-400" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-orange-400 rounded-full text-xs font-semibold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                            {isMenuOpen ? <BsX size={30} className='hover:text-orange-400' /> : <BsList size={30} className='hover:text-orange-400' />}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Search Overlay for Mobile */}
            {isSearchVisible && (
                <div className="md:hidden w-full bg-teal-600 px-4 py-3 sticky top-[60px] z-40">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search products..."
                            className="w-full pl-4 pr-10 py-2 rounded-full border border-teal-500 bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
                            <BsSearch className="text-orange-400" size={20} />
                        </button>
                    </form>
                </div>
            )}

            {/* Mobile Menu (collapsible) */}
            {isMenuOpen && (
                <div className="md:hidden bg-teal-700 pb-4">
                    <ul className="flex flex-col items-center space-y-4 text-lg">
                        <li className="w-full text-center">
                            <RouterLink to="/" onClick={toggleMenu} className="block py-2 hover:text-orange-400 transition-colors">Home</RouterLink>
                        </li>
                        <li className="w-full text-center">
                            <ScrollLink to="explore-section" smooth={true} duration={500} onClick={toggleMenu} className="block py-2 hover:text-orange-400 cursor-pointer transition-colors">Explore</ScrollLink>
                        </li>
                        <li className="w-full text-center">
                            <ScrollLink to="discover-section" smooth={true} duration={500} onClick={toggleMenu} className="block py-2 hover:text-orange-400 cursor-pointer transition-colors">Discover</ScrollLink>
                        </li>
                        <li className="w-full text-center">
                            <RouterLink to="/shop" onClick={toggleMenu} className="block py-2 hover:text-orange-400 transition-colors">Shop</RouterLink>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;