import React from "react"
import { useState } from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import ProjectDisplay from "./components/ProjectDisplay"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProjectList from "./components/ProjectList"


// 🚀 FIX APPLIED: Accept isDarkMode prop and pass it down
function HomePage({ isDarkMode }) {
  // NOTE: isDarkMode and handleThemeToggle props passed from App are currently ignored here.
  // This is okay for this fix, but consider passing them down to Hero/About/Project etc., if needed.
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero isDarkMode={isDarkMode} /> 
      <About isDarkMode={isDarkMode} />
      <Project isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // Also pass the toggle function down to Header
  const handleThemeToggle = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <BrowserRouter>
      {/* FIX: Pass isDarkMode and handleThemeToggle to Header */}
      <Header isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
      <Routes>
        {/* FIX: Pass isDarkMode to HomePage */}
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
        <Route path="/projectDisplay/:id" element={<ProjectDisplay />} />
        <Route path="/projectlist" element={<ProjectList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App