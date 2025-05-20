// src/App.jsx
import React, { useState, useEffect } from 'react';
import trainingModules from './data/trainingModules';
import LandingPage from './components/LandingPage';
import Module from './components/Module';
import Certificate from './components/Certificate';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer
import { v4 as uuidv4 } from 'uuid';

/**
 * @component Spinner
 * @description A simple functional component that renders a loading spinner.
 * @returns {JSX.Element} The spinner element.
 */
const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 dark:border-blue-400"></div>
  </div>
);

/**
 * @component CybersecurityTrainingPlatform
 * @description This is the main application component. It is responsible for managing the overall state,
 * handling navigation between different views (LandingPage, Module, Certificate), and rendering these views.
 * It also manages user progress, dark mode preference, and certificate generation.
 */
const CybersecurityTrainingPlatform = () => {
  // STATE VARIABLES
  /**
   * @state {string|null} currentModuleId - Tracks the ID of the module currently being viewed.
   * It's `null` if the user is on the landing page.
   */
  const [currentModuleId, setCurrentModuleId] = useState(null);
  /**
   * @state {string[]} completedModules - An array storing the IDs of modules the user has successfully completed.
   */
  const [completedModules, setCompletedModules] = useState([]);
  /**
   * @state {string|null} uniqueID - Stores a unique identifier (UUID v4) generated when all modules are completed.
   * This ID is used for the certificate. It's `null` until all modules are completed.
   */
  const [uniqueID, setUniqueID] = useState(null);
  /**
   * @state {boolean} darkMode - A boolean flag to toggle the dark mode theme for the application.
   * `true` for dark mode, `false` for light mode.
   */
  const [darkMode, setDarkMode] = useState(false);
  /**
   * @state {boolean} isLoading - A boolean flag to indicate if the application is currently loading
   * initial data from localStorage (e.g., progress, dark mode preference).
   * `true` while loading, `false` once initial loading is complete.
   */
  const [isLoading, setIsLoading] = useState(true);

  // EFFECT HOOKS

  /**
   * @effect Loads `uniqueID`, `completedModules`, and `darkMode` preference from `localStorage`
   * on initial component mount.
   * - It checks `localStorage` for an existing `uniqueID` and `completedModules` and sets the state.
   * - It also checks for a saved `darkMode` preference, sets the state, and applies the 'dark' class
   *   to the document's root element if dark mode was previously enabled.
   * - Includes error handling for `localStorage` access.
   * - Sets `isLoading` to `false` after attempting to load all data.
   * @dependency `[]` - Runs only once on component mount.
   */
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

  /**
   * @effect Saves `completedModules` to `localStorage` whenever the `completedModules` state changes.
   * - This effect runs only if `isLoading` is `false` to prevent writing to `localStorage` during
   *   the initial data loading phase.
   * - Includes error handling for `localStorage` access.
   * @dependency `[completedModules, isLoading]` - Runs when `completedModules` or `isLoading` changes.
   */
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('completedModules', JSON.stringify(completedModules));
      } catch (error) {
        console.error("Error saving completed modules to localStorage:", error);
      }
    }
  }, [completedModules, isLoading]);

  /**
   * @effect Saves `darkMode` preference to `localStorage` and applies/removes the 'dark' class
   * from `document.documentElement` whenever the `darkMode` state changes.
   * - This effect runs only if `isLoading` is `false`.
   * - It updates `localStorage` with the current `darkMode` value.
   * - It adds or removes the 'dark' class from the `<html>` element to apply the theme.
   * - Includes error handling for `localStorage` access.
   * @dependency `[darkMode, isLoading]` - Runs when `darkMode` or `isLoading` changes.
   */
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

  /**
   * @effect Checks if all training modules are completed and if a `uniqueID` hasn't been generated yet.
   * - This effect runs when `completedModules`, `uniqueID`, or `isLoading` changes.
   * - It only proceeds if `isLoading` is `false` to avoid execution during initial load.
   * - If all modules in `trainingModules` are present in the `completedModules` array and `uniqueID` is not yet set,
   *   it generates a new `uniqueID` using `uuidv4()`.
   * - The new `uniqueID` is then saved to both the component's state and `localStorage`.
   * - Includes error handling for `localStorage` access.
   * @dependency `[completedModules, uniqueID, isLoading]` - Runs when these state variables change.
   */
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

  // KEY FUNCTIONS

  /**
   * @function startModule
   * @description Sets the `currentModuleId` state to the given `moduleId`.
   * This effectively navigates the user to the specified training module.
   * @param {string} moduleId - The ID of the module to start.
   */
  const startModule = (moduleId) => {
    setCurrentModuleId(moduleId);
  };

  /**
   * @function handleQuizCompletion
   * @description Handles the logic after a user completes a module's quiz.
   * - If the quiz is passed and the module isn't already in `completedModules`, it adds the `moduleId` to the array.
   * - If passed and it's not the last module, it automatically navigates to the next module using `goToNextModule`.
   * - If passed and it IS the last module, it calls `resetQuiz()` to navigate back to the landing page (where the certificate will be shown).
   * @param {string} moduleId - The ID of the module whose quiz was completed.
   * @param {boolean} passed - Indicates whether the user passed the quiz.
   */
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

  /**
   * @function resetQuiz
   * @description Resets the `currentModuleId` state to `null`.
   * This navigates the user back to the landing page.
   */
  const resetQuiz = () => {
    setCurrentModuleId(null);
  };

  /**
   * @function goToNextModule
   * @description Navigates to the next module in the `trainingModules` sequence.
   * - Finds the index of the `currentId` in the `trainingModules` array.
   * - If there is a next module, it updates `currentModuleId` to the ID of the next module.
   * - If the current module is the last one, it sets `currentModuleId` to `null`, navigating to the landing page.
   * @param {string} currentId - The ID of the current module.
   */
  const goToNextModule = (currentId) => {
    const currentIndex = trainingModules.findIndex(m => m.id === currentId);
    if (currentIndex < trainingModules.length - 1) {
      setCurrentModuleId(trainingModules[currentIndex + 1].id);
    } else {
      // If we're at the last module, go back to landing page
      setCurrentModuleId(null);
    }
  };

  /**
   * @function goToPrevModule
   * @description Navigates to the previous module in the `trainingModules` sequence.
   * - Finds the index of the `currentId` in the `trainingModules` array.
   * - If there is a previous module (index > 0), it updates `currentModuleId` to the ID of the previous module.
   * - If the current module is the first one, it sets `currentModuleId` to `null`, navigating to the landing page.
   * @param {string} currentId - The ID of the current module.
   */
  const goToPrevModule = (currentId) => {
    const currentIndex = trainingModules.findIndex(m => m.id === currentId);
    if (currentIndex > 0) {
      setCurrentModuleId(trainingModules[currentIndex - 1].id);
    } else {
      // If we're at the first module, go back to landing page
      setCurrentModuleId(null);
    }
  };

  /**
   * @function toggleDarkMode
   * @description Toggles the `darkMode` state between `true` and `false`.
   * The actual application of the theme is handled by a `useEffect` hook listening to `darkMode`.
   */
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  /**
   * @function resetProgress
   * @description Resets all user progress.
   * - Prompts the user for confirmation before proceeding.
   * - If confirmed, it clears `completedModules` and `uniqueID` from the state.
   * - It also removes `completedModules` and `uniqueID` from `localStorage`.
   * - Navigates the user back to the landing page by setting `currentModuleId` to `null`.
   * - Includes error handling for `localStorage` removal.
   */
  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your progress? This action cannot be undone.")) {
      setCompletedModules([]);
      setUniqueID(null);
      setCurrentModuleId(null); // Go back to landing page
      try {
        localStorage.removeItem('completedModules');
        localStorage.removeItem('uniqueID');
      } catch (error) {
        console.error("Error removing data from localStorage:", error);
      }
    }
  };

  /**
   * @function renderModule
   * @description Renders the `Module` component for the `currentModuleId`.
   * - Finds the module object from `trainingModules` that matches `currentModuleId`.
   * - If no module is found (e.g., `currentModuleId` is `null` or invalid), it returns `null`.
   * - Passes necessary props to the `Module` component, including the module data,
   *   event handlers for quiz completion and navigation, and flags for identifying
   *   the first/last module.
   * @returns {JSX.Element|null} The `Module` component or `null`.
   */
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

  /**
   * @function renderLandingPage
   * @description Determines whether to render the `Certificate` or `LandingPage` component.
   * - If a `uniqueID` exists and all modules are completed (i.e., `completedModules.length` equals `trainingModules.length`),
   *   it renders the `Certificate` component, passing the `uniqueID` and a handler to allow viewing modules again
   *   (which clears the `uniqueID` to show the landing page).
   * - Otherwise, it renders the `LandingPage` component, passing `trainingModules`, `completedModules`,
   *   the `startModule` function, current progress percentage, and the `resetProgress` function.
   * @returns {JSX.Element} The `Certificate` or `LandingPage` component.
   */
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
        resetProgress={resetProgress} // Pass resetProgress function
      />
    );
  };

  // Show spinner while loading initial data
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

  /**
   * MAIN RETURN STATEMENT
   * - The root element is a `div` that dynamically applies classes for dark or light mode
   *   using `darkMode` state. It also includes transition effects for color changes.
   * - It renders the `Header` component, passing `darkMode` state and `toggleDarkMode` function as props.
   * - The `main` content area fills the available space (`flex-grow`).
   * - Inside `main`, it conditionally renders either:
   *   - The output of `renderLandingPage()` (which could be `LandingPage` or `Certificate`) if `currentModuleId` is `null`.
   *   - The output of `renderModule()` if a `currentModuleId` is set.
   * - Finally, it renders the `Footer` component, passing the `darkMode` state.
   */
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