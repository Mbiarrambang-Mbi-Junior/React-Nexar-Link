import React from 'react'
import { BsSearch, BsHeartFill, BsCartFill, BsCart4, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/header.css'





function Header({ cartCount }) {
    const navigate = useNavigate();

    const handleSeeCart = () => {
        navigate('/addtocart');
    };

    return (
        <>
            <section className="hero-section">
                <div className="logo-container">
                    <Link to="/">
                        <h1 className="logo">E<span>-shop</span></h1>
                    </Link>
                </div>
                <div className="topnav-bar">
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
                    <Link to="/cart" className="cart-link">
                        <div className="cart-num">
                            <BsCart4 size={24} className='topnav-icon' textAnchor={<p className='cart-count'>0</p>} onClick={handleSeeCart} />
                            {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                        </div>
                    </Link>
                    <div className="cart-num" >
                        {/*theme === 'dark' ? <BsMoonFill size={24} className='topnav-icon' /> : <BsSunFill size={24} className='topnav-icon' />*/}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header