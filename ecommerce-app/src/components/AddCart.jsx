import React from 'react'
import '../styles/addcart.css'
import PayCart from './payCart'
import ShoppingCart from './ShoppingCart'

function AddCart() {
    return (
        <div className="pay-cart-container">
            <ShoppingCart />
            <PayCart />
        </div>
    )
}

export default AddCart