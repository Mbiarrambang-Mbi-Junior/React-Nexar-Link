import React from 'react';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import './index.css';

function App() {
  return (
    <>
      
      <div className="main-content">
        <Hero />
        <WelcomeSection />
        <About />
        <Services />
        <Stats />
        <Portfolio />
        <Testimonial />
      </div>
    </>
  );
}

export default App;