import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import ProjectList from "./components/ProjectList";
import ProjectDisplay from "./components/ProjectDisplay";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const Homepage = () => {
  return (
    <>
      <Hero toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <About toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <Project toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <Contact toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
    </>
  );
};

  return (
    <BrowserRouter>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projectsList" element={<ProjectList toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path='/projectDisplay/:id' element={<ProjectDisplay toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </BrowserRouter>
  );
}

export default App;