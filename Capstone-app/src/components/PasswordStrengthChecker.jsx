// src/components/PasswordStrengthChecker.jsx
import React, { useState } from 'react';

/**
 * @component PasswordStrengthChecker
 * @description This component provides a user interface to check the strength of a password.
 * It includes an input field for the password and a visual strength indicator bar
 * accompanied by a textual label (Weak, Moderate, Strong) that updates in real-time
 * as the user types.
 */
const PasswordStrengthChecker = () => {
  /**
   * @state {string} password - Stores the current value of the password input field.
   * It is initialized as an empty string.
   */
  const [password, setPassword] = useState('');

  /**
   * @function checkPasswordStrength
   * @description Calculates a numerical strength score for a given password.
   * The score ranges from 0 to 6 based on a set of predefined criteria.
   *
   * @param {string} pass - The password string to evaluate.
   * @returns {number} The calculated strength score (0-6).
   * Criteria for scoring:
   * - Length >= 8: +1 point
   * - Length >= 12: +1 point (additional to the >=8 point)
   * - Contains at least one uppercase letter ([A-Z]): +1 point
   * - Contains at least one lowercase letter ([a-z]): +1 point
   * - Contains at least one digit ([0-9]): +1 point
   * - Contains at least one special character (non-alphanumeric): +1 point
   */
  const checkPasswordStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (pass.length >= 12) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[a-z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++; // Checks for non-alphanumeric characters
    return strength;
  };

  /**
   * @function getStrengthLabel
   * @description Converts a numerical strength score into a human-readable label.
   *
   * @param {number} strength - The password strength score (typically 0-6).
   * @returns {string} A label indicating the password strength:
   * - "Weak" if score is 0, 1, or 2.
   * - "Moderate" if score is 3 or 4.
   * - "Strong" if score is 5 or 6.
   */
  const getStrengthLabel = (strength) => {
    if (strength <= 2) return 'Weak';
    if (strength <= 4) return 'Moderate';
    return 'Strong';
  };

  /**
   * @function strengthColor
   * @description Determines the Tailwind CSS background color class for the strength indicator bar
   * based on the numerical strength score.
   *
   * @param {number} strength - The password strength score (typically 0-6).
   * @returns {string} A Tailwind CSS class string:
   * - 'bg-red-500' for Weak strength (score <= 2).
   * - 'bg-yellow-500' for Moderate strength (score <= 4).
   * - 'bg-green-500' for Strong strength (score > 4).
   */
  const strengthColor = (strength) => {
    if (strength <= 2) return 'bg-red-500'; // Weak passwords get a red bar
    if (strength <= 4) return 'bg-yellow-500'; // Moderate passwords get a yellow bar
    return 'bg-green-500'; // Strong passwords get a green bar
  };

  /**
   * @derived
   * @type {number} strength - The current numerical strength of the `password` state.
   * This value is calculated by calling `checkPasswordStrength` with the current `password`.
   * It is re-evaluated on every render, ensuring the UI updates as the password changes.
   */
  const strength = checkPasswordStrength(password);

  /**
   * @returns {JSX.Element} The rendered password strength checker UI.
   * - A main `div` container with styling for background, padding, and shadow.
   * - A title "Password Strength Checker".
   * - An `input` field of type "password":
   *   - Its `value` is bound to the `password` state variable.
   *   - The `onChange` event handler updates the `password` state with the new input value,
   *     triggering a re-render and recalculation of password strength.
   * - A visual strength indicator bar composed of two `div` elements:
   *   - The outer `div` is the grey background track of the bar.
   *   - The inner `div` represents the actual strength. Its `width` style is dynamically
   *     calculated as a percentage `(strength / 6) * 100%` of the outer bar's width.
   *     Its background color is determined by the `strengthColor(strength)` function.
   * - A `span` element that displays the textual strength label (e.g., "Weak", "Moderate", "Strong")
   *   obtained by calling `getStrengthLabel(strength)`.
   */
  return (
    <div className="mt-6 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Password Strength Checker</h3>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="Enter a password"
      />
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
          <div
            className={`h-2.5 rounded-full ${strengthColor(strength)}`}
            style={{ width: `${(strength / 6) * 100}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium">{getStrengthLabel(strength)}</span>
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;