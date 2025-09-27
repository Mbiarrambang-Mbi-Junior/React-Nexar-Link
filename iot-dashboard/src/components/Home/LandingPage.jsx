import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Sponsored from './Sponsored'
import Footer from './Footer'

function LandingPage({ isDarkMode }) {
  return (
    <div>
      <Header isDarkMode={isDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <Features isDarkMode={isDarkMode} />
      <Sponsored isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default LandingPage