import React from 'react';
import '../styles/Shopcart.css';
import { BsPlus, BsDash, BsTrash, BsArrowLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Import the useCart hook

function ShoppingCart() {
  const navigate = useNavigate();
  const { cart, getTotalItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Use the hook to get cart state and functions

  const handleBackToShop = () => {
    navigate('/shop');
  };

  return (
    <div className="shopping-cart">
      <span className="back-to-shop">
        <BsArrowLeft onClick={handleBackToShop} />
        Back to Shop
      </span>
      <div className="your-cart">
        <div className="your-cart-text">
          <h4>Your Shopping Cart</h4>
          {/* Now getTotalItems() will work correctly */}
          <p>You have <span>{getTotalItems()}</span> items</p>
        </div>
        <div className="header-text">
          <p>sort by</p>
          <select className="sort">
            <option value="filter">Newest</option>
            <option value="filter">Oldest</option>
            <option value="filter">Alphabetical, A-Z</option>
            <option value="filter">Alphabetical, Z-A</option>
          </select>
        </div>
      </div>
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
                  <BsPlus onClick={() => increaseQuantity(item.id)} />
                  <span>{item.quantity}</span>
                  <BsDash onClick={() => decreaseQuantity(item.id)} />
                </div>
                <div className="remove" onClick={() => removeFromCart(item.id)}>
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