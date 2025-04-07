// src/components/ProgressBar.jsx
//ProgressBar very simple component but GOOD *DONE*

import React from 'react';

const ProgressBar = ({ 
  current, 
  total, 
  color = 'bg-blue-500',
  showPercentage = true,
  showText = true,
  height = 'h-2.5',
  darkMode = false
}) => {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="w-full">
      {showText && (
        <div className="flex justify-between mb-1">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Progress
          </span>
          {showPercentage && (
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full ${height} mb-3`}>
        <div
          className={`${height} rounded-full transition-all duration-500 ease-in-out ${color}`}
          style={{ width: `${percentage}%` }}
        >
          {percentage > 10 && height !== 'h-2.5' && (
            <div className="flex justify-center items-center h-full text-xs text-white">
              {percentage}%
            </div>
          )}
        </div>
      </div>
      {showText && (
        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {current} of {total} modules completed
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
