import React from 'react'
import { BsPlus } from 'react-icons/bs'
import '../styles/cartdetails.css'
import image from '../assets/2aba50e1-4134-497e-b37f-e3ff62d279e2-removebg-preview.png'

function CartDetails() {
  return (
    <section className="cart-details-container">
          <div className="cart-img">
            <img src={image} alt="{cart.name}" className="main-image" />
            <div className="small-images">
                <img src={image} alt="" className="small-image" /><img src={image} alt="" className="small-image" /><img src={image} alt="" className="small-image" />
            </div>
          </div>
          <div className="text-description">
            <h1 className="cart-name">cart.name</h1>
            <div className="cart-description">
              <p>cart.description</p>
            </div>
            <div className="select-color">
              <p className="text">Color:</p>

              <select id="color-select" >
                <option value="">-- Select a Color --</option>
                
                {/*cart.colors.map((colorOption) => (
                  <option key={colorOption} value={colorOption}>
                    {colorOption}
                  </option>
                ))*/}
              </select>
            </div>
            <div className="price-add-cart">
              <span className="cart-price">cart.price</span>
              <BsPlus className="add-to-cart-icon" />
            </div>
          </div>
        </section>
  )
}

export default CartDetails