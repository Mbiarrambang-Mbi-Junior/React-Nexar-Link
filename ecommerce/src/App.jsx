import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, useSearchParams} from "react-router-dom"
import { useCart, CartProvider } from './components/CartContext' // Import CartProvider and useCart
import Header from './components/Header'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Discover from './components/Discover'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Favorites from './components/Favorites'
import CartDetails from './components/CartDetails'
import AddtoCart from './components/AddtoCart'
import SearchResults from './components/SearchResults'


function HomeWithSearch() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  // Check if a search query exists
  if (searchQuery) {
    return <SearchResults searchQuery={searchQuery} />;
  }

  // If no search query, render the default homepage components
  return (
    <>
      <Hero />
      <Explore />
      <Discover />
      <Contact />
    </>
  );
}



// New component to handle the Cart context and pass props
const AppContent = () => {
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  return (
    <>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomeWithSearch />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cartdetails/:Id" element={<CartDetails />} />
        <Route path="/myCart" element={<AddtoCart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App