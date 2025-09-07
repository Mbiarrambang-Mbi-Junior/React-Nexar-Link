import { useState } from 'react'
import { BsLightningChargeFill } from 'react-icons/bs';
import './App.css'
import Header from './components/Header'
import New from './components/New'
import Hero from './components/Hero'
import Category from './components/Category'
import Trending from './components/Trending'
import Footer from './components/Footer'


function App() {


  return (
    <div className="App">
      <Header />
      <Hero />
      <Category />
      <New />
      <Trending />
      <Footer />
    </div>
  )
}

export default App
