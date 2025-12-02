import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Attendance from './components/Attendance';

function App() {
  // 1. STATE LIFTED UP HERE
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Example theme toggle logic
  const handleThemeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Set the theme class on the body element
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={
              <Attendance
                isDarkMode={isDarkMode}
                handleThemeToggle={handleThemeToggle}
              />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
