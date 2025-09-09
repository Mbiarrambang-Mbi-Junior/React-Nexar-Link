import React from 'react'
import './App.css'
//import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/Aboutus'
import Shop from './components/Shop'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'



//const [cartCount, setCartCount] = useState(0);

//  const handleAddToCart = () => {
 //   setCartCount(prevCount => prevCount + 1);
  //  {/*cartCount={cartCount}*/} 
 // };

const HomePage = () => (
  <>
  <Header />
  <Hero />
  <About />
  <Services />
  <Contact />
  </>
);

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
