import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ViewMenu from './components/ViewMenu'
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view-menu" element={<ViewMenu />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
