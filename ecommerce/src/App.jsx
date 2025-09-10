import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useCart, CartProvider } from './components/CartContext' // Import CartProvider and useCart
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/Aboutus'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDetails from './components/CartDetails'
import AddtoCart from './components/AddtoCart'


const HomePage = () => (
  <>
  <Hero />
  <About />
  <Contact />
  </>
);

// New component to handle the Cart context and pass props
const AppContent = () => {
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  return (
    <>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cartdetails/:productId" element={<CartDetails />} /> {/* Correct dynamic route */}
        <Route path="/myCart" element={<AddtoCart />} />
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