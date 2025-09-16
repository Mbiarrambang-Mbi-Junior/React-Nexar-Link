// src/components/TopRankingSlider.jsx
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import products from '../utils/top.json'; // Or your specific data source

const TopRankingSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    // Use the first product from your data for this section
    const hotSellingProduct = products[0];
    if (!hotSellingProduct) {
        return null;
    }

    // Settings for the main image slider
    const mainSliderSettings = {
        asNavFor: nav2,
        ref: slider1,
        arrows: true,
        dots: false,
        fade: true,
    };

    // Settings for the thumbnail slider
    const thumbnailSliderSettings = {
        asNavFor: nav1,
        ref: slider2,
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: true,
        dots: false,
    };

    return (
        <div className="rounded-lg p-4 shadow-md">
            <div className="flex align-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Top ranking</h3>
                <a href="#" className="text-sm text-blue-500 hover:underline">View more</a>
            </div>

            <p className="text-sm text-gray-700 font-semibold mb-1">Hot selling</p>
            <p className="text-sm text-gray-500 mb-4">{hotSellingProduct.name}</p>

            {/* Main Image Slider */}
            <div className="relative mb-2">
                <Slider {...mainSliderSettings}>
                    {hotSellingProduct.images.map((img, index) => (
                        <div key={index}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-[300px] h-[500px] object-cover rounded-md"
                            />
                        </div>
                    ))}
                </Slider>
                {/* Rating Badge */}
                <div className="relative top-2 left-2 bg-black bg-opacity-50 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {hotSellingProduct.rating}
                </div>
            </div>

            {/* Thumbnail Gallery Slider */}

            <Slider {...thumbnailSliderSettings}>
                <div className="thumnail-gallery flex justify-center items-center">
                {hotSellingProduct.images.map((img, index) => (
                    <div key={index} className="p-1">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-[150px] h-[150px] object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500 transition-colors"
                        />
                    </div>
                ))}
                </div>
            </Slider>


        </div>
    );
};

export default TopRankingSlider;