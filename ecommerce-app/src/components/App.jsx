import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Category from './Category';
import New from './New';
import About from './About';
import Trending from './Trending';
import Footer from './Footer';
import Services from './Services';
import Contacts from './Contacts';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AddCart from './AddCart';
import Favourite from './Favourite';
import { CartProvider } from './CartContext'; 
import Login from './Login';
import Signup from './Signup';



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