// Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import image from '../assets/2aba50e1-4134-497e-b37f-e3ff62d279e2-removebg-preview.png'
//import { useCart } from './CartContext'; // Use the hook here
import '../styles/card.css';

function Card({ product }) {
  //const { addToCart } = useCart(); // Get the addToCart function from context
  //const { image, price, name, description } = product;
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    // This is the correct way to handle navigation
    navigate('/cartdetails'); 
  };
  const handleSeedetails = () => {
    return(
      <Link to="/carddetails"></Link>
    )
  }
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
        <span className="price">price</span>
        <img src={image} alt="name" onClick={handleSeeDetails} />
        <div className="title">
          <h2>name</h2>
          <div className="product-description">
            <p className="description">description</p>
          </div>
          {/* Call addToCart when the icon is clicked onClick={() => addToCart(product)} */}
          <BsPlus className="add-icon" />
        </div>
      </Tilt>
  );
}

export default Card;