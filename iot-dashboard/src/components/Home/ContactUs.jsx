import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactUs({ isDarkMode }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend endpoint (e.g., Firebase Functions, serverless function, or email service).
        console.log('Form Data Submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section className={`contactus py-20 px-4 sm:px-10 lg:px-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            <div className='max-w-7xl mx-auto'>

                {/* --- Section Header --- */}
                <header className='text-center mb-16'>
                    <p className='text-teal-600 dark:text-teal-400 font-semibold text-sm uppercase tracking-widest'>
                        Get in Touch
                    </p>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Contact Our Team
                    </h2>
                    <p className={`mt-4 text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        We're here to help you simplify your IoT management. Fill out the form below or use our direct contact details.
                    </p>
                </header>

                {/* --- Contact Grid: Info & Form --- */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    
                    {/* Left Column: Direct Contact Info (2/3 of space on small screens, 1/3 on large) */}
                    <div className='lg:col-span-1 space-y-8'>
                        
                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Connect with Nexar|Link
                        </h3>
                        <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Whether you have sales inquiries, technical questions, or need support, our team is ready.
                        </p>

                        {/* Info Blocks */}
                        <div className='space-y-6'>
                            <div className='flex items-start gap-4'>
                                <FaMapMarkerAlt className='text-teal-500 flex-shrink-0 mt-1' size={24} />
                                <div>
                                    <h4 className='font-semibold text-lg'>Our Office</h4>
                                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>123 PavWay Group .Inc, Buea, CA 90210</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <FaPhone className='text-teal-500 flex-shrink-0 mt-1' size={24} />
                                <div>
                                    <h4 className='font-semibold text-lg'>Phone</h4>
                                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>+237 679-724-759</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <FaEnvelope className='text-teal-500 flex-shrink-0 mt-1' size={24} />
                                <div>
                                    <h4 className='font-semibold text-lg'>Email</h4>
                                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>support@nexarlink.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form (2/3 of space on large screens) */}
                    <div className='lg:col-span-2'>
                        <form onSubmit={handleSubmit} className={`p-8 rounded-xl shadow-xl space-y-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                            
                            {/* Name and Email in a Row */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`w-full p-3 rounded-lg border focus:ring-teal-500 focus:border-teal-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white' : 'bg-white border-gray-300 placeholder-gray-500'}`}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={`w-full p-3 rounded-lg border focus:ring-teal-500 focus:border-teal-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white' : 'bg-white border-gray-300 placeholder-gray-500'}`}
                                />
                            </div>

                            {/* Subject */}
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className={`w-full p-3 rounded-lg border focus:ring-teal-500 focus:border-teal-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white' : 'bg-white border-gray-300 placeholder-gray-500'}`}
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className={`w-full p-3 rounded-lg border focus:ring-teal-500 focus:border-teal-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white' : 'bg-white border-gray-300 placeholder-gray-500'}`}
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className='w-full py-3 rounded-lg font-bold text-lg shadow-md transition-colors duration-200 bg-teal-600 text-white hover:bg-teal-700'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactUs;