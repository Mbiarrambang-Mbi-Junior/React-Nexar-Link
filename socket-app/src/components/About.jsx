import React from 'react';
import '../styles/about.css';
import aboutImage from '../images/9aa09965-374d-4832-a2e6-dc6c5ab04757-removebg-preview.png';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Column: Text Content */}
        <div className="about-text-content">
          <h1 className="about-heading">About Us</h1>
          
          <div className="section-block">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-description">
              Our vision is to be the leading e-commerce platform that connects customers with high-quality products from around the globe. We aim to revolutionize the shopping experience by providing a seamless, secure, and personalized service that inspires trust and loyalty.
            </p>
          </div>
          
          <div className="section-block">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">
              Our mission is to empower consumers with access to a diverse range of products at competitive prices, delivered with unparalleled customer service. We are dedicated to building a platform that supports local artisans and global brands, fostering a community of conscious consumers.
            </p>
          </div>
          
          <div className="section-block">
            <h2 className="section-title">Our Values</h2>
            <ul className="values-list">
              <li>Customer-Centric: We put our customers first in every decision.</li>
              <li>Integrity: We operate with honesty and transparency.</li>
              <li>Innovation: We continuously seek to improve our technology and services.</li>
              <li>Sustainability: We are committed to ethical and environmentally friendly practices.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="about-image-container">
          <img src={aboutImage} alt="About Us" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;