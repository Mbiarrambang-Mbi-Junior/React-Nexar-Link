// CardDetails.jsx

import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useParams } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import '../styles/cartdetails.css';
import products from '../utils/product';

const CardDetails = () => {
  const { productId } = useParams(); // Get the ID from the URL
  const { addToCart } = useCart();


  // Find the product using the ID from the URL
  const product = products.find((p) => p.productId === parseInt(productId));

  if (!product) {
    return (
      <div className="product-details-container">
        <h2>Product not found!</h2>
      </div>
    );
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);






  return (
    <section className="product-details-container">
      <div className="product-img">
        <img src={product.image} alt={product.name} className="main-image" />
        <div className="small-images">
          {/* Replace with a loop for small images if you have them */}
          <img src={product.image} alt="" className="small-image" />
          <img src={product.image} alt="" className="small-image" />
          <img src={product.image} alt="" className="small-image" />
        </div>
      </div>
      <div className="text-description">
        <h1 className="product-name">{product.name}</h1>
        <div className="product-description">
          <p>{product.description}</p>
        </div>
        <div className="select-color">
          <p className="text">Color:</p>
          <select id="color-select" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
            {product.colors.map(color => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className="price-add-cart">
          <span className="product-price">Price:{product.price}</span>
          {/* Call addToCart with the correct product object */}
          <BsPlus className="add-to-cart-icon" onClick={() => addToCart(product, selectedColor)} />
        </div>
      </div>
    </section>
  );
};

export default CardDetails;