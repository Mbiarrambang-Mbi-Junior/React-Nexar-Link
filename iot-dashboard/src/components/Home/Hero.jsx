import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight, BsGithub, BsTrophyFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ImageURL from '/src/assets/5 terrific Home Assistant dashboards you can deploy today.jpeg'

// Add isDarkMode and handletheme to props
function Hero({ isDarkMode, handletheme }) {
    const navigate = useNavigate();

    // ❌ REMOVED: navigate('/signup'); 
    // This line caused an immediate redirect on every render.

    // ✅ FIXED: Declare the function using 'const'
    const handleGetStarted = () => {
        console.log("Attempting to navigate to /signup");
        navigate('/signup'); // This runs ONLY when the button is clicked
    }

    return (
        <div className='hero flex flex-col h-screen overflow-hidden lg:flex-row pt-30 pb-20 px-4 sm:px-10 lg:px-20 justify-between items-center bg-[#049c63] text-white z-0'>

            {/* Hero Message (Left Side) */}
            <div className="hero-message flex flex-col justify-center items-start max-w-xl lg:w-1/2 pr-0 lg:pr-10 mb-10 lg:mb-0">
                {/* Title */}
                <h1 className="hero-tittle text-4xl sm:text-5xl font-extrabold">
                    Welcome to Nexar|Link: Awaken your home
                </h1>
                {/* Description */}
                <p className="hero-description text-lg mb-8 text-teal-100">
                    Take control of your home from anywhere. Our web-based platform lets you effortlessly manage all your smart devices, automate routines, and monitor your energy usage with a beautiful, intuitive interface. Simplify your life with true home intelligence.
                </p>

                {/* Button */}
                    <button type='button'
                        onClick={handleGetStarted} // Triggers the navigation function
                        className='py-3 px-8 mb-4 rounded-lg bg-white text-teal-600 flex items-center gap-2 hover:scale-105 transition-transform duration-200 font-semibold'
                    >
                        Get Started <BsArrowRight />
                    </button>

                {/* Info Block */}
                <div className="rounded-full py-4 px-6 flex items-center gap-4 w-full max-w-md bg-teal-700/50">

                    <div className="hero-icons flex gap-4 text-teal-200">
                        <BsTrophyFill className='icon' size={30} />
                        <BsGithub className='icon' size={30} />
                    </div>

                    <div className="icon-text flex flex-col text-sm font-medium">
                        <span className='text-white'>All Devices Online</span>
                        <span className='text-teal-200'>Tested and rated</span>
                    </div>
                </div>
            </div>

            {/* Hero Image (Right Side) */}
            <div className="hero-image lg:w-1/2 flex justify-center">
                <img
                    src={ImageURL}
                    alt="NexarLink IoT Platform Demo"
                    className="rounded-xl shadow-2xl w-100 h-200 max-w-lg"
                />
            </div>
        </div>
    )
}

export default Hero;