import React from 'react';
import { BsLightbulb, BsAndroid, BsGridFill, BsMicFill, BsGlobe } from 'react-icons/bs';

// Data structure for features to make the component cleaner and easily expandable
import { BsClock, BsGraphUp, BsShieldCheck } from 'react-icons/bs';

const featuresData = [
    {
        icon: BsLightbulb,
        title: "Smart Control",
        description: "Effortlessly manage all your IoT devices from a single, intuitive dashboard. Optimized for speed and reliability.",
        footer: "Seamless Integration"
    },
    {
    icon: BsClock,
    title: "Intelligent Energy Optimization",
    description: "Automatically analyze usage patterns and optimize device scheduling to minimize peak consumption, reducing your monthly utility costs without sacrificing convenience.",
    footer: "Save Money, Save Energy"
},
    {
        icon: BsMicFill,
        title: "Voice Commands",
        description: "Enable hands-free control with built-in voice command support. Integrate with popular smart assistants.",
        footer: "Hands-Free Management"
    },
    {
        icon: BsGlobe, // You'll need to import BsGlobe from 'react-icons/bs' or use a similar icon like BsLaptop or BsDisplay
        title: "Secure Web Portal",
        description: "Manage your dashboard and devices from any desktop or tablet browser. Enjoy a full-screen, responsive interface with the same security and features as the mobile app.",
        footer: "Desktop & Cross-Browser Control"
    },
    // NEW FEATURE 2: Data Analytics
    {
        icon: BsGraphUp,
        title: "Performance Analytics",
        description: "Visualize historical and real-time data trends to monitor device performance, track energy consumption, and identify anomalies.",
        footer: "Data-Driven Insights"
    },
    // NEW FEATURE 3: Security
    {
        icon: BsShieldCheck,
        title: "Robust Security Layers",
        description: "Ensure your data and devices are protected with end-to-end encryption, multi-factor authentication (MFA), and granular access controls.",
        footer: "Secure by Design"
    },

];

function Features() {
    return (
        <section id='features' className='flex flex-col w-full items-center justify-center py-16 px-4 bg-[#18243d] transition-colors duration-300'>

            <h2 className="
                text-4xl font-extrabold mb-12 text-gray-800 dark:text-white
                relative after:content-[''] after:absolute 
                after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 
                after:w-20 after:h-1 after:bg-[#f58424]
            ">
                Core Features
            </h2>

            <div className="features-cards flex flex-wrap justify-center gap-8 max-w-10xl">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        className="card flex flex-col items-center p-6
               hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-700 
               hover:scale-[1.03] transition-all duration-300 ease-in-out hover:-translate-y-1 
               
               // --- FIX HERE ---
               border-l-4 border-gray-400 dark:border-gray-700 
               before:content-[''] before:absolute before:inset-0
               // --------------
               
               w-full sm:w-100 md:w-100"
                    >
                        {/* Icon */}
                        <div className="icon p-4 mb-4 rounded-full bg-teal-50 dark:bg-teal-900">
                            <feature.icon className='text-teal-600 dark:text-[#f58424]' size={36} />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="feature-description text-center text-sm mb-4 text-gray-600 dark:text-gray-400">
                            {feature.description}
                        </p>

                        {/* Footer/CTA */}
                        <div className="footer-card pt-4 border-t border-grey-200 dark:border-gray-700 w-full text-center">
                            <span className='text-sm font-semibold text-teal-600 dark:text-teal-400'>
                                {feature.footer}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;