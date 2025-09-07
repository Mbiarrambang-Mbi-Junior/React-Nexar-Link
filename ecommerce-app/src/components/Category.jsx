import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../styles/category.css';
import { BsPlus } from 'react-icons/bs';

// It's a good practice to import images directly in React
// and reference them with variables.
import nikeBlue from '../images/Leo_Men_s_Athletic_Sneakers_Green-8_5___43-removebg-preview.png';
import nikePurple from '../images/Leo_Men_s_Athletic_Sneakers_Green-8_5___43-removebg-preview.png';

function Category() {
    return (
        <>
            <h2>Category Component</h2>
            <div className="category-content">
                    <div className="product-card">
                        <span className="sneakers">Electronics</span>
                        <div className="card">
                        <img src={nikePurple} alt="Nike Purple sneakers" />
                        <div className="title">
                            <h2>Nike Purple</h2>
                        </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <span className="sneakers">Men</span>
                        <div className="card">
                        <img src={nikePurple} alt="Nike Purple sneakers" />
                        <div className="title">
                            <h2>Nike Purple</h2>
                        </div>
                        </div>
                    </div>  
                    <div className="product-card">
                        <span className="sneakers">Female</span>
                        <div className="card">
                        <img src={nikePurple} alt="Nike Purple sneakers" />
                        <div className="title">
                            <h2>Nike Purple</h2>
                        </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <span className="sneakers">Furniture</span>
                        <div className="card">
                        <img src={nikePurple} alt="Nike Purple sneakers" />
                        <div className="title">
                            <h2>Nike Purple</h2>
                        </div>
                        </div>
                    </div>               
            </div>
        </>
    );
}

export default Category;