import React from 'react';


function Filter() {
  return (
    // The main container for the filter panel
    <section className="p-4 w-full h-fit sticky top-[20px]">
      {/*
        - p-4: Adds padding inside the filter container.
        - bg-white: Sets a white background.
        - rounded-lg: Gives the corners a rounded look.
        - shadow-sm: Adds a subtle box shadow.
        - w-full: Ensures it takes the full width of its parent grid column.
        - h-fit: Makes its height fit its content.
      */}
      
      <div>
        <h3 className="text-2xl font-semibold mb-6">
          Filter options
        </h3>

        {/* Filter by Category section */}
        <div className="mb-6">
          <h4 className="text-xl font-medium mb-2">
            by category
          </h4>
          <div className="flex flex-col gap-2"> {/* Changed to flex-col for vertical stacking */}
            <label htmlFor="electronics" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="electronics" className="accent-orange-500" />
              <span className="text-base">electronics</span>
            </label>
            <label htmlFor="male" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="male" className="accent-orange-500" />
              <span className="text-base">male</span>
            </label>
            <label htmlFor="female" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="female" className="accent-orange-500" />
              <span className="text-base">female</span>
            </label>
            <label htmlFor="kids" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="kids" className="accent-orange-500" />
              <span className="text-base">kids</span>
            </label>
            <label htmlFor="furniture" className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="furniture" className="accent-orange-500" />
              <span className="text-base">furniture</span>
            </label>
          </div>
        </div>

        {/* Filter by Price section */}
        <div className="mb-6">
          <h4 className="text-xl font-medium mb-2">
            by price
          </h4>
          <div>
            <label htmlFor="price-input" className="block text-sm text-gray-700 font-medium mb-1">
              price
            </label>
            <input 
              type="text" 
              id="price-input" 
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-300" 
              placeholder="e.g., $10 - $100"
            />
          </div>
        </div>

        {/* Filter by Availability section */}
        <div>
          <h4 className="text-xl font-medium mb-2">
            by availability
          </h4>
          <label htmlFor="instock" className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id="instock" className="accent-orange-500" />
            <span className="text-base">instock</span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Filter;