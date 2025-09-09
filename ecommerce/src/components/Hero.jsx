import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import '../styles/hero.css';
import hero from '../utils/hero.json';
import Heroimg from '../assets/product_design-removebg-preview.png';

function Hero() {
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

  return (
    <section className="hero-section">
      <div className={`hero-content ${transitionClass}`}>
        <div className="hero-text">
          <h1 className="hero-heading">{currentContent.heading}</h1>
          <p className="hero-tagline">{currentContent.tagline}</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <div className="hero-image-container">
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