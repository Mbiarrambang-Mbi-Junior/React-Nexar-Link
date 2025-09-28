import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Sponsored from './Sponsored'
import Footer from './Footer'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import { useState} from 'react'

// Removed 'isDarkMode' from props, as the state is managed here
function LandingPage() { 
      // Keep the state management here
      const [isDarkMode, setIsDarkMode] = useState(false); 
      
      const handletheme = () => {
        setIsDarkMode(!isDarkMode);
      }
      
  return (
    // Apply dark mode class to the main container
    <div className={isDarkMode ? 'dark' : ''}> 
      {/* Pass both isDarkMode and handletheme to children */}
      <Header isDarkMode={isDarkMode} handletheme={handletheme} />
      <Hero isDarkMode={isDarkMode} handletheme={handletheme} />
      <Features isDarkMode={isDarkMode} handletheme={handletheme} />
      <AboutUs isDarkMode={isDarkMode} handletheme={handletheme} />
      <Sponsored isDarkMode={isDarkMode} handletheme={handletheme} />
      <ContactUs isDarkMode={isDarkMode} handletheme={handletheme} />
      <Footer isDarkMode={isDarkMode} handletheme={handletheme} />
    </div>
  )
}

export default LandingPage