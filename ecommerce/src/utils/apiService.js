// utils/apiService.js
const BASE_URL = 'https://fakestoreapi.com';

const apiService = {
  // Fetches a user's cart and full product details
  getCart: async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/carts/user/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch user cart');
      const carts = await response.json();
      const latestCart = carts[carts.length - 1];
      if (!latestCart) return [];

      const cartItemsWithDetails = await Promise.all(
        latestCart.products.map(async (item) => {
          const productResponse = await fetch(`${BASE_URL}/products/${item.productId}`);
          if (!productResponse.ok) throw new Error('Failed to fetch product details');
          const productDetails = await productResponse.json();
          // Adding a placeholder for color since the API doesn't support it
          return { ...productDetails, quantity: item.quantity, selectedColor: 'N/A' };
        })
      );
      return cartItemsWithDetails;
    } catch (error) {
      console.error("API getCart error:", error);
      throw error;
    }
  },

  // Simulates adding an item to the cart
  addToCart: async (userId, productId, quantity) => {
    console.log(`Simulating adding product ${productId} to cart for user ${userId}.`);
    // This API call doesn't persist, but it simulates a successful response
    const response = await fetch(`${BASE_URL}/carts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, date: new Date().toISOString(), products: [{ productId, quantity }] }),
    });
    if (!response.ok) throw new Error('Failed to add item to cart');
    return response.json();
  },

  // Simulates updating the entire cart after an item is removed
  updateCart: async (userId, updatedProducts) => {
    console.log(`Simulating updating cart for user ${userId}.`);
    // The Fake Store API doesn't have a specific update endpoint for a user's cart,
    // so this is a conceptual placeholder. In a real application, you would
    // send a PUT request to update the user's cart.
    return { success: true, message: 'Cart updated successfully' };
  },

  // Since the Fake Store API has no favorites endpoint, we simulate it
  getFavorites: async (userId) => {
    console.log(`Simulating fetching favorites for user ${userId}.`);
    return []; // Returns an empty array to start
  },

  addToFavorites: async (userId, product) => {
    console.log(`Simulating adding product ${product.id} to favorites for user ${userId}.`);
    return { success: true };
  },

  removeFromFavorites: async (userId, productId) => {
    console.log(`Simulating removing product ${productId} from favorites for user ${userId}.`);
    return { success: true };
  },
};

export default apiService;