import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { BsInstagram, BsLinkedin, BsDribbble, BsGithub, BsDownload} from 'react-icons/bs';
import profileImge from '../assets/profile.png';

export default function Hero({ isDarkMode } ) {
  useEffect(() => {
    // This code will run after the component has mounted to the DOM
    const options = {
      strings: ["an BEMS Engineer", "an IOT Engineer", "an Automation & Controle Engineer"],
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
  }, []); 

  // Define dark/light mode styles for the section
  const darkModeClasses = 'bg-gray-900 text-gray-100'; 
  const lightModeClasses = 'bg-white text-gray-900';   
  
  // Define text colors for description and special elements
  const descriptionTextClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const socialIconBackground = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const githubIconColor = isDarkMode ? 'text-gray-100' : 'text-gray-900';


  return (
    <>
      <section 
        // 🚀 FIX 1: Use min-h-screen for full height without over-stretching
        // 🚀 FIX 2: Added pt-[6rem] to offset a fixed header (adjust value as needed for your Header height)
        // Kept centering classes: flex flex-col justify-center items-center
        className={`hero-section flex flex-col justify-center items-center min-h-screen pt-24 pb-20 w-full ${isDarkMode ? darkModeClasses : lightModeClasses}`} 
        id="home"
      >
        {/* Added mx-auto for horizontal centering of the grid container (as fixed previously) */}
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 items-center justify-center flex-wrap px-4 sm:px-8'>
          <div className="flex flex-col items-start">
            <div className="">
              <span className="bg-highlight text-secondary px-4 py-2 rounded-full font-medium text-sm">
                Mbiarrambang Mbi Junior
              </span>
            </div>
            <h1 className="hero-title font-bold mt-10 text-4xl sm:text-5xl md:text-6xl">
              I'm <span className="typed-text capitalize text-highlight"></span>
            </h1>
            <p className={`hero-description mb-8 mt-4 text-lg ${descriptionTextClass}`}>
              Experienced IOT professional with a passion for designing and implementing
              robust embedded systems, robotic automation, and user-friendly interfaces. And also HTML, CSS, and JavaScript
              developer with a focus on creating responsive and user-friendly websites.
            </p>
            <div className="hero-actions flex flex-wrap gap-4 mb-10">
              <a href="#contact" className="bg-accent rounded p-[0.75rem_1.75rem] text-secondary font-medium transition hover:opacity-80">
                Hire Me
              </a>
              <a href="Curriculum Vitae.docx" download className="flex gap-1.5 border-2 border-accent text-accent items-center rounded p-[0.75rem_1.75rem] font-medium transition hover:bg-accent/10">
                Download CV <BsDownload />
              </a>
            </div>
            <div className="social-links flex gap-3">
              <a href="#" className={`shadow-xl p-4 rounded-full ${socialIconBackground} text-red-500 hover:scale-110 transition`} aria-label="Instagram">
                <BsInstagram />
              </a>
              <a href="#" className={`shadow-xl p-4 rounded-full ${socialIconBackground} text-blue-400 hover:scale-110 transition`} aria-label="LinkedIn">
                <BsLinkedin />
              </a>
              <a href="#" className={`shadow-xl p-4 rounded-full ${socialIconBackground} text-[#EA4C89] hover:scale-110 transition`} aria-label="Dribbble">
                <BsDribbble />
              </a>
              {/* Conditional color for GitHub icon */}
              <a href="#" className={`shadow-xl p-4 rounded-full ${socialIconBackground} ${githubIconColor} hover:scale-110 transition`} aria-label="GitHub">
                <BsGithub />
              </a>
            </div>
          </div>
          <div className="hero-image-container flex justify-center items-center">
            <div className="hero-image">
              <img
                src={profileImge}
                alt="Mbiarrambang Mbi Junior"
                className="profile-image w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}