// PayCart.jsx
import React from 'react';
import '../styles/paycart.css';
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from 'react-icons/fa';

function PayCart() {
  

  return (
    <div className="pay-card">
      <div className="input-feild">
        <form action="" method="get">
      
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
          <div className="card-info">
            <div className="cart-input">
              <label htmlFor="">card name</label>
              <input type="text" /> 
            </div>
            <div className="cart-input">
              <label htmlFor="">card name</label>
              <input type="text" /> 
            </div>
            <div className="card-date-cvv">
              <div className="card-date">
                <label htmlFor="">expiration date</label>
                <input type="text" /> 
              </div>
              <div className="card-date">
                <label htmlFor="">CVV</label>
                <input type="text" /> 
              </div>
            </div>
          </div>
          <div className="subtotal-section">
            <p>Subtotal: <span>${/*getTotalPrice().toFixed(2)*/}</span></p>
            <p>Shipping: <span>$10.00</span></p>
            <hr />
            <h2>Total: <span>${/*(getTotalPrice() + 10).toFixed(2)*/}</span></h2>
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