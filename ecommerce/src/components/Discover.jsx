import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const Discover = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [topDeals, setTopDeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

    // Fetch data from the Fake Store API
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch trending and new arrivals
                const productsResponse = await fetch('https://fakestoreapi.com/products?limit=10');
                if (!productsResponse.ok) {
                    throw new Error('Failed to fetch general products');
                }
                const productsData = await productsResponse.json();
                setTrendingProducts(productsData.slice(0, 5)); // Use first 5 for trending slider
                setNewArrivals(productsData.slice(5, 9)); // Use the next 4 for new arrivals

                // Fetch specific top deals
                const topDeal1Response = await fetch('https://fakestoreapi.com/products/1');
                const topDeal2Response = await fetch('https://fakestoreapi.com/products/2');

                const topDeal1 = await topDeal1Response.json();
                const topDeal2 = await topDeal2Response.json();
                setTopDeals([topDeal1, topDeal2]);

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Auto-slide effect for trending section
    useEffect(() => {
        if (trendingProducts.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    (prevIndex + 1) % trendingProducts.length
                );
            }, 3000); // Change image every 3 seconds
            return () => clearInterval(interval);
        }
    }, [trendingProducts]);

    // Update thumbnail group when the main image changes
    useEffect(() => {
        setThumbnailStartIndex(Math.floor(currentIndex / 4) * 4);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % trendingProducts.length
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? trendingProducts.length - 1 : prevIndex - 1
        );
    };

    const handleNextThumbnail = () => {
        setThumbnailStartIndex((prevIndex) =>
            (prevIndex + 4) % trendingProducts.length
        );
    };

    const handlePrevThumbnail = () => {
        setThumbnailStartIndex((prevIndex) => {
            const newIndex = prevIndex - 4;
            return newIndex < 0 ? Math.floor((trendingProducts.length - 1) / 4) * 4 : newIndex;
        });
    };

    const visibleThumbnails = trendingProducts.slice(
        thumbnailStartIndex,
        thumbnailStartIndex + 4
    );

    if (loading) {
        return <div className="text-center p-8 text-xl font-medium">Loading products...</div>;
    }

    return (
        <section className="discover-section mx-auto p-4 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                Discover your next business opportunity
            </h2>

            <div className="discover-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Trending Section */}
                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Trending</h3>
                        <a href="#" className="text-sm text-blue-500 hover:underline">View more</a>
                    </div>
                    <div className="flex flex-col">
                        <div className="relative h-[250px] md:h-[300px] flex justify-center items-center rounded-xl bg-gray-200 overflow-hidden">
                            <img
                                src={trendingProducts[currentIndex]?.image}
                                alt={trendingProducts[currentIndex]?.title}
                                className="w-full h-full object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
                            />
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hidden md:block"
                            >
                                <BsArrowLeft className="text-gray-800 text-xl" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hidden md:block"
                            >
                                <BsArrowRight className="text-gray-800 text-xl" />
                            </button>
                        </div>

                        {/* Small images (thumbnails) */}
                        <div className="small-img flex justify-center items-center mt-4 gap-4">
                            <button onClick={handlePrevThumbnail} className="p-1 rounded-full bg-gray-300 hover:bg-gray-400">
                                <BsArrowLeft className="text-gray-800 text-lg" />
                            </button>
                            <div className="grid grid-cols-4 gap-4 overflow-hidden">
                                {visibleThumbnails.map((product, index) => (
                                    <img
                                        key={product.id}
                                        src={product.image}
                                        alt={product.title}
                                        className={`w-full h-auto object-cover rounded-md cursor-pointer transition-all duration-300 hover:scale-105 ${
                                            (thumbnailStartIndex + index) === currentIndex ? 'border-2 border-orange-500' : 'border-2 border-transparent'
                                        }`}
                                        onClick={() => setCurrentIndex(thumbnailStartIndex + index)}
                                    />
                                ))}
                            </div>
                            <button onClick={handleNextThumbnail} className="p-1 rounded-full bg-gray-300 hover:bg-gray-400">
                                <BsArrowRight className="text-gray-800 text-lg" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* New Arrivals Section */}
                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">New arrivals</h3>
                        <a href="#" className="text-sm text-blue-500 hover:underline">View more</a>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {newArrivals.map((product) => (
                            <div key={product.id} className="rounded-xl flex justify-center items-center bg-gray-200">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-md" />
                            </div>
                        ))}
                    </div>
                    {/* Placeholder for the last item in the New Arrivals section */}
                    <div className="flex bg-gray-200 rounded-xl mt-4 p-4 items-center">
                        <img src={newArrivals[0]?.image} alt={newArrivals[0]?.title} className="w-1/4 h-auto rounded-md object-contain" />
                        <div className="ml-4">
                            <h4 className="font-semibold">{newArrivals[0]?.title}</h4>
                            <p className="text-sm text-gray-500">{newArrivals[0]?.description.substring(0, 50)}...</p>
                        </div>
                    </div>
                </div>

                {/* Top Deals Section */}
                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-black">Top deals</h3>
                        <a href="#" className="text-sm text-blue-500 hover:underline">View more</a>
                    </div>
                    {topDeals.length > 0 && (
                        <>
                            <div className="flex bg-gray-200 rounded-md p-2 h-[100px] mb-4 items-center">
                                <img src={topDeals[0]?.image} alt={topDeals[0]?.title} className="w-1/4 h-auto rounded-md object-contain" />
                                <div className="ml-4">
                                    <h4 className="font-semibold">{topDeals[0]?.title}</h4>
                                    <p className="text-sm text-gray-500">{topDeals[0]?.description.substring(0, 50)}...</p>
                                </div>
                            </div>
                            <div className="bg-gray-200 rounded-md p-4 flex flex-col items-center">
                                <div className="text-center font-semibold mb-2">
                                    {topDeals[1]?.title}
                                </div>
                                <div className="w-full h-64 rounded-md overflow-hidden">
                                    <img src={topDeals[1]?.image} className='w-full h-full object-cover' alt={topDeals[1]?.title} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Discover;