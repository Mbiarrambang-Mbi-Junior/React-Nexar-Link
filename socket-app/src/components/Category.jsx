import React from 'react';
import '../styles/category.css';
import pricecategory from '../utils/pricecategory.json'

// Import the image to be used in the cards
import greenSneakers from '../images/Leo_Men_s_Athletic_Sneakers_Green-8_5___43-removebg-preview.png';


function Category() {

  return (
    <>
      <h2>Category Component</h2>
      <div className="category-content">
        <div className="category-card">
          <div className="card-details">
            <h3 className="card-title">{pricecategory[0].catigory}</h3>
          </div>
          <img src={greenSneakers} alt="Green Sneakers" className="card-image" />
        </div>
        <div className="category-card">
          <div className="card-details">
            <h3 className="card-title">{pricecategory[1].catigory}</h3>
          </div>
          <img src={greenSneakers} alt="Green Sneakers" className="card-image" />
        </div>
        <div className="category-card">
          <div className="card-details">
            <h3 className="card-title">{pricecategory[2].catigory}</h3>
          </div>
          <img src={greenSneakers} alt="Green Sneakers" className="card-image" />
        </div>
        <div className="category-card">
          <div className="card-details">
            <h3 className="card-title">{pricecategory[3].catigory}</h3>
          </div>
          <img src={greenSneakers} alt="Green Sneakers" className="card-image" />
        </div>
      </div>
    </>
  );
}

export default Category;