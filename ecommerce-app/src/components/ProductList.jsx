import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import '../styles/productlist.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import nikeBlue from '../images/Leo_Men_s_Athletic_Sneakers_Green-8_5___43-removebg-preview.png';
import bikecycle from '../images/fac41e38-8f5a-4327-b7ec-4c1c82b3e081-removebg-preview.png';
import productOne from '../images/0b7b4d59-7c95-470b-9a8c-f28a8f160f95-removebg-preview.png';
import productTwo from '../images/Leo_Men_s_Athletic_Sneakers_Green-8_5___43-removebg-preview.png';
import productThree from '../images/R_A.T.M_Wireless_Mouse_by_Mad_Catz-removebg-preview.png';
import productFour from '../images/Logitech_G502_LIGHTSPEED_Wireless_Gaming_Mouse-removebg-preview.png';
export const products = [
  { 
    id: 1, 
    name: 'Electric Scooter', 
    price: '$899', 
    image: nikeBlue,
    description: 'A sleek and powerful electric scooter for urban commuting.',
    colors: ['red', 'blue', 'black'],
  },
  { 
    id: 2, 
    name: 'Wireless Mouse', 
    price: '$79', 
    image: bikecycle,
    colors: ['red', 'blue', 'black'],
    description: 'An ergonomic wireless mouse designed for comfort and precision.'
  },
  { 
    id: 3, 
    name: 'Gaming Headset', 
    price: '$199', 
    image: productOne,
    colors: ['black', 'white'],
    description: 'Immerse yourself in crystal-clear audio with this noise-canceling gaming headset.'
  },
  { 
    id: 4, 
    name: 'Smartwatch', 
    price: '$299', 
    image: productTwo,
    colors: ['black', 'silver', 'gold'],
    description: 'Stay connected and track your fitness goals with this feature-rich smartwatch.'
  },
  { 
    id: 5, 
    name: '4K Monitor', 
    price: '$499', 
    image: productThree,
    colors: ['black', 'white'],
    description: 'Experience stunning visuals with a vibrant display and incredible detail.'
  },
  { 
    id: 6, 
    name: 'Mechanical Keyboard', 
    price: '$149', 
    image: productFour,
    colors: ['black', 'white', 'rgb'],
    description: 'Enjoy a responsive and tactile typing experience with this durable mechanical keyboard.'
  },
];

function ProductList() {
  return (
    <section className="product-page-container">
      <div className="filter-and-sort">
        <div className="filter-options">
          <span>Filter: </span>
          <span>Availability</span>
          <span>Color</span>
        </div>
        <div className="sort-options">
          <span>Sort by: </span>
          <span>Alphabetically, A-Z</span>
        </div>
      </div>
      <div className="products-grid">
        {/* Use the map method to render a card for each product */}
        {products.map(product => (
          <Link key={product.id} to={`/productsdetails/${product.id}`}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductList;