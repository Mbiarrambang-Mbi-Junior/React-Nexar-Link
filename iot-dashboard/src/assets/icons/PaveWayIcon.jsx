import React from 'react';

// 1. Import the SVG file (update path as needed)
import pavewayIcon from '/src/assets/PaveWayIcon.svg'; 

function PaveWayIcon() {
  return (
    <div className="flex items-center space-x-2">
      {/* 2. Use the SVG in an <img> tag */}
      <img 
        src={pavewayIcon} 
        alt="PaveWay Group Icon" 
        className="w-8 h-8"
      />
    </div>
  );
}

export default PaveWayIcon;