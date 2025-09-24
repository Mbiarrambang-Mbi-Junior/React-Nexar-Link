// ShoppingCart.jsx
import React from 'react';
import { useCart } from './CartContext'; // Use the hook here
import { BsPlus, BsFileMinus, BsTrash } from 'react-icons/bs';
import '../styles/shoppingcart.css';

function ShoppingCart() {
  const { cart, getTotalItems } = useCart(); // Get cart state and functions

  return (
    <div className="shopping-cart">
      <div className="your-cart">
        <p>Shopping Cart</p>
        <div className="header-text">
          <p>You have <span>{getTotalItems()}</span> items</p>
        </div>
      </div>
      <h4>Your Shopping Cart</h4>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="item-image">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <div className="item-actions">
                <div className="quantity">
                  <BsPlus />
                  <span>{item.quantity}</span>
                  <BsFileMinus />
                </div>
                <div className="remove">
                  <BsTrash />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart-message">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;