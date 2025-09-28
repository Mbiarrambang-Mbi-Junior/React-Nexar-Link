import React from 'react';
import { BsLightbulb, BsAndroid, BsGridFill, BsMicFill } from 'react-icons/bs';

// Data structure for features to make the component cleaner and easily expandable
const featuresData = [
    { 
        icon: BsLightbulb, 
        title: "Smart Control", 
        description: "Effortlessly manage all your IoT devices from a single, intuitive dashboard. Optimized for speed and reliability.",
        footer: "Seamless Integration"
    },
    { 
        icon: BsMicFill, 
        title: "Voice Commands", 
        description: "Enable hands-free control with built-in voice command support. Integrate with popular smart assistants.",
        footer: "Hands-Free Management"
    },
    { 
        icon: BsAndroid, 
        title: "Mobile App", 
        description: "Monitor and control your entire network on the go with our native mobile application for iOS and Android.",
        footer: "Anytime, Anywhere Access"
    },
    { 
        icon: BsGridFill, 
        title: "Custom Dashboards", 
        description: "Create personalized dashboards tailored to your specific needs and track the metrics that matter most to you.",
        footer: "Personalized Experience"
    },
];

function Features() {
    return (
        <section id='features' className='flex flex-col w-full items-center justify-center py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300'>
            
            <h2 className="
                text-4xl font-extrabold mb-12 text-gray-800 dark:text-white
                relative after:content-[''] after:absolute 
                after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 
                after:w-20 after:h-1 after:bg-teal-600 after:dark:bg-teal-400
            ">
                Core Features
            </h2>
            
            <div className="features-cards flex flex-wrap justify-center gap-8 max-w-6xl">
                {featuresData.map((feature, index) => (
                    <div 
                        key={index}
                        className="feature-card flex flex-col items-center p-6 rounded-xl shadow-xl 
                                 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out 
                                 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 w-full sm:w-80 md:w-64"
                    >
                        {/* Icon */}
                        <div className="icon p-4 mb-4 rounded-full bg-teal-50 dark:bg-teal-900">
                            <feature.icon className='text-teal-600 dark:text-teal-400' size={36}/>
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
                        <div className="footer-card pt-4 border-t border-gray-200 dark:border-gray-700 w-full text-center">
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