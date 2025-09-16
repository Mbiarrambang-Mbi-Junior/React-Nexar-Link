import React from 'react';
import Card from './Card';
import products from '../utils/product'; // Assuming this file exports your products array

function Results() {
    const productsToDisplay = products;

    return (
        <section className="result-container  w-full p-4 rounded-lg shadow-md">
            <div className="result-header mb-[20px] border-b-[1px] border-gray-300 py-2">
                <div className="result-head-tp flex justify-between items-center">
                    <p className="result">
                        result <span>{productsToDisplay.length}</span>
                    </p>
                    <p className="result-sorte">
                        <span className="text">sort by:</span>
                        <select id="color-select">
                            <option value="">-- Select a Color --</option>
                            <option> A-z</option>
                            <option> Z-A</option>
                        </select>
                    </p>
                </div>
                <div className="result-head-bt flex justify-between items-center">
                    <div className="active-filter">
                        <p>active filter</p>
                    </div>
                    <div className="current-filter">
                        <p className="text-white bg-teal-500 p-1 rounded-full text-xs">current filter</p>
                    </div>
                    <div className="clear-filter">
                        clear
                    </div>
                </div>
            </div>
            <div className="h-[500px] result-content grid grid-cols-4 gap-4 overflow-y-scroll scrollbar-hide">
                {productsToDisplay.map((product) => (
                    <Card key={product.id} product={product} className="w-[250px]" />
                ))}
            </div>
        </section>
    );
}

export default Results;