import React from 'react';
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
    <div className="shopping-cart w-[200%] p-[20px]">
      <span className="back-to-shop flex items-center content-start justify-center bg-white w-[150px] rounded-xl shadow-md mb-[10px] gap-[.5rem] p-[.5rem] hover:cursor-pointer hover:bg-gray-200" onClick={handleBackToShop} >
        <BsArrowLeft />
        Back to Shop
      </span>
      <div className="your-cart flex items-center justify-between">
        <div className="your-cart-text">
          <h4>Your Shopping Cart</h4>
          {/* Now getTotalItems() will work correctly */}
          <p>You have <span>{getTotalItems()}</span> items</p>
        </div>
        <div className="header-text flex items-center justify-center gap-[.5rem]">
          <p>sort by</p>
          <select className="sort w-[100px]">
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
            <div className="cart-item flex items-center justify-between mb-[20px] rounded-[20px] shadow-md w-[100%] bg-white p-[15px]" key={`${item.id}-${item.selectedColor}`}> {/* Use the new unique key */}
              <div className="item-image flex items-center m-0">
                <img src={item.image} alt={item.name} className='w-[80px] h-[80px] rounded-[10px] mr-[15px]'/>
                <div className="item-details">
                  <h3 className='flex flex-col items-start'>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Total Price: **${(item.price * item.quantity).toFixed(2)}**</p>
                  <p>Color: {item.selectedColor}</p>
                </div>
              </div>
              <div className="item-actions flex items-center justify-between gap-[2rem]">
                <div className="quantity flex items-center justify-between gap-[1rem]">
                  <BsPlus onClick={() => increaseQuantity(item.id, item.selectedColor)} className='quantity-icon text-[35px] text-green-500 hover:cursor-pointer hover:border-grey-400' />
                  <span>{item.quantity}</span>
                  <BsDash onClick={() => decreaseQuantity(item.id, item.selectedColor)} className='quantity-icon text-[35px] text-green-500 hover:cursor-pointer hover:border-grey-400' />
                </div>
                <div className="remove-icon text-red-500 hover:cursor-pointer hover:text-red-600" onClick={() => removeFromCart(item.id, item.selectedColor)}>
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