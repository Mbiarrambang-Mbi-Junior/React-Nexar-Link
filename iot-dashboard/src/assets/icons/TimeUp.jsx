import React from 'react';

// 1. Import the SVG file (update path as needed)
import timeup from '/src/assets/TimeUp.svg'; 

function TimeUp() {
  return (
    <div className="flex items-center space-x-2">
      {/* 2. Use the SVG in an <img> tag */}
      <img 
        src={timeup} 
        alt="TimeUp Icon" 
        className="w-8 h-8"
      />
    </div>
  );
}

export default TimeUp;