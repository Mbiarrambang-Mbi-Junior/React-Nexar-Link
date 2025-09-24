import { useState, useEffect } from 'react';

const useCart = () => {
  // Initialize cart state from localStorage or an empty array
  const [cart, setCart] = useState(() => {
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

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        // If it exists, increase its quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it doesn't exist, add it to the cart with a quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };
  
  // You can add more functions like `decreaseQuantity`, `clearCart`, etc.

  return { cart, addToCart, removeFromCart };
};

export default useCart;