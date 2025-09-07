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
                <Tilt
                    className="card blue"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                    transitionSpeed={5000}
                    glareEnable={true}
                    glareMaxOpacity={0.5}
                ></Tilt>
                    <div className="product card">
                        <h3>Electronics</h3>
                        <span className="sneakers">SNEAKERS</span>
                        <span className="price">$39.9</span>
                        <img src={nikeBlue} alt="Nike Blue sneakers" />
                        <div className="title">
                            <h2>Nike Blue</h2>
                            <BsPlus className='add-icon' />
                        </div>
                    </div>
                    <div className="product card">
                        <h3>Men</h3>
                        <span className="sneakers">SNEAKERS</span>
                        <span className="price">$39.9</span>
                        <img src={nikeBlue} alt="Nike Blue sneakers" />
                        <div className="title">
                            <h2>Nike Blue</h2>
                            <BsPlus className='add-icon' />
                        </div>
                    </div>
                    <div className="product card">
                        <h3>Female</h3>
                        <span className="sneakers">SNEAKERS</span>
                        <span className="price">$39.9</span>
                        <img src={nikeBlue} alt="Nike Blue sneakers" />
                        <div className="title">
                            <h2>Nike Blue</h2>
                            <BsPlus className='add-icon' />
                        </div>
                    </div>
                    <div className="product ">
                        <h3>Furniture</h3>
                        <span className="sneakers">SNEAKERS</span>
                        <span className="price">$39.9</span>
                        <img src={nikeBlue} alt="Nike Blue sneakers" />
                        <div className="title">
                            <h2>Nike Blue</h2>
                            <BsPlus className='add-icon' />
                        </div>
                    </div>               
            </div>
        </>
    );
}

export default Category;