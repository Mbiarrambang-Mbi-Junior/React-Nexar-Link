import React from 'react';
import ImgURL from '/src/assets/Gemini_Generated_Image_i0qs31i0qs31i0qs-removebg-preview.png'
import { BsCheckCircleFill, BsLightningFill, BsCpuFill } from 'react-icons/bs';

function AboutUs() {
    return (
        <section className='aboutus py-20 px-4 sm:px-10 lg:px-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto'>

                {/* --- Section Header --- */}
                <header className='text-center mb-16'>
                    
                    {/* The line is visually more impactful under the H2 */}
                    <p className='text-teal-600 dark:text-teal-400 font-semibold text-sm uppercase tracking-widest'>
                        Our Mission
                    </p>
                    
                    {/* FIX: Moved pseudo-class to H2 and fixed the content string quotation */}
                    <h2 className='
                        text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-2
                        relative after:content-[""] after:absolute after:bottom-[-8px] 
                        after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 
                        after:bg-teal-600 after:dark:bg-teal-400
                    '>
                        Connecting Tomorrow, Today.
                    </h2>
                    
                    <p className='mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
                        Nexar|Link is dedicated to awakening your home by providing the most reliable, secure, and intuitive platform for managing all your smart devices.
                    </p>
                </header>

                {/* --- Content Grid: Image & Core Values --- */}
                <div className='flex flex-col lg:flex-row gap-12 items-center'>

                    {/* Left Side: Image/Visual (Replace ImageURL with your own asset) */}
                    <div className='lg:w-1/2'>
                        <div className='rounded-xl shadow-2xl overflow-hidden'>
                            <img
                                src={ImgURL}
                                alt="Modern IoT Dashboard Interface"
                                className='w-full h-auto object-cover'
                            />
                        </div>
                    </div>

                    {/* Right Side: Core Values / Text Content */}
                    <div className='lg:w-1/2 space-y-8'>
                        <h3 className='text-3xl font-bold text-gray-900 dark:text-white'>
                            Simplifying the Smart Home Experience
                        </h3>
                        <p className='text-gray-600 dark:text-gray-300 text-lg leading-relaxed'>
                            We believe that smart technology should simplify life, not complicate it. Our platform is engineered to offer **unified control**, **powerful automation**, and **real-time data analytics**, all housed under a military-grade security umbrella.
                        </p>

                        {/* Feature Points */}
                        <ul className='space-y-4'>
                            <li className='flex items-start'>
                                <BsCheckCircleFill className='text-teal-500 mt-1 mr-3 flex-shrink-0' size={24} />
                                <div>
                                    <h4 className='text-xl font-semibold text-gray-900 dark:text-white'>Unified Control</h4>
                                    <p className='text-gray-600 dark:text-gray-400'>One platform to manage devices from any manufacturer.</p>
                                </div>
                            </li>
                            <li className='flex items-start'>
                                <BsLightningFill className='text-teal-500 mt-1 mr-3 flex-shrink-0' size={24} />
                                <div>
                                    <h4 className='text-xl font-semibold text-gray-900 dark:text-white'>Robust Security</h4>
                                    <p className='text-gray-600 dark:text-gray-400'>End-to-end encryption to keep your home data safe and private.</p>
                                </div>
                            </li>
                            <li className='flex items-start'>
                                <BsCpuFill className='text-teal-500 mt-1 mr-3 flex-shrink-0' size={24} />
                                <div>
                                    <h4 className='text-xl font-semibold text-gray-900 dark:text-white'>Seamless Scalability</h4>
                                    <p className='text-gray-600 dark:text-gray-400'>Grow from a single smart device to a fully automated building effortlessly.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- CTA/Call to Action Footer --- */}
                <div className='mt-20 text-center'>
                    <a
                        href="/signin"
                        className='inline-block px-10 py-4 text-lg font-bold rounded-lg shadow-lg 
                                 bg-teal-600 text-white hover:bg-teal-700 transition duration-300'
                    >
                        Start Your Free Trial
                    </a>
                </div>

            </div>
        </section >
    );
}

export default AboutUs;