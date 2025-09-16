import React from 'react';
import { useCart } from './CartContext'; // Import the useCart hook
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from 'react-icons/fa';

function PayCart() {
  const { getTotalPrice } = useCart(); // Get the getTotalPrice function

  const subtotal = getTotalPrice();
  const shipping = 10.00;
  const total = subtotal + shipping;

  return (
    <div className="pay-card w-[1200px] h-[500] p-[20px] flex items-start justify-center text-white bg-teal-500 rounded-[10px]">
      <div className="input-feild">
        <form action="" method="get">
          <div className="choose-card">
            <h3>Choose card</h3>
            <div className="cards-pay flex justify-around items-start gap-[1rem]">
              <div className="card-pay border-white border-[1px] rounded-[10px] flex items-center justify-center gap-[1rem] p-[1rem] visa">
                <p>Visa</p>
                <FaCcVisa />
              </div>
              <div className="card-pay border-white border-[1px] rounded-[10px] flex items-center justify-center gap-[1rem] p-[1rem] mastercard">
                <p>Mastercard</p>
                <FaCcMastercard />
              </div>
              <div className="card-pay border-white border-[1px] rounded-[10px] flex items-center justify-center gap-[1rem] p-[1rem] paypal">
                <p>Paypal</p>
                <FaCcPaypal />
              </div>
            </div>
          </div>
          <div className="card-info flex flex-col content-start w-full">
            <div className="cart-input flex flex-col justify-center items-start mb-[20px] w-[95%]">
              <label className='text-[0.9rem] text-[#555] mb-[5px] font-bold' htmlFor="">card name</label>
              <input type="text" className='p-[12px] mb-[0] border-[1px] border-[#e0e0e0] rounded-[8px] bg-transperent text-[#333] w-[100%] shadow-md  focuse:outline-none focuse:border-[1px] focuse:border-white focuse:shadow-md'/> 
            </div>
            <div className="cart-input flex flex-col justify-center items-start mb-[20px] w-[95%]">
              <label className='text-[0.9rem] text-[#555] mb-[5px] font-bold' htmlFor="">card name</label>
              <input type="number" className='p-[12px] mb-[0] border-[1px] border-[#e0e0e0] rounded-[8px] bg-transperent text-[#333] w-[100%] shadow-md  focuse:outline-none focuse: border-white focuse:shadow-md'/> 
            </div>
            <div className="card-date-cvv flex justify-between items-center w-[95%]">
              <div className="card-date flex flex-col items-start w-[150px]">
                <label className='text-[0.9rem] text-[#555] mb-[5px] font-bold' htmlFor="">expiration date</label>
                <input type="month" className='p-[12px] mb-[0] border-[1px] border-[#e0e0e0] rounded-[8px] bg-transperent text-[#333] w-[100%] shadow-md  focuse:outline-none focuse: border-white focuse:shadow-md'/> 
              </div>
              <div className="card-cvv flex flex-col items-start w-[150px]">
                <label className='text-[0.9rem] text-[#555] mb-[5px] font-bold' htmlFor="">CVV</label>
                <input type="text" className='p-[12px] mb-[0] border-[1px] border-[#e0e0e0] rounded-[8px] bg-transperent text-[#333] w-[100%] shadow-md  focuse:outline-none focuse: border-white focuse:shadow-md'/> 
              </div>
            </div>
          </div>
          <div className="subtotal-section">
            {/* Display the calculated subtotal and total from the cart context */}
            <p className='flex justify-between w-[100%]'>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
            <p className='flex justify-between w-[100%]'>Shipping: <span>${shipping.toFixed(2)}</span></p>
            <hr />
            <h2 className='flex justify-between w-[100%]'>Total: <span className='font-bold text-3xl text-white'>${total.toFixed(2)}</span></h2>
          </div>

          <div className="pay-now">
            <button type="submit" className='p-[1.5rem] w-[100%] rounded-[20px] border-none bg-orange-400 hover:bg-orange-500 text-white font-bold hover:cursor-pointer'>Pay Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PayCart;