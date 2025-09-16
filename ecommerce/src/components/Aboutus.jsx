import React from 'react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { BsBoxArrowRight, BsGrid, BsShieldCheck, BsLayers } from 'react-icons/bs'

import '../styles/aboutus.css';
import products from '../utils/product.json'; // Import the JSON Data

function Aboutus() {


  return (
    <section className="w-full m-auto products-section bg-[#3a190b]">
      <span className="product-heading"><h1>Our products</h1></span>
      <div className="product-content text-white flex justify-center items-center">
        <div className="product-card bg-[#402013] w-[450px] m-10 p-4 rounded-xl shadow-xl flex flex-col justify-center items-center hover:scale-105 duration-300 hover:bg-[#3a190b]">
          <div className="card-icon">
            <BsGrid size={24} />
          </div>
          <div className="card-content">
            <h2 className="card-heading text-center">Millions of business offering</h2>
            <p className="card-text text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam fuga quae libero maiores culpa eveniet, odit ullam facere sapiente laudantium, officiis debitis perspiciatis inventore, quas delectus ex voluptas dolore?
            </p>
          </div>
        </div>
        <div className="product-card bg-[#402013] w-[450px] m-10 p-4 rounded-xl shadow-xl flex flex-col justify-center items-center hover:scale-105 duration-300">
          <div className="card-icon">
            <BsShieldCheck size={24}/>
          </div>
          <div className="card-content">
            <h2 className="card-heading text-center">Millions of business offering</h2>
            <p className="card-text text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam fuga quae libero maiores culpa eveniet, odit ullam facere sapiente laudantium, officiis debitis perspiciatis inventore, quas delectus ex voluptas dolore?
            </p>
          </div>
        </div>
        <div className="product-card bg-[#402013] w-[450px] m-10 p-4 rounded-xl shadow-xl flex flex-col justify-center items-center hover:scale-105 duration-300">
          <div className="card-icon">
            <BsBoxArrowRight size={24}/>
          </div>
          <div className="card-content text-center">
            <h2 className="card-heading text-center">Millions of business offering</h2>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam fuga quae libero maiores culpa eveniet, odit ullam facere sapiente laudantium, officiis debitis perspiciatis inventore, quas delectus ex voluptas dolore?
            </p>
          </div>
        </div>
        <div className="product-card bg-[#402013] w-[450px] m-10 p-4 rounded-xl shadow-xl flex flex-col justify-center items-center hover:scale-105 duration-300">
          <div className="card-icon">
            <BsLayers size={24}/>
          </div>
          <div className="card-content text-center">
            <h2 className="card-heading text-center">Millions of business offering</h2>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam fuga quae libero maiores culpa eveniet, odit ullam facere sapiente laudantium, officiis debitis perspiciatis inventore, quas delectus ex voluptas dolore?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;