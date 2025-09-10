// In your Results.jsx file

import React from 'react';
import '../styles/results.css';
import Card from './Card';
import products from '../utils/product'; // Assuming this file exports your products array

function Results() {
    const productsToDisplay = products;

    return (
        <section className="result-section">
            <div className="result-header">
                <div className="result-head-tp">
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
                <div className="result-head-bt">
                    <div className="active-filter">
                        <p>active filter</p>
                    </div>
                    <div className="clear-filter">
                        clear
                    </div>
                </div>
            </div>
            <div className="result-content">
                {productsToDisplay.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default Results;