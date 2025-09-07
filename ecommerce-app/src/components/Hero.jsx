import React from 'react'
import '../styles/hero.css'
import Profile from '../images/R_A.T.M_Wireless_Mouse_by_Mad_Catz-removebg-preview.png'

function Hero() {
  return (
    <>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to E-Shop</h1>
          <p>Your one-stop shop for all things awesome!</p>
          <button className="shop-now-button">Shop Now</button>
          <div className="search-input">
            <input type="text" placeholder="Search products..." />
          </div>
        </div>
        <div className="hero-image">
          <img src={Profile} alt="Hero" />
        </div>
      </div>
    </>
  )
}

export default Hero