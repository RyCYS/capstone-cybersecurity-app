// src/components/Footer.jsx
// Simple footer component to make the site footer reusable *DONE*

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';

// Footer component to display the site footer
const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-800' : 'bg-blue-600'} text-white py-6 transition-colors duration-300`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Cybersecurity Training. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300" aria-label="Facebook">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="Twitter">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="Email">
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 text-center text-sm opacity-75">
        <p>This platform provides educational content for cybersecurity awareness and training.</p>
        <p className="mt-2">
          <a href="#" className="underline hover:text-gray-300">Privacy Policy</a> | 
          <a href="#" className="underline hover:text-gray-300 ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
