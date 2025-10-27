import React from 'react';
import '../models/project.css';
import { Link } from 'react-router-dom';

export default function Project() {
    return (
        <>
            <section className="section projects-section" id="projects">
                <div className="section-header">
                    <h2 className="section-title">Projects</h2>
                </div>
                <div className="projects-grid">
                    <Link to="/projectlist" className="project-card " target="_blank">
                        <div className="project-icon">
                            <i className="uil uil-briefcase-alt"></i>
                        </div>
                        <h3 className="project-title">Projects</h3>
                        <span className="project-info">15+ Available</span>
                    </Link>
                    <Link to="#" className="project-card">
                        <div className="project-icon">
                            <i className="uil uil-wrench"></i>
                        </div>
                        <h3 className="project-title">Tools</h3>
                        <span className="project-info">Unavailable</span>
                    </Link>
                    <Link to="#" className="project-card">
                        <div className="project-icon">
                            <i className="uil uil-shop"></i>
                        </div>
                        <h3 className="project-title">Shop</h3>
                        <span className="project-info">Unavailable</span>
                    </Link>
                </div>
            </section>
        </>
    );
}