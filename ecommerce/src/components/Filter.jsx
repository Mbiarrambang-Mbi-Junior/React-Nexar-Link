import React from 'react'
import '../styles/filter.css'

function Filter() {
    return (
        <section className="filter-container">

            <div className="shop-filter">
                <h3 className="filter-text">
                    Filter options
                </h3>
                <div className="filter-options">
                    <div className="filter-category">
                        <h4 className="category-text">
                            by category
                        </h4>
                        <div className="category">
                            <input type="checkbox" /><label >electronics</label>
                        </div>
                        <div className="category">
                            <input type="checkbox" /><label>male</label>
                        </div>
                        <div className="category">
                            <input type="checkbox" /><label>female</label>
                        </div>
                        <div className="category">
                            <input type="checkbox" /><label>kids</label>
                        </div>
                        <div className="category">
                            <input type="checkbox" /><label>furniture</label>
                        </div>
                    </div>
                    <div className="filter-price">
                        <div className="price-text">
                            <h4 className="text">
                                by price
                            </h4>
                        </div>

                        <div className="price-input">
                            <label >price<input type="text" /></label>
                        </div>

                    </div>

                    <div className="filter-stock">
                        <h4 className="stock-text">
                            by  availability
                        </h4>
                        <label ><input type="checkbox" />instock</label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter