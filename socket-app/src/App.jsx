import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Connect to the Node.js server

function App() {
  const [potentiometerValue, setPotentiometerValue] = useState(0);

  useEffect(() => {
    socket.on('potentiometerValue', (data) => {
      setPotentiometerValue(data);
    });

    return () => {
      socket.off('potentiometerValue');
    };
  }, []);

  return (
    <div style={{ width: 200, height: 200, margin: '50px auto' }}>
      <h2>Potentiometer Value</h2>
      <CircularProgressbar
        value={potentiometerValue}
        text={`${potentiometerValue}°`}
        minValue={0}
        maxValue={180}
        styles={buildStyles({
          rotation: 0.5, // Start from the bottom
          strokeLinecap: 'butt',
          pathColor: `rgba(62, 152, 199, ${potentiometerValue / 180})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
}

export default App;