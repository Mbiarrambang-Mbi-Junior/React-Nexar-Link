import React, { useState } from 'react';
import '../styles/hero.css';
import Header from './Header';
import HeroContent from './HeroContent';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import heroPic1 from '../assets/CPU on motherboard Artificial Intelligence and machine learning purpose.jpeg';
import heroPic2 from '../assets/Fotos de Motherboard - Baixe fotos grátis de alta qualidade _ Freepik.jpeg';
import heroPic3 from '../assets/Puzzling Processor Names Explained!.jpeg';


function Hero() {
  const slides = [
    {
      image: heroPic1,
      title: 'Game Development',
      description: 'Lorem ipsum is simply dummy text of the printing, and typesetting, industry'
    },
    {
      image: heroPic2,
      title: 'Web Design',
      description: 'Aliquam nec efficitur leo, ac tempor quam. Integer non diam nec nulla.'
    },
    {
      image: heroPic3,
      title: 'Mobile Apps',
      description: 'Cras nec euismod est, in convallis quam. Curabitur vel justo sed magna.'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
      <Header />
      <BsArrowLeft className='icon hero-arrow-btn-left hero-arrow-btn' onClick={prevSlide} />
      <HeroContent
        title={slides[currentSlide].title}
        description={slides[currentSlide].description}
      />
      <BsArrowRight className='icon hero-arrow-btn-right hero-arrow-btn' onClick={nextSlide} />
      <div className="dot-navigation">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Hero;