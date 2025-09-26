// src/components/Registers.jsx

import React from 'react';

const Registers = ({ registers }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h3>CPU Registers</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Register</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Value (Decimal)</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Value (Binary)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(registers).map(([regName, value], index) => (
            <tr key={index}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{regName}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{value}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{value.toString(2).padStart(8, '0')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Registers;