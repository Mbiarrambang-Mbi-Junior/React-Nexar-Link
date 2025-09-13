import React from 'react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/aboutus.css';
import products from '../utils/product.json'; // Import the JSON Data

function Aboutus() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section className="w-3/4 m-auto products-section">
      <h1 className="products-heading">Our products</h1>
      <Slider {...settings}>

        {products.map((product) => (
          <div key={product.id} className="h-[450px] w-[300px] text-black rounded-xl shadow-xl transform hover:scale-105 duration-300 cursor-pointer  product-card">
            <div className="bg-orange-500 flex justify-center items-center h-56 rounded-t-xl">
              <img src={product.image} alt={product.alt} className="h-44 w-44 rounded-t-xl" />
            </div>

            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-center text-xl font-semibold">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <button className="text-white border-2 border-teal-500  bg-teal-500 hover:border-orange-500 hover:bg-orange-500 font-bold py-2 px-4 rounded-xl transition-colors duration-300">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

    </section>
  );
}

export default Aboutus;