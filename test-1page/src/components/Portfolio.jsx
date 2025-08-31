import React from 'react';
import '../styles/portfolio.css';
import porfoilio1 from '../assets/hero.png'
import porfoilio2 from '../assets/Puzzling Processor Names Explained!.jpeg'
import porfoilio3 from '../assets/hacker.jpeg'
import porfoilio4 from '../assets/Transform Your Software with Cutting-Edge Hardware!.jpeg'
import porfoilio5 from '../assets/Fotos de Motherboard - Baixe fotos grátis de alta qualidade _ Freepik.jpeg'
import porfoilio6 from '../assets/CPU on motherboard Artificial Intelligence and machine learning purpose.jpeg'

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h2>Our Portfolio</h2>
      <div className="categories">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, exercitationem facilis! Labore aspernatur assumenda voluptatum sint adipisci fugit distinctio nulla perferendis cupiditate alias at, totam vero sequi harum laboriosam nisi?</p>
        <ul className="portfolio-link">
          <li>ALL</li>
          <li>WEB DEVELOPMENT</li>
          <li>GAME DEVELOPMENT</li>
          <li>APP DEVELOPMENT</li>
        </ul>
      </div>
      <div className="portfolio-grid">
        <img src={porfoilio1} alt="Portfolio Item 1" />
        <img src={porfoilio2} alt="Portfolio Item 2" />
        <img src={porfoilio3} alt="Portfolio Item 3" />
        <img src={porfoilio4} alt="Portfolio Item 4" />
        <img src={porfoilio5} alt="Portfolio Item 5" />
        <img src={porfoilio6} alt="Portfolio Item 6" />
      </div>
    </div>
  );
}

export default Portfolio;