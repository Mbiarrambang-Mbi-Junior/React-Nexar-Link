// ProductDetails.js
import React, { useState } from 'react';
import './ProductDetails.css';

function ProductDetails({ data }) {
  const [activeImage, setActiveImage] = useState(data.images[0]);

  return (
    <div className="product-details-container">
      <div className="main-image-section">
        <div className="main-image-background"></div>
        <img src={activeImage} alt={data.name} className="main-image" />
        <div className="thumbnail-container">
          {data.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`thumbnail-${index}`}
              className="thumbnail"
              onClick={() => setActiveImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="product-info-section">
        {data.features.map((feature, index) => (
          <div key={index} className="product-feature">
            <span>{feature.name}</span>
            <span className="feature-description">{feature.description}</span>
          </div>
        ))}
        <div className="purchase-section">
          <span className="price">{data.price}</span>
          <button className="add-to-cart-button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;