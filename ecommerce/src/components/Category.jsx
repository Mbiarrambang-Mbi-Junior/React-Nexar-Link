// src/components/Category.jsx
import React from 'react';

const Category = ({ product }) => {
  return (
    <div className="flex-shrink-0 w-48 bg-white rounded-lg shadow-md p-4 cursor-pointer">
      <div className="w-full h-24 mb-2 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-md font-semibold text-gray-800 truncate">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
    </div>
  );
};

export default Category;