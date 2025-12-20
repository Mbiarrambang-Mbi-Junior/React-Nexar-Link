import React, { useRef } from "react"; // Added useRef
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function Contact({ id }) {
  const form = useRef(); // Create the reference

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id", // Replace with your Service ID
        "template_id", // Replace with your Template ID
        form.current,  // Passes the entire form automatically
        "public_key"   // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Clears the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div
      id={id}
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-24 pb-12"
    >
      <h2 className="text-4xl font-bold mb-12">Contact Section</h2>
      <div className="contact-content container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {/* Contact Info */}
        <div className="contact-info flex flex-col gap-8 p-8 bg-white rounded-2xl shadow-lg h-full">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
            Get in Touch
          </h3>
          <p className="text-gray-600">
            Have questions about our juices or want to place a bulk order? We'd
            love to hear from you! Fill out the form or reach us via the details
            below.
          </p>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-100 rounded-full text-orange-600">
              <BsGeoAlt size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Our Location</h4>
              <p className="text-gray-600">
                St francise street, Kumba City, JC 54321
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-100 rounded-full text-orange-600">
              <BsTelephone size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Phone Number</h4>
              <p className="text-gray-600">+237 670 000 000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-100 rounded-full text-orange-600">
              <BsEnvelope size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email Address</h4>
              <p className="text-gray-600">hello@vanjuice.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="contact-form flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800">
            Send us a Message
          </h3>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name" // Added name attribute for EmailJS
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="from_email" // Added name attribute for EmailJS
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message" // Added name attribute for EmailJS
              rows="4"
              placeholder="Your message here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit" // Changed from "button" to "submit"
            className="mt-2 py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform transition-all active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;