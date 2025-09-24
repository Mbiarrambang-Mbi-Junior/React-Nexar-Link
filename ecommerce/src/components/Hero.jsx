import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

function Hero() {
    const navigate = useNavigate();
    const [heroContent, setHeroContent] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    // Fetch data from the API and set up the hero slider
    useEffect(() => {
        const fetchHeroContent = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=5');
                if (!response.ok) {
                    throw new Error('Failed to fetch hero products');
                }
                const data = await response.json();
                
                // Map the API data to the expected format
                const formattedContent = data.map(product => ({
                    productId: product.id,
                    heading: product.title,
                    tagline: product.description,
                    image: product.image,
                    alt: product.title
                }));

                setHeroContent(formattedContent);
            } catch (error) {
                console.error("Error fetching hero content:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeroContent();
    }, []);

    // Set up the auto-sliding effect after content is loaded
    useEffect(() => {
        if (heroContent.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [heroContent.length]);

    if (loading) {
        return <section className="bg-teal-600 min-h-screen flex items-center justify-center text-white text-xl font-medium">Loading hero content...</section>;
    }

    if (heroContent.length === 0) {
        return <section className="bg-teal-600 min-h-screen flex items-center justify-center text-white text-xl font-medium">No hero content available.</section>;
    }

    const currentContent = heroContent[currentIndex];

    const handleShopNow = () => {
        navigate(`/cartdetails/${currentContent.productId}`);
    };

    return (
        <section className="pt-[100px] bg-teal-600 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
                <div className="hero-text flex flex-col items-center md:items-start text-center md:text-left transition-opacity duration-700 ease-in-out">
                    <h1 className="text-4xl md:text-6xl text-white lg:text-7xl font-bold mb-4">
                        {currentContent.heading}
                    </h1>
                    <p className="text-lg md:text-xl text-white text-gray-400 mb-6 max-w-lg">
                        {currentContent.tagline}
                    </p>
                    <div className="hero-btn">
                        <button
                            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-[10px] flex items-center gap-2 transition-transform duration-300 transform hover:scale-105"
                            onClick={handleShopNow}
                        >
                            Shop Now <BsArrowRight size={20} />
                        </button>
                    </div>
                    <div className="dot-container flex gap-2 mt-8">
                        {heroContent.map((_, index) => (
                            <div
                                key={index}
                                className={`dot w-3 h-3 rounded-full transition-colors  cursor-pointer duration-300 ${
                                    index === currentIndex ? 'bg-orange-400' : 'bg-gray-600'
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="hero-image-container flex items-center justify-center transition-opacity duration-700 ease-in-out mt-8 md:mt-0">
                    <img
                        src={currentContent.image}
                        alt={currentContent.alt}
                        className="w-[300px] h-[300px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;