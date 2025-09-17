import React from 'react';

function Filter() {
  return (
    // The main container for the filter panel
    <section className="flex gap-4 justify-center items-center w-full h-fit md:top-4 bg-white rounded-lg shadow-sm p-2">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Filter Options
        </h3>
      <div className="flex gap-4 flex-wrap">
        

        {/* Filter by Category section */}
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2 uppercase">
            by category
          </h4>
          <div className="flex  gap-2">
            <label htmlFor="electronics" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="electronics" className="accent-orange-500" />
              <span className="text-base text-gray-700">electronics</span>
            </label>
            <label htmlFor="male" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="male" className="accent-orange-500" />
              <span className="text-base text-gray-700">male</span>
            </label>
            <label htmlFor="female" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="female" className="accent-orange-500" />
              <span className="text-base text-gray-700">female</span>
            </label>
            <label htmlFor="kids" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="kids" className="accent-orange-500" />
              <span className="text-base text-gray-700">kids</span>
            </label>
            <label htmlFor="furniture" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="furniture" className="accent-orange-500" />
              <span className="text-base text-gray-700">furniture</span>
            </label>
          </div>
        </div>

        {/* Filter by Price section */}
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2 uppercase">
            by price
          </h4>
          <div className='flex gap-2'>
            <label htmlFor="price-input" className="block text-sm text-gray-700 font-medium mb-1">
              price range
            </label>
            <input 
              type="text" 
              id="price-input" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-300" 
              placeholder="e.g., $10 - $100"
            />
          </div>
        </div>

        {/* Filter by Availability section */}
        <div>
          <h4 className="text-lg font-medium mb-2 uppercase">
            by availability
          </h4>
          <label htmlFor="instock" className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id="instock" className="accent-orange-500" />
            <span className="text-base text-gray-700">instock</span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Filter;