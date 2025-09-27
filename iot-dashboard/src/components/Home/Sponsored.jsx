import React from 'react';
import { BsGoogle, BsFacebook, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import PavWayIcon from '../../assets/icons/PaveWayIcon'
import TimeUp from '../../assets/icons/TimeUp';

function Sponsored() {
    const sponsoredLinks = [
        { name: 'Google', icon: BsGoogle, color: 'text-red-600' },
        { name: 'Facebook', icon: BsFacebook, color: 'text-blue-600' },
        { name: 'Twitter', icon: BsTwitter, color: 'text-sky-500' },
        { name: 'Instagram', icon: BsInstagram, color: 'text-fuchsia-600' },
        { name: 'GitHub', icon: BsGithub, color: 'text-gray-900' },
        { name: 'PavWay Group', icon: PavWayIcon, color: 'text-green-600'},
        { name: 'TimeUp Delivery', icon: TimeUp, color: 'text-green-600'}
    ];

    return (
        <section className='sponsored-container py-12 px-4 bg-white dark:bg-gray-900 transition-colors duration-300'>
            <h2 className="text-center text-xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
                Trusted by Leading Tech
            </h2>

            <div className="sponsored-card flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-4xl mx-auto">
                {sponsoredLinks.map((link, index) => {
                    const IconComponent = link.icon; // Get the React Icon component

                    return (
                        <div
                            key={index}
                            title={link.name}
                            className={`flex items-center gap-2 transition-all duration-300 
                                        hover:scale-110 cursor-pointer ${link.color}`}
                        >
                            {/* Dynamically render the icon component */}
                            <IconComponent size={32} />
                            <span className="text-lg font-medium hidden sm:inline text-gray-700 dark:text-gray-200">
                                {link.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Sponsored;