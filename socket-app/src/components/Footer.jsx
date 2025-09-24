import React from 'react';
import '../styles/footer.css';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">E-shop</h1>
        <div className="social-icons">
          <BsFacebook size={20} className="icon" />
          <BsTwitter size={20} className="icon" />
          <BsInstagram size={20} className="icon" />
        </div>
        <p className="designer-credit">Designed @ somod khan</p>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="#electronics">Electronics</a></li>
            <li><a href="#summer">Summer</a></li>
            <li><a href="#book">Book</a></li>
            <li><a href="#cosmetics">Cosmetics</a></li>
            <li><a href="#furnitures">Furnitures</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>+2 36 125 453</li>
            <li>eshop@gmail.com</li>
            <li>123 Ion, London, UK</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;