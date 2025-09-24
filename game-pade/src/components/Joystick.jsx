import '../App.css';
import React, { useState, useRef, useEffect } from 'react';

const Joystick = ({ onMove }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setPosition({ x: 0, y: 0 });
    onMove({ x: 0, y: 0 }); // Notify parent of reset
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const container = containerRef.current.getBoundingClientRect();
    const centerX = container.width / 2;
    const centerY = container.height / 2;

    let newX = e.clientX - container.left - centerX;
    let newY = e.clientY - container.top - centerY;

    const distance = Math.sqrt(newX * newX + newY * newY);
    const maxDistance = centerX * 0.7; // Limit to 70% of radius for visual padding

    if (distance > maxDistance) {
      const angle = Math.atan2(newY, newX);
      newX = maxDistance * Math.cos(angle);
      newY = maxDistance * Math.sin(angle);
    }
    
    const joystickPosition = { x: newX, y: newY };
    setPosition(joystickPosition);
    onMove(joystickPosition);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onMove]);

  return (
    <div className="joystick-controller-outer">
      <div
        className="joystick-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
      >
        <div
          className="joystick-handle"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div>
      </div>
    </div>
  );
};

export default Joystick;