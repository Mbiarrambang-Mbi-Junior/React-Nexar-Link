import React from 'react'
import '../styles/trending.css'
import Trend from '../images/Logitech_G502_LIGHTSPEED_Wireless_Gaming_Mouse-removebg-preview.png'

function Trending() {
  return (
    <div>
        <div className="trending-message">
            <h1>Trending Products</h1>
            <p>Our most popular products based on sales</p>
        </div>
        <div className="trending-img">
            <img src={Trend} alt="trending" />
        </div>
    </div>
  )
}

export default Trending