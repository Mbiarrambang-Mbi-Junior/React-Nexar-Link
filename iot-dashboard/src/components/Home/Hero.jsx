import React from 'react';
import { BsArrowRight, BsGithub, BsTrophyFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ImageURL from '/src/assets/5 terrific Home Assistant dashboards you can deploy today.jpeg'

// Add isDarkMode and handletheme to props
function Hero({ isDarkMode, handletheme }) { 
    return (
        <div className='hero flex flex-col h-screen overflow-hidden lg:flex-row pt-30 pb-20 px-4 sm:px-10 lg:px-20 justify-between items-center bg-teal-600 text-white'>
            
            {/* Hero Message (Left Side) */}
            <div className="hero-message flex flex-col justify-center items-start max-w-xl lg:w-1/2 pr-0 lg:pr-10 mb-10 lg:mb-0">
                {/* Title */}
                <h1 className="hero-tittle text-4xl sm:text-5xl font-extrabold">
                    Welcome to Nexar|Link: Awaken your home
                </h1>
                
                {/* Description */}
                <p className="hero-description text-lg mb-8 text-teal-100">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, suscipit commodi minima voluptatum id, amet voluptatibus quia inventore quod vitae maiores porro adipisci assumenda doloremque optio ipsa laboriosam dignissimos. Beatae.
                </p>
                
                {/* Button */}
                <div className="mb-8">
                    {/* FIX 5: Styled button... */}
                    <Link
                        to='/signup'
                        className='py-3 px-8 text-lg font-bold rounded-lg shadow-lg bg-white text-teal-600 hover:bg-teal-50 hover:scale-[1.03] transition duration-300 flex items-center gap-2'
                    >
                        Get Started <BsArrowRight />
                    </Link>
                </div>

                {/* Info Block */}
                <div className="rounded-full py-4 px-6 flex items-center gap-4 w-full max-w-md bg-teal-700/50">
                    
                    <div className="hero-icons flex gap-4 text-teal-200">
                        <BsTrophyFill className='icon' size={30} />
                        <BsGithub className='icon' size={30} />
                    </div>
                    
                    <div className="icon-text flex flex-col text-sm font-medium">
                        <span className='text-white'>Lorem ipsum dolor sit amet.</span>
                        <span className='text-teal-200'>Quo, sit voluptatem!</span>
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