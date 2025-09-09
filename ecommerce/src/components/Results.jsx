import React from 'react'
import '../styles/results.css'
import Card from './Card'

function Results() {
    return (
        <section className="result-section">
            <div className="result-header">
                <div className="result-head-tp">
                    <p className="result">
                        result <span>0</span>
                    </p>
                    <p className="result-sorte">
                        <span>sort by</span>
                        <span className="text">Color:</span>
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
                <Card />
            </div>
        </section>
    )
}

export default Results