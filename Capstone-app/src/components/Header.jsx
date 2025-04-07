// src/components/Header.jsx
// Header has no working navingation links but looks cool   *DONE*

import React from 'react';
import { FaBook, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa'; // Example icons
//import { Link } from 'react-router-dom'; // If using react-router for navigation

// Header component to display the site header
const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`${darkMode ? 'bg-gray-800' : 'bg-blue-600'} text-white shadow-md transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaBook className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Cybersecurity Training</h1>
        </div>
        <nav className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-400'} transition-colors duration-300`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
          
          {/* Example navigation links */}
          <a href="#" className="hover:text-gray-200 flex items-center">
            <FaUserCircle className="w-5 h-5 mr-1" />
            Profile
          </a>
          <a href="#" className="hover:text-gray-200 flex items-center">
            <FaBook className="w-5 h-5 mr-1" />
            Courses
          </a>
          {/* Add more links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;