import React from 'react';
import '../styles/trending.css';
import stylishShoe from '../images/9aa09965-374d-4832-a2e6-dc6c5ab04757-removebg-preview.png'; // Assuming you have an image file named stylish-shoe.png

function Trending() {
  return (
    <section className="trending-container">
      <div className="trending-content">
        <h1 className="trending-title">Latest stylish shoe</h1>
        <p className="trending-subtitle">Men 2020 collection shoe</p>
        <button className="see-all-button">See all</button>
      </div>
      <div className="trending-image-container">
        <img src={stylishShoe} alt="A stylish blue shoe" className="trending-image" />
      </div>
    </section>
  );
}

export default Trending;