import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the cart
export const CartContext = createContext();

// Create a provider component that will wrap your entire application
export const CartProvider = ({ children }) => {
  // Use a state hook to manage the cart items
  const [cart, setCart] = useState(() => {
    // Initialize cart state from localStorage or an empty array
    try {
      const storedCart = window.localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      return [];
    }
  });

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to calculate the total number of items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  // Function to calculate the total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  // Provide the cart state and functions to child components
  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to easily access cart context
export const useCart = () => useContext(CartContext);