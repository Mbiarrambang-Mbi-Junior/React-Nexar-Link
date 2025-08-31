import React, { useEffect } from 'react';
import Typed from 'typed.js'; // You need to install the Typed.js library
import '../models/Hero.css';
import heropic from '../assets/Gemini_Generated_Image_i0qs31i0qs31i0qs-removebg-preview.png';

export default function Hero() {
  useEffect(() => {
    // This code will run after the component has mounted to the DOM
    const options = {
      strings: ["an Embedded Engineer", "an IOT Engineer", "an Automation Engineer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    };

    const typed = new Typed(".typed-text", options);

    // This is the cleanup function that runs when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="intro-card">
            <span className="intro-text">
              Mbiarrambang Mbi Junior
            </span>
          </div>
          <h1 className="hero-title">
            I'm <span className="typed-text"></span>
          </h1>
          <p className="hero-description">
            Experienced IOT professional with a passion for designing and implementing
            robust embedded systems, robotic automation, and user-friendly interfaces. And also HTML, CSS, and JavaScript
            developer with a focus on creating responsive and user-friendly websites.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn primary-btn">
              Hire Me
            </a>
            <a href="Curriculum Vitae.docx" download className="btn secondary-btn">
              Download CV <i className="uil uil-file-alt"></i>
            </a>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Dribbble">
              <i className="uil uil-dribbble"></i>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image">
            <img
              src={heropic}
              alt="Mbiarrambang Mbi Junior"
              className="profile-image"
            />
          </div>
        </div>
        <a href="#about" className="scroll-down-btn" aria-label="Scroll down to the About section">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </section>
    </>
  );
}