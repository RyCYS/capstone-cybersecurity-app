// src/components/Module.jsx
// Module component functions well *DONE*

import React, { useState } from 'react';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import Quiz from './Quiz';
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa';

//Module component that will be rendered in the App component
const Module = ({
  module,
  onCompleteQuiz,
  resetQuiz,
  goToNextModule,
  goToPrevModule,
  isFirstModule,
  isLastModule
}) => {
  const [quizResult, setQuizResult] = useState(null);
  const [showContent, setShowContent] = useState(true);

  const handleQuizCompletion = (passed, score) => {
    setQuizResult({ passed, score });
    onCompleteQuiz(module.id, passed); // App.jsx handles auto-advance now
  };

  const handleStartQuiz = () => {
    setShowContent(false);
  };

  const handleBackToContent = () => {
    setShowContent(true);
  };

  // Common container styles
  const containerClasses = "container mx-auto px-4 py-8";
  const cardClasses = "bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg";

  if (quizResult) {
    const passingScore = Math.ceil(module.questions.length * 0.6); // Updated to 60%
    const { passed, score } = quizResult;
    return (
      // Added container and adjusted padding/shadow on card
      <div className={containerClasses}>
        <div className={cardClasses}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Quiz Completed!</h2>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Your score: {score} out of {module.questions.length}
          </p>
          {passed ? (
            <div className="mb-6 p-4 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-md">
              Congratulations! You've passed this module with a score of {score}/
              {module.questions.length}.
            </div>
          ) : (
            <div className="mb-6 p-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-md">
              You've completed this module, but a score of {passingScore}/
              {module.questions.length} or higher is needed to pass. Feel free to review the material and try again!
            </div>
          )}
          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={resetQuiz} // Go back to landing page
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center shadow-md hover:shadow-lg"
            >
              <FaHome className="mr-2" /> Back to Modules
            </button>
            {!passed && (
              <button
                onClick={() => { 
                  setQuizResult(null); // Reset quiz result state
                  setShowContent(true); // Show content again
                }}
                className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300 flex items-center shadow-md hover:shadow-lg"
              >
                Review Material & Retry Quiz
              </button>
            )}
            {/* Auto-advance handled in App.jsx, button might not be needed or could be styled differently */}
            {/* {!isLastModule && passed && (
              <button
                onClick={goToNextModule}
                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300 flex items-center shadow-md hover:shadow-lg"
              >
                Next Module <FaArrowRight className="ml-2" />
              </button>
            )} */}
          </div>
        </div>
      </div>
    );
  }

  return (
    // Added container and adjusted padding/shadow on card
    <div className={containerClasses}>
      <div className={cardClasses}>
        {/* Navigation controls */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
          <button
            onClick={resetQuiz} // Go back to landing page
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 flex items-center shadow-sm hover:shadow"
          >
            <FaHome className="mr-2" /> Home
          </button>
          <div className="flex gap-2">
            {!isFirstModule && (
              <button
                onClick={goToPrevModule}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 flex items-center shadow-sm hover:shadow"
              >
                <FaArrowLeft className="mr-2" /> Previous
              </button>
            )}
            {!isLastModule && (
              <button
                onClick={goToNextModule}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 flex items-center shadow-sm hover:shadow"
              >
                Next <FaArrowRight className="ml-2" />
              </button>
            )}
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">{module.title}</h2>
        
        {showContent ? (
          <>
            {/* Use prose for better content formatting */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-6 text-gray-700 dark:text-gray-300">
              {/* Split content by newlines for paragraph breaks */} 
              {module.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {module.id === 3 && <PasswordStrengthChecker />}
            <button
              onClick={handleStartQuiz}
              className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
            >
              Start Quiz
            </button>
          </>
        ) : (
          <>
            <Quiz module={module} onComplete={handleQuizCompletion} />
            <button
              onClick={handleBackToContent}
              className="mt-4 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              ← Back to Module Content
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Module;