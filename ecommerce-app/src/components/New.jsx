import React from 'react';
import '../styles/new.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Import all your product images
import productOne from '../images/0b7b4d59-7c95-470b-9a8c-f28a8f160f95-removebg-preview.png';
import productTwo from '../images/0b7b4d59-7c95-470b-9a8c-f28a8f160f95-removebg-preview.png'; // Use a different image here
import productThree from '../images/0b7b4d59-7c95-470b-9a8c-f28a8f160f95-removebg-preview.png'; // Use a different image here

// Sample data for the products
const products = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et commodi laboriosam saepe aut est mollitia, repellat, adipisci expedita nulla odio enim nesciunt qui. Obcaecati dolorum ratione quisquam possimus nobis.',
    image: productOne,
  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe exercitationem obcaecati corrupti quo neque? At non soluta perferendis animi quis sequi, nulla asperiores maiores, nisi debitis tenetur. Vitae, fugit at.',
    image: productTwo,
  },
  {
    id: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus cumque perferendis magnam itaque minima repellendus atque debitis nostrum sequi quasi ea ratione enim quae, dolore labore accusamus. Autem, explicabo.',
    image: productThree,
  },
];

// Reusable ProductCard component
const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt="Latest product" className="product-image" />
    <p>{product.description}</p>
    <button>Add to Cart</button>
  </div>
);

function New() {
  return (
    <section className="latest-products-section">
      <h2 className="section-title">Latest Products</h2>
      <div className="product-carousel">
        <BsArrowLeft className="arrow left" />
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <BsArrowRight className="arrow right" />
      </div>
      <div className="dot-navigte">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}

export default New;