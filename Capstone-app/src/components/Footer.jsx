// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';

/**
 * @component Footer
 * @description This is a presentational component responsible for rendering the site footer.
 * It includes copyright information, social media links (currently placeholders), and
 * links to a privacy policy and terms of service (also placeholders).
 * The component's appearance adjusts based on the dark mode setting.
 *
 * @props {object} props - The props for the component.
 * @props {boolean} props.darkMode - A boolean prop passed from `App.jsx`. If `true`,
 * the footer will use dark mode styling; otherwise, it uses light mode styling.
 */
const Footer = ({ darkMode }) => {
  /**
   * @returns {JSX.Element} The rendered footer element.
   * - The root element is a `<footer>` tag. Its background color and text color
   *   are dynamically set based on the `darkMode` prop, with a transition effect.
   * - It contains a `div` that centers content using Tailwind CSS's `container mx-auto px-4`.
   * - Copyright Information: Displays the current year and a copyright notice.
   *   This section is responsive, adjusting its layout for different screen sizes (`flex-col md:flex-row`).
   * - Social Media Links: A `div` containing several social media icons (Facebook, Twitter, LinkedIn,
   *   GitHub, Email) from the `react-icons/fa` library. Each icon is wrapped in an anchor (`<a>`) tag.
   *   Currently, all these links are placeholders, pointing to "#". `aria-label` is used for accessibility.
   * - Platform Disclaimer: A section with text describing the platform's educational purpose.
   * - Legal Links: Placeholder links for "Privacy Policy" and "Terms of Service", also currently
   *   pointing to "#". These are styled to look like typical footer links.
   */
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
