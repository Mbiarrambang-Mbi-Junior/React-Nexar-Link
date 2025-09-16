// src/components/Discover.jsx
import React from 'react';
import Slider from 'react-slick';
import products from '../utils/product.json';
import Category from './Category';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const Discover = () => {

    var settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    };

    var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    };


    return (
        <section className="discover-section mx-auto p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Discover your next business opportunity
            </h2>

            {/* Main container for the three sections */}
            <div className="discover-container flex justify-between items-center gap-4">
                {/* Trending Section */}
                <div className="flex-1 bg-gray-100 h-[550px] rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Trending</h3>
                        <a href="#" className="text-sm text-blue-500 hover:underline">View more</a>
                    </div>
                    <div className="flex flex-col justify-center">
                        {/* Main container for the large image and arrows */}
                        <div className="main-img relative bg-red-100 h-[400px] flex justify-center items-center rounded-xl">
                            {/* The main product image */}
                            <img
                                src="/src/assets/product_design-removebg-preview.png"
                                alt="product"
                                className="w-[200px] rounded-md hover:scale-105 duration-300 hover:border-2 border-orange-500"
                            />

                            {/* Left Arrow Button */}
                            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
                                <BsArrowLeft className="text-gray-800 text-xl hover:cursor-pointer" />
                            </button>

                            {/* Right Arrow Button */}
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
                                <BsArrowRight className="text-gray-800 text-xl hover:cursor-pointer hover:scale-105 duration-300" />
                            </button>
                        </div>

                        {/* Small images (thumbnails) */}
                        <div className="small-img flex justify-center items-center mt-4 gap-4">
                            <img
                                src="/src/assets/product_design-removebg-preview.png"
                                alt="product"
                                className="w-[50px] h-auto rounded-md hover:scale-105 duration-300 hover:border-2 border-orange-500"
                            />
                            <img
                                src="/src/assets/product_design-removebg-preview.png"
                                alt="product"
                                className="w-[50px] h-auto rounded-md hover:scale-105 duration-300 hover:border-2 border-orange-500"
                            />
                            <img
                                src="/src/assets/product_design-removebg-preview.png"
                                alt="product"
                                className="w-[50px] h-auto rounded-md hover:scale-105 duration-300 hover:border-2 border-orange-500"
                            />
                            <img
                                src="/src/assets/product_design-removebg-preview.png"
                                alt="product"
                                className="w-[50px] h-auto rounded-md hover:scale-105 duration-300 hover:border-2 border-orange-500"
                            />
                        </div>
                    </div>

                </div>
                {/* New Arrivals Section */}
                <div className="flex-1 bg-gray-100 rounded-lg h-[550px] p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">New arrivals</h3>
                        <a href="#" className="text-sm text-blue-500 hover:underline">View more</a>
                    </div>
                    <div className="">
                        <div className="new-img grid grid-cols-2 grid-rows-2 gap-4 p-4">
                            <div className="imge bg-red-100 rounded-xl  gap-4 mt-4 flex justify-center items-center">
                                <img
                                    src="/src/assets/product_design-removebg-preview.png"
                                    alt="product"
                                    className="w-[100px] h-auto rounded-md"
                                />
                            </div>

                            <div className="imge bg-red-100 rounded-xl  gap-4 mt-4 flex justify-center items-center">
                                <img
                                    src="/src/assets/product_design-removebg-preview.png"
                                    alt="product"
                                    className="w-[100px] h-auto rounded-md"
                                />
                            </div>
                            <div className="imge bg-red-100 rounded-xl  gap-4 mt-4 flex justify-center items-center">
                                <img
                                    src="/src/assets/product_design-removebg-preview.png"
                                    alt="product"
                                    className="w-[100px] h-auto rounded-md"
                                />
                            </div>
                            <div className="imge bg-red-100 rounded-xl  gap-4 mt-4 flex justify-center items-center">
                                <img
                                    src="/src/assets/product_design-removebg-preview.png"
                                    alt="product"
                                    className="w-[100px] h-auto rounded-md"
                                />
                            </div>
                        </div>

                        <div className="bottom-img flex bg-red-100 rounded-xl  gap-4 mt-4">
                            <div className="inner-img bg-blue-100 rounded-md p-4 m-4">
                                <img src="/src/assets/product_design-removebg-preview.png" alt="" className="w-[100px] h-auto rounded-md" />
                            </div>
                            <div className="text-img">
                                <h4>name</h4>
                                <p>description</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Top Deals Section */}
                <div className="flex-1 bg-gray-100 h-[550px] rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Top deals</h3>
                        <a href="#" className="text-sm text-blue-500 hover:underline">View more</a>
                    </div>
                    {/* Add content for Top Deals here */}
                    <div className="h-40 bg-gray-200 rounded-md flex items-center gap-4 h-[100px]">
                        <div className="s-inner-img">
                            <img src="/src/assets/product_design-removebg-preview.png" alt="" className="w-[100px] h-auto rounded-md" />
                        </div>
                        <div className="img-text">
                            <p>name</p>
                        </div>
                    </div>
                    <div className="h-40 mt-4 bg-gray-200 rounded-md h-[350px]">
                        <div className="text-im">
                            name
                        </div>
                        <div className="im">
                            <img src="/src/assets/product_design-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default Discover;