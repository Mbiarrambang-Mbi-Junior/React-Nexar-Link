import React from 'react'
import '../styles/addtocart.css'
import PayCart from './PayCart'
import ShoppingCart from './ShoppingCart'

function AddtoCart() {
  return (
    <section className="addtocart-container">
            <ShoppingCart />
            <PayCart />
        </section>
  )
}

export default AddtoCart