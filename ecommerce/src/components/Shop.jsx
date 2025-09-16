import React from 'react';
import Filter from './Filter';
import Results from './Results';

function Shop() {
  return (
    <section className="w-full bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr] gap-8">
        {/*
          - grid-cols-1: Stacks content vertically on small screens.
          - md:grid-cols-[280px_1fr]: On medium screens, a two-column grid with a fixed-width filter column.
          - lg:grid-cols-[300px_1fr]: On large screens, the filter column is slightly wider.
          - gap-8: Adds spacing between the two columns.
        */}
        <div className="filter-wrapper">
          <Filter />
        </div>
        <div className="results-wrapper">
          <Results />
        </div>
      </div>
    </section>
  );
}

export default Shop;