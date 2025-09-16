import React from 'react';
import Filter from './Filter';
import Results from './Results';

function Shop() {
  return (
    <section className="shop-section w-full min-h-screen"> {/* Added min-h-screen and some padding */}
    
      <div className="shop-content grid grid-cols-[minmax(200px,280px)_1fr] gap-8 p-4 bg-white rounded-xl shadow-lg">
        {/*
          grid-cols-[minmax(200px,280px)_1fr]:
          - Filter column: Will be at least 200px, max 280px wide.
          - Results column: Takes up all remaining available space.
          gap-8: Adds spacing between the two columns.
          p-4: Inner padding for the white shop-content box.
          bg-white rounded-xl shadow-lg: Styling for the main content area.
          max-w-7xl mx-auto: Centers the shop content and limits its max width.
        */}
        <div className="filter-wrapper  p-6 rounded-lg shadow-sm"> {/* Added styling for filter itself */}
          <Filter />
        </div>
        
        <div className="results-wrapper"> {/* Potentially add padding here or within Results component */}
          <Results />
        </div>
      </div>
    </section>
  );
}

export default Shop;