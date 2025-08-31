import React from 'react';
import '../styles/hero.css';

function HeroContent({ title, description }) {
  return (
    <div className="hero-text">
      <h1>{title}</h1>
      <p>{description}</p>
      <button className="cta-button">GET STARTED</button>
    </div>
  );
}

export default HeroContent;