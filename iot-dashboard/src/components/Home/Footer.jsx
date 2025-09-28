import React from 'react';
import { Link } from 'react-router-dom';
import { BsCpuFill, BsGoogle, BsFacebook, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

// Reusing the social link data structure for efficiency
const socialLinks = [
    { name: 'GitHub', icon: BsGithub, href: 'https://github.com/Mbiarrambang-Mbi-Junior' },
    { name: 'Twitter', icon: BsTwitter, href: 'https://twitter.com/yourcompany' },
    { name: 'Facebook', icon: BsFacebook, href: 'https://facebook.com/yourcompany' },
    { name: 'Instagram', icon: BsInstagram, href: 'https://instagram.com/yourcompany' },
];

// Define navigation sections
const navSections = [
    {
        title: "Platform",
        links: [
            { name: "Getting Started", to: "/getting-started" },
            { name: "Device Management", to: "/devices" },
            { name: "Data Analytics", to: "/analytics" },
            { name: "Alerts & Reporting", to: "/alerts" },
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Documentation", to: "/docs/guides" },
            { name: "API Reference", to: "/docs/api" },
            { name: "Blog", to: "/blog" },
            { name: "Help Center", to: "/help" },
        ]
    },
    {
        title: "Company",
        links: [
            { name: "About Us", to: "/about" },
            { name: "Careers", to: "/careers" },
            { name: "Contact", to: "/contact" },
            { name: "Privacy Policy", to: "/privacy" },
        ]
    },
];

function Footer({ isDarkMode }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer id='footer' className={`footer py-12 px-4 sm:px-10 lg:px-20 border-t transition-colors duration-300 
            ${isDarkMode ? 'bg-gray-900 text-gray-400 border-gray-700' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b pb-8 mb-8 border-gray-200 dark:border-gray-700">

                    {/* 1. Logo and Branding (First Column) */}
                    <div className="col-span-2 md:col-span-2 flex flex-col space-y-4">
                        <Link to="/" className='logo flex items-center text-2xl font-semibold'>
                            <BsCpuFill className={`text-3xl mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Nexar|Link<span className='text-[#ffb650]'>.</span></span>
                        </Link>
                        <p className="text-sm max-w-sm">
                            The comprehensive IoT management platform designed for scale and simplicity.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {/* Social Media Icons */}
                            {socialLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-xl transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-green-600'}`}
                                        title={link.name}
                                    >
                                        <IconComponent />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* 2. Navigation Links (Remaining Columns) */}
                    {navSections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h4 className="font-bold text-lg text-green-400  mb-3">
                                {section.title}
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.to}
                                            className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-green-600'}`}
                                            target="_blank"

                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* 3. Copyright and Bottom Info */}
                <div className="text-center text-sm">
                    &copy; {currentYear} Nexar|Link. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;