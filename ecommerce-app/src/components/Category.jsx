import React from 'react';
import '../styles/category.css';

// Import the image to be used in the cards
import greenSneakers from '../images/Leo_Men_s_Athletic_Sneakers_Green-8_5___43-removebg-preview.png';


function Category() {
  const PriceCategory = [
        { id: 1, price: '$39.9',catigory:'electonics' },
        { id: 2, price: '$39.9',catigory:'funiture' },
        { id: 3, price: '$49.9',catigory:'men' },
        { id: 4, price: '$59.9' ,catigory:'female' },
    ]
  return (
    <>
      <h2>Category Component</h2>
      <div className="category-content">
        <div className="category-card">
          <div className="card-details">
            <h3 className="card-title">{PriceCategory[0].catigory}</h3>
          </div>
          <img src={greenSneakers} alt="Green Sneakers" className="card-image" />
        </div>
        <div className="category-card">
          <div className="card-details">
            <h3 className="card-title">{PriceCategory[1].catigory}</h3>
          </div>
          <img src={greenSneakers} alt="Green Sneakers" className="card-image" />
        </div>
        <div className="category-card">
          <div className="card-details">
            <h3 className="card-title">{PriceCategory[2].catigory}</h3>
          </div>
          <img src={greenSneakers} alt="Green Sneakers" className="card-image" />
        </div>
        <div className="category-card">
          <div className="card-details">
            <h3 className="card-title">{PriceCategory[3].catigory}</h3>
          </div>
          <img src={greenSneakers} alt="Green Sneakers" className="card-image" />
        </div>
      </div>
    </>
  );
}

export default Category;