import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import ProjectDisplay from "./components/ProjectDisplay"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProjectList from "./components/ProjectList"


function HomePage() {
  return (
<>
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
      </>
  )
}


function App() {

  return (
    <BrowserRouter>
          <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectDisplay/:id" element={<ProjectDisplay />} />
        <Route path="/projectlist" element={<ProjectList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
