import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useParams } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import products from '../utils/product';

const CardDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.productId === parseInt(productId));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h2 className="text-xl font-bold text-red-500">Product not found!</h2>
      </div>
    );
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <section className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-16">
      <div className="product-img w-full md:w-1/2 flex flex-col gap-4">
        <div className="w-full rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        <div className="small-images flex gap-2 overflow-x-auto pb-2">
          {product.images?.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-24 h-24 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500 transition-colors duration-300" 
            />
          ))}
        </div>
      </div>
      <div className="text-description w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="product-name text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          {product.name}
        </h1>
        <div className="product-description text-gray-600 leading-relaxed">
          <p>{product.description}</p>
        </div>
        <div className="select-color flex items-center gap-4 text-gray-700 font-semibold">
          <p>Color:</p>
          <select 
            className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={selectedColor} 
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {product.colors.map(color => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className="price-add-cart flex items-center justify-between mt-4">
          <span className="product-price text-xl md:text-2xl font-bold text-white bg-teal-500 px-4 py-2 rounded-lg">
            Price: ${product.price.toFixed(2)}
          </span>
          <button
            className="flex items-center justify-center w-12 h-12 bg-teal-500 text-white rounded-full text-3xl shadow-lg transform hover:scale-110 transition-transform duration-300"
            onClick={() => addToCart(product, selectedColor)}
          >
            <BsPlus />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;