// ProductTabs.js
import React from 'react';
import '../styles/ProductTabs.css';

function ProductTabs({ activeTab, setActiveTab, data }) {
  return (
    <div className="tabs-container">
      <div className="tabs-nav">
        <button
          className={`tab-button ${activeTab === 'specifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('specifications')}
        >
          SPECIFICATIONS
        </button>
        <button
          className={`tab-button ${activeTab === 'support' ? 'active' : ''}`}
          onClick={() => setActiveTab('support')}
        >
          SUPPORT
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'specifications' ? (
          <div>
            <h3>A REBORN HERO</h3>
            <p>{data.specifications}</p>
          </div>
        ) : (
          <div>
            <h3>SUPPORT</h3>
            <p>{data.support}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductTabs;