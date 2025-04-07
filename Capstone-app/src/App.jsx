// src/App.jsx
//App component is working as expected *DONE*

import React, { useState, useEffect } from 'react';
import trainingModules from './data/trainingModules';
import LandingPage from './components/LandingPage';
import Module from './components/Module';
import Certificate from './components/Certificate';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer
import { v4 as uuidv4 } from 'uuid';

// Simple Spinner Component
const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 dark:border-blue-400"></div>
  </div>
);

// Main component that will be rendered in the index.js file
const CybersecurityTrainingPlatform = () => {
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);
  const [uniqueID, setUniqueID] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from localStorage on initial render
  useEffect(() => {
    try {
      // Check if uniqueID is already in localStorage
      const storedID = localStorage.getItem('uniqueID');
      if (storedID) {
        setUniqueID(storedID);
      }
      
      // Load completed modules from localStorage
      const storedCompletedModules = localStorage.getItem('completedModules');
      if (storedCompletedModules) {
        setCompletedModules(JSON.parse(storedCompletedModules));
      }
      
      // Load dark mode preference
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode) {
        const parsedDarkMode = JSON.parse(storedDarkMode);
        setDarkMode(parsedDarkMode);
        // Apply dark mode class initially if true
        if (parsedDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      // Optionally reset state or notify user
    }
    setIsLoading(false);
  }, []);

  // Save completed modules to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('completedModules', JSON.stringify(completedModules));
      } catch (error) {
        console.error("Error saving completed modules to localStorage:", error);
      }
    }
  }, [completedModules, isLoading]);

  // Save dark mode preference to localStorage
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        // Apply dark mode to the document
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (error) {
        console.error("Error saving dark mode preference to localStorage:", error);
      }
    }
  }, [darkMode, isLoading]);

  useEffect(() => {
    // Check if all modules are completed
    if (
      completedModules.length === trainingModules.length &&
      !uniqueID &&
      !isLoading // Ensure we don't generate ID during initial load
    ) {
      // Generate a unique ID
      const newUniqueID = uuidv4();
      setUniqueID(newUniqueID);
      // Save to localStorage
      try {
        localStorage.setItem('uniqueID', newUniqueID);
      } catch (error) {
        console.error("Error saving unique ID to localStorage:", error);
      }
    }
  }, [completedModules, uniqueID, isLoading]);
  
  // Function to start a module
  const startModule = (moduleId) => {
    setCurrentModuleId(moduleId);
  };
  
  // Function to handle the completion of the quiz
  const handleQuizCompletion = (moduleId, passed) => {
    if (passed && !completedModules.includes(moduleId)) {
      setCompletedModules((prevCompleted) => [...prevCompleted, moduleId]);
    }
    // Navigate to next module automatically if passed and not the last module
    const currentIndex = trainingModules.findIndex(m => m.id === moduleId);
    if (passed && currentIndex < trainingModules.length - 1) {
      goToNextModule(moduleId);
    } else if (passed && currentIndex === trainingModules.length - 1) {
      // If last module is passed, go back to landing page (which will show certificate)
      resetQuiz(); 
    }
  };
  
  // Function to reset the quiz (go back to landing page)
  const resetQuiz = () => {
    setCurrentModuleId(null);
  };
  
  // Function to navigate to the next module
  const goToNextModule = (currentId) => {
    const currentIndex = trainingModules.findIndex(m => m.id === currentId);
    if (currentIndex < trainingModules.length - 1) {
      setCurrentModuleId(trainingModules[currentIndex + 1].id);
    } else {
      // If we're at the last module, go back to landing page
      setCurrentModuleId(null);
    }
  };
  
  // Function to navigate to the previous module
  const goToPrevModule = (currentId) => {
    const currentIndex = trainingModules.findIndex(m => m.id === currentId);
    if (currentIndex > 0) {
      setCurrentModuleId(trainingModules[currentIndex - 1].id);
    } else {
      // If we're at the first module, go back to landing page
      setCurrentModuleId(null);
    }
  };
  
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
  // Function to render the Module component
  const renderModule = () => {
    const module = trainingModules.find((m) => m.id === currentModuleId);
    if (!module) return null;

    return (
      <Module
        module={module}
        onCompleteQuiz={handleQuizCompletion}
        resetQuiz={resetQuiz}
        goToNextModule={() => goToNextModule(module.id)}
        goToPrevModule={() => goToPrevModule(module.id)}
        isLastModule={module.id === trainingModules[trainingModules.length - 1].id}
        isFirstModule={module.id === trainingModules[0].id}
      />
    );
  };
  
  // Function to render the LandingPage component or the Certificate component
  const renderLandingPage = () => {
    // Show the Certificate component if all modules are completed and uniqueID exists
    if (uniqueID && completedModules.length === trainingModules.length) {
      return <Certificate uniqueID={uniqueID} onViewModules={() => setUniqueID(null)} />;
    }

    return (
      <LandingPage
        trainingModules={trainingModules}
        completedModules={completedModules}
        startModule={startModule}
        progress={Math.round((completedModules.length / trainingModules.length) * 100)}
      />
    );
  };
  
  if (isLoading) {
    return (
      <div className={`flex flex-col min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100'}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow flex items-center justify-center">
          <Spinner />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    );
  }
  
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100'} transition-colors duration-300`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Removed container/padding from main - it now spans full width */}
      <main className="flex-grow">
        {currentModuleId === null ? renderLandingPage() : renderModule()}
      </main>
      <Footer darkMode={darkMode} /> {/* Pass darkMode prop to Footer */}
    </div>
  );
};

export default CybersecurityTrainingPlatform;