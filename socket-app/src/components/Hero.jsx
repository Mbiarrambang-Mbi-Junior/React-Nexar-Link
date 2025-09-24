import React, { useState, useEffect } from 'react';
import '../styles/hero.css';
import Header from './Header';
import { BsSearch } from 'react-icons/bs';
import  herocontent  from '../utils/herocontent.json';


function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to change the content every 5 seconds
    const intervalId = setInterval(() => {
      // Calculate the next index, looping back to 0 at the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % herocontent.length);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const currentContent = herocontent[currentIndex];

  return (
    <section className="hero-section">
      <Header />
      <div className="hero-content">
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
        {herocontent.map((_, index) => (
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