import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import '../styles/hero.css';
import hero from '../utils/hero.json';
import Heroimg from '../assets/product_design-removebg-preview.png';

function Hero() {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionClass('fade-out');
      const transitionTimeout = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === hero.length - 1 ? 0 : prevIndex + 1
        );
        setTransitionClass('fade-in');
      }, 700);
      return () => clearTimeout(transitionTimeout);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = hero[currentIndex];

  const handleShopNow = () => {
    // Navigate to the dynamic product details page using the product ID
    navigate(`/cartdetails/${currentContent.productId}`);
  };

  return (
    <section className="hero-section">
      <div className={"hero-content"}>
        <div className={"hero-text"}>
          <div className="text-content">
            <h1 className={`hero-heading ${transitionClass}`}>{currentContent.heading}</h1>
            <p className={`hero-tagline ${transitionClass}`}>{currentContent.tagline}</p>
          </div>
          {/* Add the onClick handler to the button */}
          <button className="shop-now-button" onClick={handleShopNow}>
            Shop Now <BsArrowRight className='shop-now-icon' />
          </button>
        </div>
        <div className={`hero-image-container ${transitionClass}`}>
          <img
            src={currentContent.image}
            alt={currentContent.alt}
            className="hero-image"
          />
        </div>
      </div>
      <div className="dot-container">
        {hero.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Hero;