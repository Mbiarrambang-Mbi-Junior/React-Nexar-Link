import React from 'react'
import '../styles/new.css'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

function New() {
  return (
    <>
    <div className='latest-products-section'>
      <h2 className="section-text">Latest Products</h2>
      <div className="latest-product">
        <BsArrowLeft className='arrow'/>
        <div className="latest-img">
          <p></p>
          <button>add to cart</button>
        </div>
        <div className="latest-img">
          <p></p>
          <button>add to cart</button>
        </div>
        <div className="latest-img">
          <p></p>
          <button>add to cart</button>
        </div>
        <BsArrowRight className='arrow'/>
      </div>
    </div>
    </>
  )
}

export default New