import React from "react";
import { Link } from "react-scroll";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import VanJuice from "../assets/icons/VanJuice";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <VanJuice className="text-orange-500 w-8 h-8" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                VanJuice
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing nature's finest flavors directly to your glass. Fresh,
              organic, and full of life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-orange-400">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {["home", "about", "services", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-white cursor-pointer capitalize transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-orange-400">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors group"
              >
                <BsFacebook className="text-xl group-hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors group"
              >
                <BsTwitter className="text-xl group-hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors group"
              >
                <BsInstagram className="text-xl group-hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors group"
              >
                <BsLinkedin className="text-xl group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-orange-400">Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Subscribe for latest updates and offers.
            </p>
            <div className="flex bg-gray-800 rounded-lg overflow-hidden p-1 focus-within:ring-2 focus-within:ring-orange-500 transition-all">
              <input
                type="email"
                placeholder="Email..."
                className="bg-transparent text-white px-3 w-full outline-none placeholder-gray-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-bold text-sm transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gray-800 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm text-center md:text-left">
          <p>© {currentYear} VanJuice Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
