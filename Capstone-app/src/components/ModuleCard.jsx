// src/components/ModuleCard.jsx
import React from 'react';
import { FaUserSecret, FaLock, FaGlobe, FaCheck, FaPlayCircle, FaFilePdf, FaServer } from 'react-icons/fa'; // Import relevant icons

/**
 * @component ModuleCard
 * @description This component is responsible for rendering a card-like display for each training module
 * on the `LandingPage`. It shows the module's title, summary, an icon, and its completion status,
 * along with a button to start or review the module.
 *
 * @props {object} props - The props for the component.
 * @props {object} props.module - The module object containing its `id` (string), `title` (string),
 * and `summary` (string).
 * @props {boolean} props.isCompleted - A boolean indicating if the user has completed this module.
 * @props {function} props.startModule - A function prop (from `App.jsx` via `LandingPage.jsx`)
 * called when the button on the card is clicked. It passes the `module.id` to this function.
 * @props {boolean} [props.inProgress=false] - A boolean indicating if this module is the next one
 * to be started by the user (used for displaying an "In Progress" state). Defaults to `false`.
 * @props {boolean} [props.darkMode=false] - A boolean to adjust styling for dark mode, particularly
 * for icons and text colors. Defaults to `false`.
 */
const ModuleCard = ({ module, isCompleted, startModule, inProgress = false, darkMode = false }) => {
  /**
   * @function getIcon
   * @description Selects and returns a specific `react-icons` component based on the module's title.
   * This function helps to visually differentiate modules by associating them with relevant icons.
   * The color of the icon is also adjusted based on the `darkMode` prop.
   *
   * @param {string} title - The title of the module.
   * @returns {JSX.Element} A `react-icons` component (e.g., `<FaUserSecret />`).
   *                          Returns `<FaGlobe />` as a default if no specific title matches.
   */
  const getIcon = (title) => {
    // Determine icon color class based on darkMode prop
    const iconColorClass = darkMode ? 'text-blue-400' : 'text-blue-600';
    const iconBaseClasses = `${iconColorClass} w-8 h-8 mb-4`;

    switch (title.toLowerCase()) {
      case 'social engineering':
        return <FaUserSecret className={iconBaseClasses} />;
      case 'secure browsing':
        return <FaGlobe className={iconBaseClasses} />;
      case 'password management':
        return <FaLock className={iconBaseClasses} />;
      case 'data protection':
        return <FaFilePdf className={iconBaseClasses} />;
      case 'network security':
        return <FaServer className={iconBaseClasses} />;
      default:
        return <FaGlobe className={iconBaseClasses} />;
    }
  };

  /**
   * @returns {JSX.Element} The rendered module card.
   * - The main container `div` has dynamic background and text colors based on `darkMode`.
   * - It calls `getIcon()` with `module.title` to display a relevant icon.
   * - Displays the `module.title` and `module.summary`.
   * - Conditional Rendering for Badges:
   *   - If `isCompleted` is true, a "Module Completed" badge with a checkmark icon is shown.
   *   - If `inProgress` is true AND `isCompleted` is false, an "In Progress" badge with a play icon is shown.
   * - Action Button:
   *   - On click, it calls the `startModule` function prop, passing `module.id`.
   *   - The button's text and background color dynamically change based on the module's status:
   *     - "Review Module" (green) if `isCompleted`.
   *     - "Continue Module" (yellow) if `inProgress` and not completed.
   *     - "Start Module" (blue) otherwise.
   */
  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300`}>
      <div className="flex flex-col items-center">
        {getIcon(module.title)}
        <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          {module.title}
        </h2>
      </div>
      <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{module.summary}</p>
      
      {/* "Module Completed" badge */}
      {isCompleted && (
        <div className={`mb-4 p-2 ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'} rounded-md flex items-center`}>
          <FaCheck className="mr-2" /> Module Completed
        </div>
      )}
      
      {/* "In Progress" badge */}
      {inProgress && !isCompleted && (
        <div className={`mb-4 p-2 ${darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700'} rounded-md flex items-center`}>
          <FaPlayCircle className="mr-2" /> In Progress
        </div>
      )}
      
      {/* Action button (Start/Continue/Review) */}
      <button
        onClick={() => startModule(module.id)}
        className={`w-full ${
          isCompleted 
            ? 'bg-green-500 hover:bg-green-600' 
            : inProgress 
              ? 'bg-yellow-500 hover:bg-yellow-600'
              : 'bg-blue-500 hover:bg-blue-600'
        } text-white px-4 py-2 rounded-md transition duration-300 flex items-center justify-center`}
      >
        {isCompleted ? 'Review Module' : inProgress ? 'Continue Module' : 'Start Module'}
      </button>
    </div>
  );
};

export default ModuleCard;
