import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import '../styles/productlist.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import  productlist  from '../utils/productlist.json'


function ProductList() {
  return (
    <section className="product-page-container">
      <div className="filter-and-sort">
        <div className="filter-options">
          <span>Filter: </span>
          <span>Availability</span>
          <span>Color</span>
        </div>
        <div className="sort-options">
          <span>Sort by: </span>
          <span>Alphabetically, A-Z</span>
        </div>
      </div>
      <div className="products-grid">
        {/* Use the map method to render a card for each product */}
        {productlist.map(product => (
          <Link key={product.id} to={`/productsdetails/${product.id}`}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductList;