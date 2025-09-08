import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import New from './components/New';
import Trending from './components/Trending';
import Footer from './components/Footer';
import Services from './components/Services';
import Contacts from './components/Contacts';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

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
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;