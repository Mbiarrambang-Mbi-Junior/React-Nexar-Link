import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Sponsored from './Sponsored'
import Footer from './Footer'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import { useState} from 'react'

// LandingPage is receiving both isAuth and userData from Container.jsx
function LandingPage({ userData, isDarkMode}) { 
      
  return (
    // Apply dark mode class to the main container
    <div className={isDarkMode ? 'dark' : ''}> 
      {/* FIX: Removed the redundant 'isAuth' prop from Header. */}
      <Header isDarkMode={isDarkMode} userData={userData} />
      <Hero isDarkMode={isDarkMode}  />
      <Features isDarkMode={isDarkMode}  />
      <AboutUs isDarkMode={isDarkMode}  />
      <Sponsored isDarkMode={isDarkMode} />
      <ContactUs isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode}  />
    </div>
  )
}

export default LandingPage