import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import New from './components/New';
import About from './components/About';
import Trending from './components/Trending';
import Footer from './components/Footer';
import Services from './components/Services';
import Contacts from './components/Contacts';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AddCart from './components/AddCart';
import Favourite from './components/Favourite';
import { CartProvider } from './components/CartContext'; 
import Login from './components/Login';
import Signup from './components/Signup';



// A new component to act as the home page
const HomePage = () => (
  <>
    <Hero />
    <Category />
    <New />
    <Trending />
  </>
);

function App() {
  return (
    <Router>
      <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/productsdetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<AddCart/>} />
          <Route path="/about" element={<About />} />
          <Route path="/favourit" element={<Favourite />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;