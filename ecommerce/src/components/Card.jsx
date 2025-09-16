import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { BsPlus, BsHeartFill } from 'react-icons/bs';
import { useCart } from './CartContext';
import ReadMore from './ReadMore'; // Import the new component

function Card({ product }) {
    const { addToCart, addToFavorites } = useCart();
    const { image, price, title, description, id } = product;
    const navigate = useNavigate();

    const handleSeeDetails = () => {
        navigate(`/cartdetails/${id}`);
    };

    const handleFavorite = () => {
        addToFavorites(product);
    };

    return (
        <Tilt
            className="card w-[330px] h-[600px] flex flex-col justify-between items-center p-8 
            bg-white/10 backdrop-blur-[2px] border-white/10 
            rounded-2xl shadow-xl mt-[10px] relative
            before:content-[''] 
            before:absolute before:inset-0
            before:rounded-2xl before:border before:border-white/20"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={1000}
            transitionSpeed={5000}
            glareEnable={true}
            glareMaxOpacity={0.5}
        >
            <div className="image-plce w-full flex-grow flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    onClick={handleSeeDetails}
                    className="h-full w-full object-contain hover:cursor-pointer transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="title w-full flex-shrink-0 mt-4 text-center">
                <span className="price absolute top-4 right-4 text-white font-bold text-sm bg-orange-400 z-10 p-1 rounded-full">
                    Price: ${price}
                </span>
                <h2 className="text-lg font-bold truncate">{title}</h2>
                <div className="product-description mt-2 overflow-hidden">
                    <ReadMore>{description}</ReadMore>
                </div>
                <div className="addto-carticon flex justify-between items-center mt-4">
                    <BsPlus
                        size={50}
                        className="add-icon bg-teal-600 cursor-pointer p-2 rounded-full text-white"
                        onClick={() => addToCart(product)}
                    />
                    <BsHeartFill
                        size={50}
                        color="red"
                        className="cursor-pointer"
                        onClick={handleFavorite}
                    />
                </div>
            </div>
        </Tilt>
    );
}

export default Card;