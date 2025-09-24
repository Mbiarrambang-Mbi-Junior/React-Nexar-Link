// src/components/Favorites.jsx
import React from 'react';
import { useCart } from './CartContext';
import { BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Favorites() {
  const { favorites, removeFromFavorites } = useCart();
  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate('/shop');
  };

  return (
    <section className="font-sans max-w-4xl mx-auto my-10 pt-20 bg-gray-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Your Favorite Items
      </h2>

      {favorites.length > 0 ? (
        <div className="flex flex-col gap-6">
          {favorites.map((item) => (
            <div
              className="flex items-center bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg flex-col sm:flex-row text-center sm:text-left"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
              <div className="flex items-center mt-4 sm:mt-0 sm:ml-auto">
                <BsTrash
                  onClick={() => removeFromFavorites(item.id)}
                  className="text-2xl text-red-500 cursor-pointer transition-colors duration-200 hover:text-red-700 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-500 italic mt-5">
            You have no favorite items yet.
          </p>
          <button
            onClick={handleBackToShop}
            className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer transition-colors duration-200 hover:bg-blue-700 font-medium shadow-md"
          >
            Start Shopping
          </button>
        </div>
      )}
    </section>
  );
}

export default Favorites;