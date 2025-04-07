// src/components/Quiz.jsx
// Quiz component functions well *DONE*

import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

// This is the Quiz component that will be rendered in the Module component
const Quiz = ({
  module,
  onComplete,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (selectedAnswerIndex) => {
    if (showExplanation) return;
    setSelectedAnswer(selectedAnswerIndex);
    setShowExplanation(true);
    const currentQ = module.questions[currentQuestion];
    if (selectedAnswerIndex === currentQ.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    if (currentQuestion < module.questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setQuizCompleted(true);
      const passingScore = Math.ceil(module.questions.length * 0.6); // Updated to 60%
      const passed = score >= passingScore;
      onComplete(passed, score);
    }
  };

  if (quizCompleted) return null;

  const currentQ = module.questions[currentQuestion];

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Quiz</h3>
        <span className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {module.questions.length}
        </span>
      </div>
      <ProgressBar current={currentQuestion + 1} total={module.questions.length} />
      <p className="text-lg mb-4">{currentQ.question}</p>
      {currentQ.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(index)}
          className={`block w-full text-left p-4 mb-3 rounded-md transition duration-300 ${
            selectedAnswer === index
              ? selectedAnswer === currentQ.correctAnswer
                ? 'bg-green-100'
                : 'bg-red-100'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          disabled={showExplanation}
        >
          {option}
        </button>
      ))}
      {showExplanation && (
        <div
          className={`mt-4 p-4 rounded-md ${
            selectedAnswer === currentQ.correctAnswer
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {selectedAnswer === currentQ.correctAnswer
            ? 'Correct!'
            : 'Incorrect.'}
          <p className="mt-2">{currentQ.explanation}</p>
          <button
            onClick={nextQuestion}
            className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {currentQuestion < module.questions.length - 1
              ? 'Next Question'
              : 'Finish Quiz'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
