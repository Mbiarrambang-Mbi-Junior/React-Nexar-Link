import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';

const ProductCard = ({ product }) => {

    
    // Add your add-to-cart logic here
    console.log(`Product ${product.id} added to cart!`);
  };

  return (
    <div className="product-card">
      {/* This link wraps the entire card to make it clickable */}
      <Link to={`/products/${product.id}`} className="product-card-link">
        <div className="card-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="card-details">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="card-stats">
            {product.stats.map((stat, index) => (
              <span key={index} className="stat-item">{stat}</span>
            ))}
          </div>
          <span className="price">{product.price}</span>
        </div>
      </Link>
      
      {/* This is the separate button with its own click handler */}
      <div className="add-to-cart" onClick={handleAddToCartClick}>
        <BsPlus />
      </div>
    </div>
  );


export default ProductCard;