import React from 'react';

// 🚀 FIX APPLIED: Accept isDarkMode prop
export default function Contact({ isDarkMode }) {
    
    // Define input color classes
    const inputClasses = isDarkMode 
      ? 'border-gray-500/50 text-white focus:border-orange-400' 
      : 'border-gray-400/50 text-primary focus:border-accent';

    return (
        <>
            <section 
                id="contact" 
                // Apply section background color
                className={`w-full mx-auto py-20 px-8 text-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
            >
                {/* .section-header: Use conditional text color */}
                <div className="mb-12">
                    <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Get in touch</h2>
                    <p className={`text-base mt-2 ${isDarkMode ? 'text-gray-400' : 'text-primary'}`}>Do you have a project in mind? Contact me here.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    
                    {/* .contact-info box: Assuming accent/highlight colors are high contrast in dark mode */}
                    <address 
                        className="relative flex flex-col justify-center items-center p-8 bg-accent rounded-lg 
                                   shadow-xl overflow-hidden text-center transition duration-400 group 
                                   hover:bg-highlight text-btn-text" 
                    >
                        {/* Content text remains btn-text (likely white/light) which is fine */}
                        <h3 className="text-2xl font-semibold mb-6 text-btn-text z-20">
                            Find Me <i className="uil uil-corner-right-down"></i>
                        </h3>
                        {/* ... contact details ... */}
                    </address>

                    {/* .contact-form */}
                    <form className="flex flex-col gap-4" action="#" method="POST" aria-label="Contact form for Mbiarrambang Mbi Junior">
                        
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="name" className="sr-only">Name</label> 
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    // 🚀 FIX APPLIED: Use conditional input classes
                                    className={`w-full bg-transparent border-2 rounded-lg p-4 outline-none text-base transition duration-300 ${inputClasses}`}
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            
                            <div className="flex flex-col w-full">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    // 🚀 FIX APPLIED: Use conditional input classes
                                    className={`w-full bg-transparent border-2 rounded-lg p-4 outline-none text-base transition duration-300 ${inputClasses}`}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                // 🚀 FIX APPLIED: Use conditional input classes
                                className={`w-full bg-transparent border-2 rounded-lg p-4 outline-none text-base transition duration-300 resize-y h-40 ${inputClasses}`}
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                        
                        {/* ... form actions ... */}
                    </form>
                </div>
            </section>
        </>
    );
}