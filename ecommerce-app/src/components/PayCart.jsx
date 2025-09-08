// PayCart.jsx
import React from 'react';
import { useCart } from './CartContext'; // Use the hook here
import '../styles/pay.css';
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from 'react-icons/fa';

function PayCart() {
  const { getTotalPrice } = useCart(); // Get the total price function

  return (
    <div className="pay-card">
      <div className="input-feild">
        <form action="" method="get">
          {/* ... existing form and profile JSX ... */}
          
          <div className="subtotal-section">
            <p>Subtotal: <span>${getTotalPrice().toFixed(2)}</span></p>
            <p>Shipping: <span>$10.00</span></p>
            <hr />
            <h2>Total: <span>${(getTotalPrice() + 10).toFixed(2)}</span></h2>
          </div>

          <div className="choose-card">
            <h3>Choose card</h3>
            <div className="cards-pay">
              <div className="card-pay visa">
                <p>Visa</p>
                <FaCcVisa />
              </div>
              <div className="card-pay mastercard">
                <p>Mastercard</p>
                <FaCcMastercard />
              </div>
              <div className="card-pay paypal">
                <p>Paypal</p>
                <FaCcPaypal />
              </div>
            </div>
          </div>

          <div className="pay-now">
            <button type="submit">Pay Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PayCart;