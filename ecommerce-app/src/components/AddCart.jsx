import React from 'react'
import '../styles/addcart.css'
import Paycart from './payCart'
import ShoppingCart from './ShoppingCart'

function AddCart() {
    return (
        <div className="pay-cart-container">
            <ShoppingCart />
            <Paycart />
        </div>
    )
}

export default AddCart