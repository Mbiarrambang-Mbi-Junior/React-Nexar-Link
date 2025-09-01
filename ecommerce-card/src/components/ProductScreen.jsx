// ProductScreen.js
import React, { useState } from 'react';
import Header from './Header';
import ProductDetails from './ProductDetails';
import ProductTabs from './ProductTabs';
import '../styles/ProductScreen.css';

const productData = {
  name: 'G502 HERO',
  price: '$69.99',
  images: [
    'path/to/main-image.png',
    'path/to/thumbnail1.png',
    'path/to/thumbnail2.png'
  ],
  features: [
    { name: 'HERO 16K', description: 'OUR MOST ACCURATE' },
    { name: '11 BUTTONS', description: 'FULLY PROGRAMMABLE' },
    { name: 'FIVE 3.6G', description: 'ADJUSTABLE WEIGHTS' }
  ],
  specifications: 'Detailed text about the mouse.',
  support: 'Support information for the product.'
};

function ProductScreen() {
  const [activeTab, setActiveTab] = useState('specifications');

  return (
    <div className="product-screen-container">
      <Header />
      <ProductDetails data={productData} />
      <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} data={productData} />
    </div>
  );
}

export default ProductScreen;