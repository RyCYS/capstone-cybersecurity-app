// src/components/Header.jsx
import React from 'react';
import { FaBook, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa'; // Example icons
//import { Link } from 'react-router-dom'; // If using react-router for navigation

/**
 * @component Header
 * @description This is a presentational component responsible for rendering the site header.
 * It displays the site title/logo, a dark mode toggle button, and placeholder navigation links.
 * The component's appearance adjusts based on the dark mode setting.
 *
 * @props {object} props - The props for the component.
 * @props {boolean} props.darkMode - A boolean prop passed from `App.jsx`. It determines the
 * current theme (styling) of the header and the icon displayed on the dark mode toggle button
 * (sun for dark mode, moon for light mode).
 * @props {function} props.toggleDarkMode - A function prop passed from `App.jsx`. This function
 * is called when the dark mode toggle button is clicked, allowing the `App` component to update
 * the dark mode state.
 */
const Header = ({ darkMode, toggleDarkMode }) => {
  /**
   * @returns {JSX.Element} The rendered header element.
   * - The root element is a `<header>` tag. Its background color and text color
   *   are dynamically set based on the `darkMode` prop, with a transition effect for smooth visual changes.
   * - Site Title/Logo: Displays "Cybersecurity Training" as the site title, accompanied by a `FaBook` icon.
   *   This section is aligned to the left.
   * - Navigation Area: Aligned to the right, containing the dark mode toggle and navigation links.
   *   - Dark Mode Toggle Button:
   *     - On click, it calls the `toggleDarkMode` function passed via props.
   *     - The icon inside the button changes based on the `darkMode` state: `FaSun` (sun icon) is shown
   *       when `darkMode` is true (meaning dark mode is active, so the button shows the icon for light mode),
   *       and `FaMoon` (moon icon) is shown when `darkMode` is false.
   *     - An `aria-label` is provided for accessibility, clearly indicating the button's action
   *       (e.g., "Switch to light mode" or "Switch to dark mode").
   *     - Styling for the button also changes with `darkMode` state.
   *   - Placeholder Navigation Links:
   *     - "Profile" link with a `FaUserCircle` icon.
   *     - "Courses" link with a `FaBook` icon.
   *     - Both links currently point to "#" and are intended as placeholders for future navigation functionality.
   */
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