import React, { useState, useEffect } from 'react';
import '../styles/hero.css';
import { BsSearch } from 'react-icons/bs';

// Import images
import gamingMouse1 from '../images/R_A.T.M_Wireless_Mouse_by_Mad_Catz-removebg-preview.png';
import shoes1 from '../images/Net_red_socks_shoes_old_shoes_sneakers_men_-_5Style___46-removebg-preview.png';
import gamingMouse2 from '../images/Matte_Archives_-_leManoosh-removebg-preview.png';

// Data for the hero section with both image and text content
const heroContent = [
  {
    id: 1,
    image: gamingMouse1,
    alt: 'Wireless gaming mouse',
    heading: 'Unleash Your Gaming Potential',
    tagline: 'Experience lightning-fast response times and precision.'
  },
  {
    id: 2,
    image: shoes1,
    alt: 'sneakers',
    heading: 'Step Up Your Style',
    tagline: 'Find the perfect pair of sneakers for any adventure.'
  },
  {
    id: 3,
    image: gamingMouse2,
    alt: 'Wireless gaming mouse',
    heading: 'The Future of Ergonomics',
    tagline: 'Designed for comfort, built for performance.'
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to change the content every 5 seconds
    const intervalId = setInterval(() => {
      // Calculate the next index, looping back to 0 at the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const currentContent = heroContent[currentIndex];

  return (
    <section className="hero-section">
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
        {heroContent.map((_, index) => (
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