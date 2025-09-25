import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../models/project.css';

export default function Project({ isDarkMode }) {
    return (
        <>
            <section className={`services-section ${isDarkMode ? 'bg-white' : 'bg-[#191854]'}`} id="services">
                <div className="section-header">
                    <h2 className="section-title">services</h2>
                </div>
                <div className="services-grid">
                    {/* This link remains a RouterLink for internal navigation */}
                    <RouterLink to="/projectsList" target="_blank" rel="noopener noreferrer" className="project-card">
                        <div className="project-icon">
                            <i className="uil uil-briefcase-alt"></i>
                        </div>
                        <h3 className="project-title">projects</h3>
                        <span className="project-info">15+ Available</span>
                    </RouterLink>
                    {/* This link now uses an <a> tag to open a new tab */}
                    <RouterLink to="https://to-my-custom-react-website.com" target="_blank" rel="noopener noreferrer" className="project-card">
                        <div className="project-icon">
                            <i className="uil uil-wrench"></i>
                        </div>
                        <h3 className="project-title">Tools</h3>
                        <span className="project-info">Unavailable</span>
                    </RouterLink>
                    <RouterLink to="http://localhost:5174/" target="_blank" rel="noopener noreferrer" className="project-card">
                        <div className="project-icon">
                            <i className="uil uil-shop"></i>
                        </div>
                        <h3 className="project-title">Shop</h3>
                        <span className="project-info">Available</span>
                    </RouterLink>
                </div>
            </section>
        </>
    );
}