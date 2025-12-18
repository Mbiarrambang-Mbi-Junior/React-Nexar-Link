import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contianer from './components/Contianer';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark' : 'light'} capitalize`}>
        <Routes>
          {/* Use "/*" to allow nested routing inside the Container */}
          <Route path="/*" element={
            <Contianer isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle}/>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;