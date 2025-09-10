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
                            <input type="checkbox" id="electronics" /><label htmlFor="electronics">electronics</label>
                        </div>
                        <div className="category">
                            <input type="checkbox" id="male" /><label htmlFor="male">male</label>
                        </div>
                        <div className="category">
                            <input type="checkbox" id="female" /><label htmlFor="female">female</label>
                        </div>
                        <div className="category">
                            <input type="checkbox" id="kids" /><label htmlFor="kids">kids</label>
                        </div>
                        <div className="category">
                            <input type="checkbox" id="furniture" /><label htmlFor="furniture">furniture</label>
                        </div>
                    </div>
                    <div className="filter-price">
                        <div className="price-text">
                            <h4 className="text">
                                by price
                            </h4>
                        </div>
                        <div className="price-input">
                            <label htmlFor="price-input">price</label>
                            <input type="text" id="price-input" />
                        </div>
                    </div>
                    <div className="filter-stock">
                        <h4 className="stock-text">
                            by availability
                        </h4>
                        <div className="category">
                            <input type="checkbox" id="instock" /><label htmlFor="instock">instock</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter