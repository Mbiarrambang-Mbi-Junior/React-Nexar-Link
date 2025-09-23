import React from 'react'
import {FaCode,FaMicrochip,FaDatabase} from 'react-icons/fa'

import '../models/about.css'

export default function About() {
    return (
        <>
            <section className="about-section" id="about">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                </div>
                <div className="about-container">
                    <article className="about-content">
                        <h3 className="about-subtitle">My Introduction</h3>
                        <p>
                            I am well-versed in HTML, CSS, and JavaScript,
                            along with other
                            cutting-edge frameworks and libraries, which
                            allows me to implement
                            interactive features. Additionally, I am an
                            embedded
                            systems engineer with a strong background in IOT
                            and task automation
                        </p>
                        <div className="about-actions">
                            <a href="Curriculum Vitae.docx" download
                                className="btn download-btn">
                                Download CV <i className="uil uil-import"></i>
                            </a>
                        </div>
                    </article>

                    <div className="skills-grid">
                        <div className="skill-category">
                            <h4 className="skill-title flex gap-4">
                                <FaCode />
                                <span>Frontend</span></h4>
                            <ul className="skill-list">
                                <li><span>HTML</span></li>
                                <li><span>CSS</span></li>
                                <li><span>Tailwind</span></li>
                                <li><span>JavaScript</span></li>
                                <li><span>React</span></li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h4 className="skill-title flex gap-4">
                                <FaMicrochip />
                                <span>Embedded Systems</span>
                            </h4>
                            <ul className="skill-list">
                                <li><span>ARM</span></li>
                                <li><span>C</span></li>
                                <li><span>x86</span></li>
                                <li><span>C++</span></li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h4 className="skill-title flex gap-4">
                                <FaDatabase />
                                <span>Database</span>
                            </h4>
                            <ul className="skill-list">
                                <li><span>MySQL</span></li>
                                <li><span>Firebase</span></li>
                                <li><span>MongoDB</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
