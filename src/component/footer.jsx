import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaHeart,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 rounded-bl-[3.5rem] rounded-tr-[5rem] mt-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* About Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h4 className="text-2xl font-bold mb-2">CareLink</h4>
          <p className="text-sm mb-4">
            Your trusted partner in accessible healthcare.
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} CareLink. All rights reserved.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="list-none space-y-1">
            <li>
              <a href="#home" className="hover:underline hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline hover:text-gray-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Social Links</h3>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Border Line */}
      <div className="bg-gray-800 py-2 mt-8">
        <div className="container mx-auto border-t border-gray-700" />
      </div>

      {/* Designed With Love Section */}
      <div className="text-center py-4">
        <p className="text-sm text-gray-400 flex items-center justify-center">
          Designed with <FaHeart className="text-red-500 mx-1" /> by Ruth
        </p>
      </div>
    </footer>
  );
};

export default Footer;
