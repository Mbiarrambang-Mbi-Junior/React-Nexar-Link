import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import VanJuice from "../assets/icons/VanJuice";
import { BsArrowLeft, BsArrowRight, BsMenuButtonFill } from "react-icons/bs";
import juiceData from "../utils/juiceData.json";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auto-scroll images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % juiceData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % juiceData.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + juiceData.length) % juiceData.length);

  // Styling classes
  const linkClass =
    "cursor-pointer text-gray-800 hover:text-orange-600 transition-colors font-medium px-2 py-1 relative";
  const activeLinkClass = "active-link"; // We will use [&.active-link] in CSS/Tailwind

  return (
    <div
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-orange-100 to-white overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div
        className={`absolute top-0 right-0 w-1/3 h-full ${juiceData[currentImage].badgeColor} skew-x-12 transform translate-x-20 z-0`}
      ></div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md transition-all shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 z-10">
            <div className="bg-orange-500 rounded-full p-1">
              <VanJuice className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
              VanJuice
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block z-10">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className={`${linkClass}`}
                    activeClass={activeLinkClass}
                  >
                    {/* Active underline logic */}
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 [.active-link_&]:scale-x-100"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-4 z-10">
            <button className="text-gray-600 font-semibold hover:text-orange-500 transition-colors">
              Order Now
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <BsArrowLeft className="text-2xl" /> // Close icon
              ) : (
                <BsMenuButtonFill className="text-2xl text-orange-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-xl">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="font-bold text-gray-800 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-8 w-64">
            <button className="w-full text-gray-600 font-semibold border-2 border-gray-200 py-3 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all">
              Order Now
            </button>
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="container mx-auto px-6 pt-32 pb-12 flex flex-col-reverse md:flex-row items-center justify-between relative z-10 h-full min-h-screen">
        {/* Text Content */}
        <div className="hero-text md:w-1/2 flex flex-col gap-6 text-center md:text-left mt-12 md:mt-0">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-semibold text-sm w-max mx-auto md:mx-0">
            #1 Natural Fruit Juice Brand
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
            Squeeze the Day
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
             with VanJuice
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            Discover a handful of fresh juices made from 100% organic fruits. No
            preservatives, just pure nature in every bottle.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
            <Link
              to="/view-menu"
              smooth={true}
              offset={-70}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              View Menu
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all cursor-pointer"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8 mt-8 text-gray-500">
            <div>
              <p className="text-3xl font-bold text-gray-900">5k+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">20+</p>
              <p className="text-sm">Fruit Flavors</p>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="hero-img md:w-1/2 flex items-center justify-center relative">
          {/* Slider Context */}
          <div className="relative w-full max-w-sm">
            <div
              className="absolute top-1/2 -left-2 z-20 bg-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-orange-50 transition-colors"
              onClick={prevImage}
            >
              <BsArrowLeft className="text-xl text-gray-800" />
            </div>

            <div className="bg-white/30 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div
                className={`absolute top-0 right-0 ${juiceData[currentImage].badgeColor} text-black font-bold px-4 py-2 rounded-bl-2xl z-20`}
              >
                Best Seller
              </div>
              <div
                className={`h-80 w-full overflow-hidden rounded-2xl relative`}
              >
                <img
                  src={juiceData[currentImage].image}
                  alt={juiceData[currentImage].name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {juiceData[currentImage].name}
                  </h3>
                  <p className="text-orange-600 font-bold text-xl mt-1">
                    {juiceData[currentImage].price} XAF
                  </p>
                </div>
                <button className="bg-orange-500 text-white p-3 rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
                  <BsArrowRight className="text-xl" />
                </button>
              </div>
            </div>

            <div
              className="absolute top-1/2 -right-2 z-20 bg-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-orange-50 transition-colors"
              onClick={nextImage}
            >
              <BsArrowRight className="text-xl text-gray-800" />
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {juiceData.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
