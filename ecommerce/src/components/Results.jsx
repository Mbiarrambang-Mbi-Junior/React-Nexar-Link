import React, { useState, useEffect } from 'react';
import Card from './Card';
// import products from '../utils/product'; // Removed local import

function Results({ searchQuery }) {
    const [products, setProducts] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('');

    // Fetch data from the fake store API when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                setFilterList(data); // Initialize filter list with all products
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // Set loading to false whether the fetch succeeds or fails
            }
        };

        fetchProducts();
    }, []);

    // Filter products based on search query whenever it changes
    useEffect(() => {
        if (searchQuery) {
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilterList(filtered);
        } else {
            setFilterList(products);
        }
    }, [searchQuery, products]);

    const onFilterChange = (e) => {
        const value = e.target.value;
        setSortOrder(value);
        let sortedProducts = [...filterList];

        if (value === 'A-Z') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (value === 'Z-A') {
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        }

        setFilterList(sortedProducts);
    };
    
    const clearFilters = () => {
        setSortOrder('');
        setFilterList(products);
    };

    if (loading) {
        return <div className="text-center p-8 text-xl font-medium">Loading products...</div>;
    }

    return (
        <section className="result-container w-full p-4 rounded-lg shadow-md bg-white">
            <div className="result-header pb-4 mb-4 border-b border-gray-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                    <p className="text-lg text-gray-600 font-medium">
                        Results <span className="text-xl font-bold text-gray-800">{filterList.length}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <span>Sort by:</span>
                        <select
                            onChange={onFilterChange}
                            value={sortOrder}
                            className="py-1 px-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                        >
                            <option value="">-- Select --</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                    <p>Active filters:</p>
                    <div className="flex items-center gap-2">
                        {sortOrder && (
                            <span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs">
                                Sort: {sortOrder}
                            </span>
                        )}
                        {searchQuery && (
                            <span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs">
                                Search: {searchQuery}
                            </span>
                        )}
                    </div>
                    <button onClick={clearFilters} className="text-blue-500 hover:text-blue-700 transition-colors">
                        Clear
                    </button>
                </div>
            </div>
            
            <div className="result-content flex flex-wrap -mx-2 gap-4 justify-center overflow-y-scroll scrolllar-hide max-h-[500px] scrollbar-hide">
                {filterList.map((product) => (
                    <Card key={product.id} product={product} className="w-[calc(50%-1rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)]" />
                ))}
            </div>
        </section>
    );
}

export default Results;