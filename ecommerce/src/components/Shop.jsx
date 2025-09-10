// In your Shop.jsx file

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/shop.css';
import Filter from './Filter';
import Results from './Results';

function Shop() {
  return (
    <section className="shop-section">
      <div className="shop-content">
        <Filter />
        <Results />
      </div>
    </section>
  );
}

export default Shop;