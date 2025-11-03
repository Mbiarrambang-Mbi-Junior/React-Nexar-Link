import React from 'react';
import { Link } from 'react-router-dom';

// 🚀 FIX APPLIED: Accept isDarkMode prop
export default function Project({ isDarkMode }) {
    
    // Define classes for the white card box and the section
    const sectionBg = isDarkMode ? 'bg-gray-900' : 'bg-white';
    const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const titleText = isDarkMode ? 'text-white' : 'text-primary';
    const infoText = isDarkMode ? 'text-gray-400' : 'text-gray-500';

    return (
        <>
            <section className={`section projects-section w-full items-center justify-center flex flex-col ${sectionBg}`} id="projects">
                <div className="section-header">
                    {/* Use conditional text color for the title */}
                    <h2 className={`section-title text-2xl font-bold text-center mb-10 ${titleText}`}>Projects</h2>
                </div>
                <div className="projects-grid flex flex-wrap gap-8 justify-center">
                    
                    {/* 👇 Apply conditional card background */}
                    <Link 
                        to="/projectlist" 
                        className={`project-card ${cardBg} w-96 h-48 p-6 rounded-lg shadow-lg hover:bg-orange-400 transition-colors duration-300 flex flex-col justify-between ${isDarkMode ? 'shadow-gray-700/50' : 'shadow-lg'}`} 
                        target="_blank"
                    >
                        <div className={`project-icon text-3xl mb-2 ${titleText}`}>
                            <i className="uil uil-briefcase-alt"></i>
                        </div>
                        <div>
                            <h3 className={`project-title text-xl font-semibold ${titleText}`}>Projects</h3>
                            <span className={`project-info text-sm ${infoText}`}>15+ Available</span>
                        </div>
                    </Link>
                    
                    {/* 👇 Apply conditional card background */}
                    <Link 
                        to="#" 
                        className={`project-card ${cardBg} w-96 h-48 p-6 rounded-lg shadow-lg hover:bg-orange-400 transition-colors duration-300 flex flex-col justify-between ${isDarkMode ? 'shadow-gray-700/50' : 'shadow-lg'}`}
                    >
                        <div className={`project-icon text-3xl mb-2 ${titleText}`}>
                            <i className="uil uil-wrench"></i>
                        </div>
                        <div>
                            <h3 className={`project-title text-xl font-semibold ${titleText}`}>Tools</h3>
                            <span className={`project-info text-sm ${infoText}`}>Unavailable</span>
                        </div>
                    </Link>
                    
                    {/* 👇 Apply conditional card background */}
                    <Link 
                        to="#" 
                        className={`project-card ${cardBg} w-96 h-48 p-6 rounded-lg shadow-lg hover:bg-orange-400 transition-colors duration-300 flex flex-col justify-between ${isDarkMode ? 'shadow-gray-700/50' : 'shadow-lg'}`}
                    >
                        <div className={`project-icon text-3xl mb-2 ${titleText}`}>
                            <i className="uil uil-shop"></i>
                        </div>
                        <div>
                            <h3 className={`project-title text-xl font-semibold ${titleText}`}>Shop</h3>
                            <span className={`project-info text-sm ${infoText}`}>Unavailable</span>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}