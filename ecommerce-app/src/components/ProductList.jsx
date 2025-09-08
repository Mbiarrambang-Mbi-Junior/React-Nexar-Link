import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productlist.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Import images
import productOne from '../images/0b7b4d59-7c95-470b-9a8c-f28a8f160f95-removebg-preview.png';
import productTwo from '../images/Leo_Men_s_Athletic_Sneakers_Green-8_5___43-removebg-preview.png';
import productThree from '../images/R_A.T.M_Wireless_Mouse_by_Mad_Catz-removebg-preview.png';
import productFour from '../images/Logitech_G502_LIGHTSPEED_Wireless_Gaming_Mouse-removebg-preview.png';

// Data for the products
const products = [
  {
    id: 1,
    name: 'Electric Scooter',
    image: productOne,
    description: 'A stylish and fast electric scooter for urban commuting.',
    price: '$899',
    stats: ['100 km range', '2 hr charge'],
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    image: productTwo,
    description: 'Ergonomic design with high-precision tracking.',
    price: '$79',
    stats: ['1000 DPI', '5 buttons'],
  },
  {
    id: 3,
    name: 'Smart Water Bottle',
    image: productThree,
    description: 'Keeps track of your hydration goals throughout the day.',
    price: '$49',
    stats: ['500ml capacity', 'smart sensor'],
  },
  {
    id: 4,
    name: 'VR Headset',
    image: productFour,
    description: 'Immersive virtual reality experience for gaming and more.',
    price: '$299',
    stats: ['4K resolution', '360° tracking'],
  },
  {
    id: 5,
    name: 'VR Headset',
    image: productFour,
    description: 'Immersive virtual reality experience for gaming and more.',
    price: '$299',
    stats: ['4K resolution', '360° tracking'],
  },
  {
    id: 6,
    name: 'VR Headset',
    image: productFour,
    description: 'Immersive virtual reality experience for gaming and more.',
    price: '$299',
    stats: ['4K resolution', '360° tracking'],
  },
  {
    id: 7,
    name: 'VR Headset',
    image: productFour,
    description: 'Immersive virtual reality experience for gaming and more.',
    price: '$299',
    stats: ['4K resolution', '360° tracking'],
  },
  {
    id: 8,
    name: 'VR Headset',
    image: productFour,
    description: 'Immersive virtual reality experience for gaming and more.',
    price: '$299',
    stats: ['4K resolution', '360° tracking'],
  },
];

// Reusable ProductCard component
const ProductCard = ({ product }) => (
  <Link to={`/products/:id/${product.id}`} className="product-card-link">
    <div className="product-card">
      <div className="card-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="card-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="card-stats">
          {product.stats.map((stat, index) => (
            <span key={index} className="stat-item">{stat}</span>
          ))}
        </div>
        <span className="price">{product.price}</span>
      </div>
    </div>
  </Link>
);

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
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;