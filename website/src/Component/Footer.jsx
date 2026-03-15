import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b1c3d] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Company Info */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">IT Solutions</h2>
          <p className="text-gray-300">
            We build modern and scalable IT solutions to help your business grow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-300 space-y-1">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/service" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-300">contact@yourcompany.com</p>
          <p className="text-gray-300">+91 123 456 7890</p>
          <div className="flex gap-4 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">Twitter</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} IT Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;