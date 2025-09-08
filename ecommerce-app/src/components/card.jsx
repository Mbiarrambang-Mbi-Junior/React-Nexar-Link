// Card.jsx
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { BsPlus } from 'react-icons/bs';
import { useCart } from './CartContext'; // Use the hook here
import '../styles/card.css';

function Card({ product }) {
  const { addToCart } = useCart(); // Get the addToCart function from context
  const { image, price, name, description } = product;

  return (
    <div className="card-content">
      <Tilt
        className="card blue"
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        perspective={1000}
        transitionSpeed={5000}
        glareEnable={true}
        glareMaxOpacity={0.5}
      >
        <span className="price">{price}</span>
        <img src={image} alt={name} />
        <div className="title">
          <h2>{name}</h2>
          <div className="product-description">
            <p className="description">{description}</p>
          </div>
          {/* Call addToCart when the icon is clicked */}
          <BsPlus className="add-icon" onClick={() => addToCart(product)} />
        </div>
      </Tilt>
    </div>
  );
}

export default Card;