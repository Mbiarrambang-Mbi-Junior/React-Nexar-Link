// CartContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = window.localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      return [];
    }
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavorites = window.localStorage.getItem('favorites');
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Failed to load favorites from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // add to favorites
const addToFavorites = (product) => {
  setFavorites((prevFavorites) => {
    // Check if the item is already in favorites by its unique ID
    const isAlreadyFavorite = prevFavorites.some(item => item.id === product.id);

    // If the item already exists in the favorites list, return the list unchanged.
    if (isAlreadyFavorite) {
      return prevFavorites;
    }
    
    // If it's a new item, add the product to the favorites array.
    // We don't need to add a quantity or color.
    return [...prevFavorites, product];
  });
};

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(item => item.id !== productId)
    );
  };

  const addToCart = (product, selectedColor) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.selectedColor === selectedColor
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1, selectedColor: selectedColor }];
    });
  };

  // FIXED: Now accepts `selectedColor` to uniquely identify the item to remove.
  const removeFromCart = (productId, selectedColor) => {
    setCart((prevCart) =>
      prevCart.filter(item => !(item.id === productId && item.selectedColor === selectedColor))
    );
  };

  // FIXED: Now accepts `selectedColor` and correctly uses it. The `color` variable was undefined.
  const increaseQuantity = (productId, selectedColor) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId && item.selectedColor === selectedColor
          ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // FIXED: Now accepts `selectedColor` to uniquely identify the item to decrease.
  const decreaseQuantity = (productId, selectedColor) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId && item.selectedColor === selectedColor && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      favorites,
      addToFavorites,
      removeFromFavorites,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};