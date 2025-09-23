import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// This component will be rendered for the home page route
const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
};

// Example of a new component for a separate page
const ProjectsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">All Projects</h1>
      <p>This is a dedicated page for all your projects.</p>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;