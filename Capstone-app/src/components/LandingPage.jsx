// src/components/LandingPage.jsx
// LandingPage looks all good and ready to go *DONE*

import React from 'react';
import ModuleCard from './ModuleCard';
import ProgressBar from './ProgressBar';
import PasswordStrengthChecker from './PasswordStrengthChecker'; // Import the checker
import {
  FaShieldAlt,
  FaLock,
  FaGlobe,
  FaUserShield,
  FaQuoteLeft,
  FaStar,
  FaArrowRight,
  FaCogs,
  FaLightbulb,
} from 'react-icons/fa';

// LandingPage component to display the main page content
const LandingPage = ({
  trainingModules,
  completedModules,
  startModule,
  progress = 0,
  resetProgress, // Add resetProgress prop
}) => {
  const allModulesCompleted = completedModules.length === trainingModules.length;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Unlock Your Cyber Confidence: Start Learning Today!
        </h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Go from cyber-aware to cyber-secure. Our engaging modules demystify cybersecurity, giving you the practical skills to navigate the digital world safely and protect what matters most.
        </p>
        
        {completedModules.length > 0 && (
          <div className="max-w-xl mx-auto mt-8 mb-8">
            <ProgressBar 
              current={completedModules.length}
              total={trainingModules.length}
              color={allModulesCompleted ? "bg-green-500" : "bg-blue-500"}
              height="h-4"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{completedModules.length} of {trainingModules.length} modules completed.</p>
            <button 
              onClick={resetProgress}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 text-sm"
            >
              Reset Progress
            </button>
          </div>
        )}
        
        <div className="flex justify-center space-x-8 mt-8">
          <div className="flex flex-col items-center text-gray-700 dark:text-gray-300">
            <FaShieldAlt className="text-blue-500 dark:text-blue-400 w-12 h-12 mb-2" />
            <span className="font-semibold">Protect</span>
          </div>
          <div className="flex flex-col items-center text-gray-700 dark:text-gray-300">
            <FaLock className="text-blue-500 dark:text-blue-400 w-12 h-12 mb-2" />
            <span className="font-semibold">Secure</span>
          </div>
          <div className="flex flex-col items-center text-gray-700 dark:text-gray-300">
            <FaGlobe className="text-blue-500 dark:text-blue-400 w-12 h-12 mb-2" />
            <span className="font-semibold">Learn</span>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              const nextModuleIndex = completedModules.length;
              const moduleToStart = trainingModules[nextModuleIndex] || trainingModules[0];
              if (moduleToStart) {
                startModule(moduleToStart.id);
              }
            }}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {completedModules.length > 0 ? "Resume Your Training" : "Start Your First Module"}
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Why Level Up Your Cyber Skills With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaCogs className="text-blue-500 dark:text-blue-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">All-in-One Cyber Knowledge</h3>
            <p className="text-gray-600 dark:text-gray-300">Master essential cybersecurity concepts, all in one place.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaLightbulb className="text-blue-500 dark:text-blue-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Real-World Skills, Instantly Applicable</h3>
            <p className="text-gray-600 dark:text-gray-300">Gain actionable insights you can use immediately to stay safer online.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaLock className="text-blue-500 dark:text-blue-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Learn Safely, Practice Confidently</h3>
            <p className="text-gray-600 dark:text-gray-300">Explore cybersecurity in a secure environment built for learning.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        {allModulesCompleted && (
          <div className="mb-8 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md text-center shadow">
            🎉 Congratulations! You've completed all modules. <a href="#certificate" onClick={() => { }} className="underline font-semibold">View your certificate</a>
          </div>
        )}
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Available Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingModules.map((module) => {
            const isCompleted = completedModules.includes(module.id);
            const nextModuleIndex = completedModules.length;
            const isNextUp = !isCompleted && module.id === (trainingModules[nextModuleIndex]?.id);
            const inProgress = isNextUp && completedModules.length > 0;
            
            return (
              <ModuleCard
                key={module.id}
                module={module}
                isCompleted={isCompleted}
                inProgress={inProgress}
                startModule={startModule}
              />
            );
          })}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow">
            <FaQuoteLeft className="text-blue-500 dark:text-blue-400 w-6 h-6 mb-2" />
            <p className="flex-grow mb-4 text-gray-600 dark:text-gray-300 italic">"This training has significantly improved my understanding of cybersecurity. The modules are well-structured and engaging!"</p>
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-4 h-4 mr-1" />
              ))}
            </div>
            <p className="mt-4 font-semibold text-right text-gray-700 dark:text-gray-200">- Jane D., Project Manager</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow">
            <FaQuoteLeft className="text-blue-500 dark:text-blue-400 w-6 h-6 mb-2" />
            <p className="flex-grow mb-4 text-gray-600 dark:text-gray-300 italic">"A comprehensive course that covers all the essential aspects. Highly recommend to anyone looking to enhance their digital safety skills."</p>
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-4 h-4 mr-1" />
              ))}
            </div>
            <p className="mt-4 font-semibold text-right text-gray-700 dark:text-gray-200">- John S., Freelancer</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow">
            <FaQuoteLeft className="text-blue-500 dark:text-blue-400 w-6 h-6 mb-2" />
            <p className="flex-grow mb-4 text-gray-600 dark:text-gray-300 italic">"The practical examples and clear explanations made complex topics easy to grasp. Feel much more confident online now!"</p>
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-4 h-4 mr-1" />
              ))}
            </div>
            <p className="mt-4 font-semibold text-right text-gray-700 dark:text-gray-200">- Alex R., Student</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow">
            <FaQuoteLeft className="text-blue-500 dark:text-blue-400 w-6 h-6 mb-2" />
            <p className="flex-grow mb-4 text-gray-600 dark:text-gray-300 italic">"Finally, cybersecurity training that isn't dry or overly technical. The interactive elements kept me hooked. Great job!"</p>
            <div className="flex items-center justify-center mb-2">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-4 h-4 mr-1" />
              ))}
              <FaStar className="text-gray-300 dark:text-gray-500 w-4 h-4 mr-1" />
            </div>
            <p className="mt-4 font-semibold text-right text-gray-700 dark:text-gray-200">- Samantha B., HR Specialist</p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Is Your Password Strong Enough?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Use our quick checker to see how your password stacks up!</p>
        <PasswordStrengthChecker />
      </div>
    </div>
  );
};

export default LandingPage;