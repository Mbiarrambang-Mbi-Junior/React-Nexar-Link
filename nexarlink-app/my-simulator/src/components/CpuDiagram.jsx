// A simplified example of an SVG component
import React from 'react';

const CpuDiagram = ({ registers, aluOutput, currentInstruction }) => {
  return (
    <svg width="1000" height="600" viewBox="0 0 1000 600">
      {/* CPU Box */}
      <rect x="50" y="50" width="600" height="500" fill="#9C27B0" opacity="0.2" stroke="white" strokeWidth="2" />
      <text x="300" y="70" fill="white" fontSize="24">CPU</text>

      {/* RAM Box */}
      <rect x="700" y="50" width="250" height="500" fill="#E91E63" opacity="0.2" stroke="white" strokeWidth="2" />
      <text x="800" y="70" fill="white" fontSize="24">RAM</text>

      {/* Example Register 0 */}
      <rect x="100" y="150" width="150" height="50" fill="#26A69A" stroke="white" strokeWidth="1" />
      <text x="110" y="180" fill="black" fontSize="16">Register 0</text>
      <text x="180" y="180" fill="white" fontSize="16">{registers.R0.toString(2).padStart(8, '0')}</text>

      {/* Example Connection Line from Reg 0 to Control Unit */}
      <line x1="175" y1="200" x2="350" y2="350" stroke="gray" strokeWidth="2" />

      {/* Control Unit */}
      <rect x="350" y="300" width="200" height="150" fill="#673AB7" stroke="white" strokeWidth="1" />
      <text x="390" y="370" fill="white" fontSize="20">CONTROL UNIT</text>

      {/* ALU */}
      <path d="M100 350 L50 450 L100 550 L200 550 L250 450 L200 350 Z" fill="#8BC34A" stroke="white" strokeWidth="1" />
      <text x="130" y="450" fill="black" fontSize="20">ALU</text>

      {/* This is where you would map your RAM data to display it */}
      {/* Example RAM cell at address 0 */}
      <rect x="750" y="150" width="150" height="30" fill="darkgray" stroke="white" strokeWidth="1" />
      <text x="760" y="170" fill="white" fontSize="14">0</text>
      <text x="820" y="170" fill="white" fontSize="14">00000000</text>

      {/* Data Bus line */}
      <line x1="650" y1="120" x2="700" y2="120" stroke="darkgray" strokeWidth="3" />
      <text x="660" y="110" fill="gray" fontSize="12">Data Bus</text>

      {/* Display values for interaction */}
      {/* Example of displaying current instruction in Control Unit */}
      <text x="400" y="420" fill="cyan" fontSize="16">{currentInstruction}</text>

    </svg>
  );
};

export default CpuDiagram;