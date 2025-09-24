import React from 'react';
import '../styles/new.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import  products  from '../utils/products';


// Sample data for the products


// Reusable ProductCard component
const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt="Latest product" className="product-image" />
    <p>{product.description}</p>
    <button>Add to Cart</button>
  </div>
);

function New() {
  return (
    <section className="latest-products-section">
      <h2 className="section-title">Latest Products</h2>
      <div className="product-carousel">
        <BsArrowLeft className="arrow left" />
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <BsArrowRight className="arrow right" />
      </div>
      <div className="dot-navigte">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}

export default New;