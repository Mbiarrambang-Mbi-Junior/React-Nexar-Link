import React from 'react';
import vanjuice from './vanJuice.png'; // Ensure the path is correct

function VanJuice() {
  return (
    <div className="flex">
      <img 
        src={vanjuice} 
        alt="Van Juice Icon" 
        className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-200" 
      />
    </div>
  );
}

export default VanJuice;