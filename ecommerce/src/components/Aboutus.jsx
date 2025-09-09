import React from 'react'
import '../styles/aboutus.css'
import {BsEyeFill, BsRocketFill,BsStarFill} from 'react-icons/bs'


function Aboutus() {
  return (
    <section id="aboutus-section">
      <h1 className="aboutus-heading">About Us</h1>

      <div className="aboutus-text-content">
          <div className="aboutus-section-block">
            <h2 className="aboutus-section-title">
              <div className="title-icon">
                <BsEyeFill />
              </div>Our Vision</h2>
            <p className="section-description">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          
          <div className="aboutus-section-block">
            <h2 className="aboutus-section-title">
              <div className="title-icon">
                <BsRocketFill />
              </div>Our Mission</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          
          <div className="aboutus-section-block">
            <h2 className="aboutus-section-title">
              <div className="title-icon">
                <BsStarFill />
              </div>Our Values</h2>
            <ul className="values-list">
              <li>Customer-Centric: Lorem ipsum dolor sit </li>
              <li>Integrity: Lorem ipsum dolor sit</li>
              <li>Innovation: Lorem ipsum dolor sit</li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Aboutus