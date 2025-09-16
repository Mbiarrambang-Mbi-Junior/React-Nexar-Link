// Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { BsPlus, BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Card({ product }) {
  const { addToCart, addToFavorites } = useCart(); // Get the addToCart function from context
  const { image, price, name, description, productId } = product;
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    // Navigate to the dynamic URL with the product's ID
    navigate(`/cartdetails/${productId}`);
  };
  const handleFavorite = (productId) => {
    // Pass the entire product object to the addToFavourites function
    addToFavorites(product);
  }


  return (
    <Tilt
      className="card w-[250px] h-auto flex flex-col justify-center items-center bg-white p-[2rem] rounded-xl shadow-xl mt-[10px]"
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      perspective={1000}
      transitionSpeed={5000}
      glareEnable={true}
      glareMaxOpacity={0.5}
    >

     <div className="image-plce">
       <img src={image} alt={name} onClick={handleSeeDetails} className="scale-50 hover:scale-105 transition-transform duration-300" />
     </div>
      <div className="title">
        <h2>{name}</h2>
        <span className="price absolute top-[1rem] right-[1rem] text-white f-bold text-sm bg-orange-400 z-10 p-1 rounded-full">Price: ${price}</span>
        <div className="product-description">
          <p className="description">{description}</p>
        </div>
        <div className="addto-carticon flex justify-between items-center">
          <BsPlus className="add-icon bg-[#28a745] cursor-pointer p-[0.5rem] rounded-full text-white text-[2.5rem]" onClick={() => addToCart(product)} />
          <BsHeartFill size={24} color='red' onClick={handleFavorite} />
        </div>
      </div>
    </Tilt>
  );
}

export default Card;