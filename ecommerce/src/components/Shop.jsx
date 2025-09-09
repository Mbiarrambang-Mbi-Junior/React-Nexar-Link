import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/shop.css'
import Filter from './Filter'
import Results from './Results'

function Shop() {
  return (
    <section className="shop-section">
      <div className="top-shop">
        <h2 className="shop-text">Shop</h2>
        <div className="shop-link">
          <Link to="/">Home</Link>/<Link to="/shop">Shop</Link>
        </div>
      </div>
      <div className="shop-content">
        <Filter />
        <Results />
      </div>
    </section>
  )
}

export default Shop