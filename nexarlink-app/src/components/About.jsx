import React from 'react'
import { BsDownload } from 'react-icons/bs';

// 🚀 FIX APPLIED: Accept isDarkMode prop
export default function About({ isDarkMode }) {

    // Define Dark Mode Classes (You may need to adjust these based on your theme)
    const containerClasses = isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900';
    const boxBgClasses = isDarkMode ? 'bg-gray-900' : 'bg-box-bg'; // Assuming 'bg-box-bg' is light

    return (
        <>
            <section
                id="about"
                // Apply a base background color to the section if desired
                className={`w-full  px-8 text-center pb-10 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
            >
                {/* .section-header */}
                <div className="mb-12">
                    {/* .section-title: Use conditional text color */}
                    <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>About Me</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* .about-content */}
                    <article
                        // Apply conditional box background and shadow
                        className={`flex flex-col items-center shadow-xl rounded-xl p-8 relative text-center 
                                   ${boxBgClasses} ${isDarkMode ? 'shadow-gray-700/50' : 'shadow-xl'}`}
                    >
                        {/* .about-subtitle: Use conditional text color */}
                        <h3 className="text-2xl font-semibold text-highlight mb-4">My Introduction</h3>

                        {/* .about-content p: Use conditional text color */}
                        <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-primary'}`}>
                            I am well-versed in HTML, CSS, and JavaScript,
                            along with other cutting-edge frameworks and libraries, which
                            allows me to implement interactive features. Additionally, I am an
                            embedded systems engineer with a strong background in IOT
                            and task automation
                        </p>

                        {/* .about-actions (Button colors should already adapt based on global theme variables) */}
                        <div className="mt-8">
                            <a href="Curriculum Vitae.docx" download
                                className="inline-flex items-center justify-center gap-2 bg-accent text-btn-text 
                                           border-none px-6 py-3 rounded-full text-decoration-none 
                                           transition duration-200 
                                           hover:bg-highlight hover:scale-[1.05] cursor-pointer"
                            >
                                Download CV <BsDownload />
                            </a>
                        </div>
                    </article>

                    {/* .skills-grid */}
                    <div className="grid grid-cols-1 gap-6">

                        {/* SKILL CATEGORY 1, 2, 3: Apply conditional box background and shadow */}
                        <div className={`${boxBgClasses} shadow-xl rounded-xl p-6 text-left ${isDarkMode ? 'shadow-gray-700/50' : 'shadow-xl'}`}>
                            <h4 className="text-xl font-semibold text-highlight mb-4">Frontend</h4>
                            <ul className="flex flex-wrap gap-2 list-none p-0">
                                <li><span className="text-sm bg-highlight text-btn-text px-3 py-1 rounded">HTML</span></li>
                                {/* ... other skills */}
                                <li><span className="text-sm bg-highlight text-btn-text px-3 py-1 rounded">React</span></li>
                            </ul>
                        </div>

                        <div className={`${boxBgClasses} shadow-xl rounded-xl p-6 text-left ${isDarkMode ? 'shadow-gray-700/50' : 'shadow-xl'}`}>
                            <h4 className="text-xl font-semibold text-highlight mb-4">Embedded Systems</h4>
                            <ul className="flex flex-wrap gap-2 list-none p-0">
                                <li><span className="text-sm bg-highlight text-btn-text px-3 py-1 rounded">Arduino C++</span></li>
                                <li><span className="text-s bg-highlight text-btn-text px-3 py-1 rounded">X86</span></li>
                                <li><span className="text-sm bg-highlight text-btn-text px-3 py-1 rounded">ARM</span></li>

                            </ul>
                        </div>

                        <div className={`${boxBgClasses} shadow-xl rounded-xl p-6 text-left ${isDarkMode ? 'shadow-gray-700/50' : 'shadow-xl'}`}>
                            <h4 className="text-xl font-semibold text-highlight mb-4">Database</h4>
                            <ul className="flex flex-wrap gap-2 list-none p-0">
                                <li><span className="text-sm bg-highlight text-btn-text px-3 py-1 rounded">FireBase</span></li>
                                {/* ... other skills */}
                                <li><span className="text-sm bg-highlight text-btn-text px-3 py-1 rounded">MongoBD</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}