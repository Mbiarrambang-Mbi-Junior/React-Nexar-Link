import React from 'react';
import { BsEyeFill, BsArrowCounterclockwise, BsBullseye } from 'react-icons/bs';
import '../styles/about.css';

function About() {
  return (
    <div className="about-section">
      <div className="about-item">
        <span className="icon">
          <BsArrowCounterclockwise />
        </span>
        <h3>Our Story</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae sodales elit. Nam dictum est sed tortor condimentum, vitae an elit sed.</p>
      </div>
      <div className="about-item">
        <span className="icon">
          <BsBullseye />
        </span>
        <h3>Our Mission</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec euismod est, in convallis quam. Curabitur vel justo sed magna.</p>
      </div>
      <div className="about-item">
        <span className="icon">
          <BsEyeFill />
        </span>
        <h3>Our Vision</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec efficitur leo, ac tempor quam. Integer non diam nec nulla.</p>
      </div>
    </div>
  );
}

export default About;