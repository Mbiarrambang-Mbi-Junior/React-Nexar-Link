// Header.js
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="product-header">
      <span className="back-arrow">←</span>
      <h1 className="product-title">G502</h1>
      <span className="menu-icon">⋮</span>
    </div>
  );
}

export default Header;