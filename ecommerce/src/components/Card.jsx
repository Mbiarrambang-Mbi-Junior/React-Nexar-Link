// Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import '../styles/card.css';

function Card({ product }) {
  const { addToCart } = useCart(); // Get the addToCart function from context
  const { image, price, name, description, productId } = product;
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    // Navigate to the dynamic URL with the product's ID
    navigate(`/cartdetails/${productId}`);
  };

  return (
    <Tilt
      className="card blue"
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      perspective={1000}
      transitionSpeed={5000}
      glareEnable={true}
      glareMaxOpacity={0.5}
    >

      <img src={image} alt={name} onClick={handleSeeDetails} />
      <div className="title">
        <h2>{name}</h2>
        <span className="price">Price: ${price}</span>
        <div className="product-description">
          <p className="description">{description}</p>
        </div>
        {/* Call addToCart when the icon is clicked */}
        <div className="addto-carticon">
          <BsPlus className="add-icon" onClick={() => addToCart(product)} />
        </div>
      </div>
    </Tilt>
  );
}

export default Card;