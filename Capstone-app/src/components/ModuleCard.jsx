// src/components/ModuleCard.jsx
// ModuleCard simple yet effective component to display module information *DONE*

import React from 'react';
import { FaUserSecret, FaLock, FaGlobe, FaCheck, FaPlayCircle, FaFilePdf, FaServer } from 'react-icons/fa'; // Import relevant icons

// ModuleCard component to display module information
const ModuleCard = ({ module, isCompleted, startModule, inProgress = false, darkMode = false }) => {
  // Function to select icon based on module title
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'social engineering':
        return <FaUserSecret className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} w-8 h-8 mb-4`} />;
      case 'secure browsing':
        return <FaGlobe className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} w-8 h-8 mb-4`} />;
      case 'password management':
        return <FaLock className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} w-8 h-8 mb-4`} />;
      case 'data protection':
        return <FaFilePdf className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} w-8 h-8 mb-4`} />;
      case 'network security':
        return <FaServer className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} w-8 h-8 mb-4`} />;
      default:
        return <FaGlobe className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} w-8 h-8 mb-4`} />;
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300`}>
      <div className="flex flex-col items-center">
        {getIcon(module.title)}
        <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          {module.title}
        </h2>
      </div>
      <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{module.summary}</p>
      
      {isCompleted && (
        <div className={`mb-4 p-2 ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'} rounded-md flex items-center`}>
          <FaCheck className="mr-2" /> Module Completed
        </div>
      )}
      
      {inProgress && !isCompleted && (
        <div className={`mb-4 p-2 ${darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700'} rounded-md flex items-center`}>
          <FaPlayCircle className="mr-2" /> In Progress
        </div>
      )}
      
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
