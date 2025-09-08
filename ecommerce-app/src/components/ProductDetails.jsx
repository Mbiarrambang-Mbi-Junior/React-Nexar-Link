import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/productdetails.css';
import { BsPlus, BsStarFill } from 'react-icons/bs';

// Import the product data from the ProductList component
import products from './ProductList.jsx';


const ProductDetails = () => {
  // Use useParams hook to get the 'id' from the URL
  const { id } = useParams();

  // Find the product that matches the URL ID
  // Use parseInt(id) because URL params are strings
  const product = products.find(p => p.id === parseInt(id));

  // If no product is found, display a not-found message
  if (!product) {
    return (
      <div className="product-details-container">
        <h2>Product not found!</h2>
      </div>
    );
  }

  // Use the found product's data to render the details
  return (
    <section className="product-details-container">
      {/* Product Image Section */}
      <div className="product-images-section">
        <div className="main-image-wrapper">
          <img src={product.image} alt={product.name} className="main-image" />
        </div>
        <div className="thumbnails">
          {/* You can create an array of images for each product and map through them */}
          <img src={product.image} alt="Thumbnail 1" className="thumbnail active" />
        </div>
      </div>

      {/* Product Info Section */}
      <div className="product-info-section">
        <span className="product-category">Gaming</span>
        <h1 className="product-name">{product.name}</h1>
        <div className="product-rating">
          <div className="stars">
            {/* You can make this dynamic based on the product's rating */}
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill className="half-star" />
          </div>
          <span className="reviews-count">(100 reviews)</span>
        </div>
        
        <p className="product-price">{product.price}</p>
        
        <p className="product-description">{product.description}</p>
        
        <div className="cta-buttons">
          <button className="add-to-cart-button">
            Add to Cart
            <BsPlus className="plus-icon" />
          </button>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;