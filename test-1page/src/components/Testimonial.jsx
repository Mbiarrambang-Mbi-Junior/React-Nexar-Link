import React from 'react';
import '../styles/testimonial.css';
import jaydenAvatar from '../assets/hero.png';

function Testimonial() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-content">
        <div className="avatar">
          <img src={jaydenAvatar} alt="Jayden Vaughan" />
        </div>
        <div className="quote">
          <h4 className="name">Jayden Vaughan</h4>
          <p className="title">Science technician</p>
          <p className="quote-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae sodales elit. Nam dictum est sed tortor condimentum, vitae an elit sed."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;