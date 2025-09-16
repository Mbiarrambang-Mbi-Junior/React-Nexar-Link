import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function SearchResults({ searchQuery }) {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all products from the API once on component mount
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setAllProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllProducts();
    }, []);

    // Filter products whenever the search query or product list changes
    useEffect(() => {
        if (searchQuery) {
            const results = allProducts.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]); // Clear results if the search query is empty
        }
    }, [searchQuery, allProducts]);

    if (loading) {
        return <div className="text-center p-8 text-xl font-medium">Loading products...</div>;
    }

    return (
        <section className="p-8 bg-gray-100 min-h-screen">
            <div className="link flex gap-2 item-center text-gray-600 mb-6">
                <p className='p-4'>Back to shop</p>
                <Link to={"/"} className='shadow-md p-4 rounded-xl hover:scale-105 transition-transform duration-300'>Home</Link>
                <span className='p-4'>/</span>
                <Link to={"/shop"} className='shadow-md p-4 rounded-xl hover:scale-105 transition-transform duration-300'>Shop</Link>
            </div>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Search Results for "{searchQuery}"
                </h2>
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-lg text-gray-500">
                        No products found. Try a different search term.
                    </p>
                )}
            </div>
        </section>
    );
}

export default SearchResults;