import React from "react";
import { Routes, Route } from "react-router-dom"; // Add Routes and Route
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "./Home";
import Attendance from "./Attendance";
import Students from "./Students";
import Teachers from "./Teachers";
import Setting from "./Setting";

function Contianer({ isDarkMode, handleThemeToggle }) {
  return (
    // Fixed: Standardized grid layout. Left column 256px (w-64) to match Sidebar
    <div className="grid grid-cols-[256px_1fr] h-screen w-full overflow-hidden">
      <Sidebar />
      
      <main className="flex flex-col h-full overflow-y-auto bg-gray-50">
        <Header isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
        
        {/* The dynamic content changes here based on the URL */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default Contianer;