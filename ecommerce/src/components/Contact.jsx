import React from 'react';
import { BsGeoAltFill, BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';

function Contact() {
  return (
    <section className="bg-gray-100 p-8 md:p-12 lg:p-16 rounded-xl shadow-lg max-w-5xl mx-auto my-10 md:my-20">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left column for contact information */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <div className="group">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 transition-all duration-300">
              Get in Touch
            </h2>
            <span className="block w-full h-1 bg-transparent group-hover:bg-black transition-all duration-300"></span>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We would love to hear from you! Please feel free to reach out to us with any questions, comments, or suggestions.
          </p>

          <div className="contact-details flex flex-col gap-4">
            <div className="contact-item flex items-start gap-4">
              <BsGeoAltFill className="text-2xl text-teal-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-500 text-sm">1234 E-Shop Lane, Suite 100, Tech City, 54321</p>
              </div>
            </div>
            <div className="contact-item flex items-start gap-4">
              <BsFillTelephoneFill className="text-2xl text-teal-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item flex items-start gap-4">
              <BsFillEnvelopeFill className="text-2xl text-teal-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-500 text-sm">support@eshop.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column for the contact form */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">
            Send Us a Message
          </h2>
          <form className="form flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-y"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 px-6 text-white font-semibold rounded-md bg-teal-600 hover:bg-orange-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;