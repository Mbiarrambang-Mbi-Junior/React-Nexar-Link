// Game.jsx
import React, { useState } from 'react';
import Joystick from './Joystick'; // Import the Joystick component
import '../App.css'; // We'll create this CSS file for the ball and game area

const Game = () => {
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  const handleJoystickMove = (joystickPosition) => {
    // Map the joystick's position to the ball's position
    // You might need to adjust the sensitivity (e.g., multiply by a factor)
    setBallPosition({
      x: joystickPosition.x,
      y: joystickPosition.y,
    });
  };

  return (
    <div className="game-area">
      <div
        className="ball"
        style={{ transform: `translate(${ballPosition.x}px, ${ballPosition.y}px)` }}
      ></div>
      <Joystick onMove={handleJoystickMove} />
    </div>
  );
};

export default Game;