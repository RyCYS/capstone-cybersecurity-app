// src/components/Module.jsx
import React, { useState } from 'react';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import Quiz from './Quiz';
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa';

/**
 * @component Module
 * @description This component is responsible for displaying the content of a single training module.
 * It includes the module's textual content, an optional `PasswordStrengthChecker` (specifically for module ID 3),
 * and a `Quiz` component. It also handles navigation between modules (Previous/Next) and
 * allows the user to return to the main module listing (Home). The component manages the state
 * for quiz results and toggling between content and quiz views.
 *
 * @props {object} props - The props for the component.
 * @props {object} props.module - The module object containing its `id`, `title`, `content` (string),
 * and `questions` (array for the Quiz component).
 * @props {function} props.onCompleteQuiz - A callback function passed from `App.jsx`. It's triggered when
 * the quiz is completed, passing the `moduleId` (string) and `passed` (boolean) status to the parent.
 * @props {function} props.resetQuiz - A callback function passed from `App.jsx`. This function is called
 * to navigate the user back to the landing page (module listing).
 * @props {function} props.goToNextModule - A callback function passed from `App.jsx`. This function is
 * called to navigate the user to the next module in the sequence.
 * @props {function} props.goToPrevModule - A callback function passed from `App.jsx`. This function is
 * called to navigate the user to the previous module in the sequence.
 * @props {boolean} props.isFirstModule - A boolean indicating if the current module is the first one
 * in the training sequence. Used to conditionally render the "Previous" button.
 * @props {boolean} props.isLastModule - A boolean indicating if the current module is the last one
 * in the training sequence. Used to conditionally render the "Next" button.
 */
const Module = ({
  module,
  onCompleteQuiz,
  resetQuiz,
  goToNextModule,
  goToPrevModule,
  isFirstModule,
  isLastModule
}) => {
  /**
   * @state {object|null} quizResult - Stores the result of the quiz once it's completed.
   * It's an object of the shape `{ passed: boolean, score: number }`.
   * It is `null` if the quiz hasn't been taken yet or if the user is retaking the quiz
   * after a previous attempt.
   */
  const [quizResult, setQuizResult] = useState(null);
  /**
   * @state {boolean} showContent - Controls the visibility of the module's content versus its quiz.
   * `true` (default) displays the module's textual content and the "Start Quiz" button.
   * `false` displays the `Quiz` component and a "Back to Module Content" button.
   */
  const [showContent, setShowContent] = useState(true);

  /**
   * @function handleQuizCompletion
   * @description Callback function that is invoked when the user completes the quiz in the `Quiz` component.
   * It updates the `quizResult` state with the outcome of the quiz and also calls the `onCompleteQuiz`
   * prop function (from `App.jsx`) to inform the parent component about the quiz completion,
   * passing the current module's ID and whether the quiz was passed.
   * @param {boolean} passed - Indicates whether the user passed the quiz.
   * @param {number} score - The score obtained by the user in the quiz.
   */
  const handleQuizCompletion = (passed, score) => {
    setQuizResult({ passed, score });
    onCompleteQuiz(module.id, passed); // App.jsx handles auto-advance logic
  };

  /**
   * @function handleStartQuiz
   * @description Event handler for the "Start Quiz" button.
   * It sets the `showContent` state to `false`, which hides the module content
   * and displays the `Quiz` component.
   */
  const handleStartQuiz = () => {
    setShowContent(false);
  };

  /**
   * @function handleBackToContent
   * @description Event handler for the "← Back to Module Content" button (shown when viewing the quiz).
   * It sets the `showContent` state to `true`, which hides the `Quiz` component
   * and displays the module's textual content again.
   */
  const handleBackToContent = () => {
    setShowContent(true);
  };

  // Common Tailwind CSS classes for styling the container and card elements.
  // `containerClasses` provides consistent horizontal padding and centers content.
  const containerClasses = "container mx-auto px-4 py-8";
  // `cardClasses` styles the main content area with a background, padding, rounded corners, and shadow.
  const cardClasses = "bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg";

  // CONDITIONAL RENDERING: QUIZ RESULT VIEW
  // If `quizResult` is not null, it means the user has completed the quiz.
  // This block renders a summary of their performance.
  if (quizResult) {
    const passingScore = Math.ceil(module.questions.length * 0.6); // 60% passing threshold
    const { passed, score } = quizResult;
    return (
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
            {/* Button to navigate back to the main module listing (LandingPage) */}
            <button
              onClick={resetQuiz}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center shadow-md hover:shadow-lg"
            >
              <FaHome className="mr-2" /> Back to Modules
            </button>
            {/* Conditional button: If the quiz was not passed, show a button to retry.
                Clicking it resets `quizResult` to null (to exit this view) and
                sets `showContent` to true (to show module content for review). */}
            {!passed && (
              <button
                onClick={() => {
                  setQuizResult(null); // Reset quiz result state to allow retake
                  setShowContent(true); // Show module content for review
                }}
                className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300 flex items-center shadow-md hover:shadow-lg"
              >
                Review Material & Retry Quiz
              </button>
            )}
            {/* Note: The "Next Module" button after passing a quiz was previously here but commented out.
                The auto-advance logic is now handled in App.jsx upon `onCompleteQuiz` callback.
                Example of the commented-out button:
                {!isLastModule && passed && (
                  <button onClick={goToNextModule} ...>Next Module</button>
                )}
            */}
          </div>
        </div>
      </div>
    );
  }

  // CONDITIONAL RENDERING: MAIN MODULE VIEW (CONTENT OR QUIZ)
  // This is rendered if `quizResult` is null (quiz not yet taken or being retaken).
  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        {/* Module Navigation Controls (Home, Previous, Next) */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
          <button
            onClick={resetQuiz} // Navigates to LandingPage
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 flex items-center shadow-sm hover:shadow"
          >
            <FaHome className="mr-2" /> Home
          </button>
          <div className="flex gap-2">
            {/* "Previous" button: Rendered only if not the first module */}
            {!isFirstModule && (
              <button
                onClick={goToPrevModule}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 flex items-center shadow-sm hover:shadow"
              >
                <FaArrowLeft className="mr-2" /> Previous
              </button>
            )}
            {/* "Next" button: Rendered only if not the last module */}
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
        
        {/* Conditional rendering based on `showContent` state */}
        {showContent ? (
          // DISPLAY MODULE CONTENT
          <>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-6 text-gray-700 dark:text-gray-300">
              {/* Module content is split by newline characters to create separate paragraphs. */}
              {module.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {/* Conditionally render PasswordStrengthChecker for module ID 3 */}
            {module.id === 3 && <PasswordStrengthChecker />}
            <button
              onClick={handleStartQuiz} // Switches to quiz view
              className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
            >
              Start Quiz
            </button>
          </>
        ) : (
          // DISPLAY QUIZ
          <>
            <Quiz module={module} onComplete={handleQuizCompletion} />
            <button
              onClick={handleBackToContent} // Switches back to content view
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