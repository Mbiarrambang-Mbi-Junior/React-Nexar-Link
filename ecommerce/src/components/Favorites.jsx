// src/components/Favorites.jsx
import React from 'react';
import { useCart } from './CartContext';
import { BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import '../styles/favorites.css'; // You'll need to create this CSS file

function Favorites() {
  const { favorites, removeFromFavorites } = useCart();
  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate('/shop');
  };

  return (
    <section className="favorites-page">
      <h2>Your Favorite Items</h2>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map(item => (
            <div className="favorite-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Description: {item.description}</p>
              </div>
              <div className="item-actions">
                <BsTrash onClick={() => removeFromFavorites(item.id)} className="remove-icon" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>You have no favorite items yet.</p>
          <button onClick={handleBackToShop}>Start Shopping</button>
        </div>
      )}
    </section>
  );
}

export default Favorites;