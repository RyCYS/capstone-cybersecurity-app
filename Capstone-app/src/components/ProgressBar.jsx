// src/components/ProgressBar.jsx
import React from 'react';

/**
 * @component ProgressBar
 * @description A reusable presentational component for displaying a progress bar.
 * It visually represents progress from a current value to a total value.
 * The component can show text labels for "Progress", the percentage value, and
 * "X of Y" type completion status. It is customizable in terms of color, height,
 * and visibility of text elements, and also supports a dark mode for text.
 *
 * @props {object} props - The props for the component.
 * @props {number} props.current - The current progress value (e.g., number of completed items).
 * @props {number} props.total - The total value that represents 100% progress (e.g., total number of items).
 * @props {string} [props.color='bg-blue-500'] - An optional Tailwind CSS class string for the
 * color of the filled portion of the progress bar. Defaults to 'bg-blue-500'.
 * @props {boolean} [props.showPercentage=true] - An optional boolean to control the visibility
 * of the percentage text (e.g., "50%") displayed next to the "Progress" label. Defaults to `true`.
 * @props {boolean} [props.showText=true] - An optional boolean to control the visibility of the
 * "Progress" label and the "X of Y modules completed" summary text. Defaults to `true`.
 * @props {string} [props.height='h-2.5'] - An optional Tailwind CSS class string for the height
 * of the progress bar. Defaults to 'h-2.5'.
 * @props {boolean} [props.darkMode=false] - An optional boolean to adjust text colors for
 * optimal visibility in a dark mode UI. Defaults to `false`.
 */
const ProgressBar = ({
  current,
  total,
  color = 'bg-blue-500',
  showPercentage = true,
  showText = true,
  height = 'h-2.5',
  darkMode = false
}) => {
  /**
   * @derived
   * @type {number} percentage - The calculated progress percentage, rounded to the nearest whole number.
   * It is derived from the `current` and `total` props. For example, if `current` is 1 and `total` is 2,
   * `percentage` will be 50.
   */
  const percentage = Math.round((current / total) * 100);

  /**
   * @returns {JSX.Element} The rendered progress bar component.
   * - The main container is a `div` with `w-full` to take up the full width of its parent.
   * - **Conditional Text Labels (if `showText` is true)**:
   *   - A `div` displays "Progress" text on the left.
   *   - If `showPercentage` is also true, the calculated `percentage` (e.g., "50%") is displayed on the right.
   *   - The text color of these labels dynamically adjusts based on the `darkMode` prop for better visibility.
   * - **Progress Bar Visual**:
   *   - An outer `div` acts as the background track of the bar. Its background color changes based on `darkMode`
   *     (lighter grey for light mode, darker grey for dark mode), and its height is determined by the `height` prop.
   *   - An inner `div` represents the filled portion of the progress bar:
   *     - Its height is also set by the `height` prop.
   *     - Its background color is set by the `color` prop.
   *     - Its `width` is dynamically set as an inline style (`style={{ width: `${percentage}%` }}`) to reflect
   *       the calculated `percentage`.
   *     - It includes Tailwind CSS classes for a smooth transition effect (`transition-all duration-500 ease-in-out`)
   *       when the width changes.
   *     - Conditionally, if `percentage > 10` and the `height` is not the default 'h-2.5' (implying a taller bar),
   *       the percentage value is rendered as text *inside* the filled portion of the bar. This is to ensure
   *       the text is readable and fits well only on taller bars with sufficient progress.
   * - **Conditional "X of Y" Text (if `showText` is true)**:
   *   - A `div` displays a summary text like "current of total modules completed" (e.g., "1 of 2 modules completed").
   *   - The text color of this summary also adjusts based on the `darkMode` prop.
   */
  return (
    <div className="w-full">
      {/* Display "Progress" label and percentage if showText is true */}
      {showText && (
        <div className="flex justify-between mb-1">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Progress
          </span>
          {/* Display percentage value if showPercentage is true */}
          {showPercentage && (
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {percentage}%
            </span>
          )}
        </div>
      )}
      {/* Background track of the progress bar */}
      <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full ${height} mb-3`}>
        {/* Filled portion of the progress bar */}
        <div
          className={`${height} rounded-full transition-all duration-500 ease-in-out ${color}`}
          style={{ width: `${percentage}%` }}
        >
          {/* Conditionally render percentage text inside the bar for taller bars with enough progress */}
          {percentage > 10 && height !== 'h-2.5' && (
            <div className="flex justify-center items-center h-full text-xs text-white">
              {percentage}%
            </div>
          )}
        </div>
      </div>
      {/* Display "X of Y modules completed" text if showText is true */}
      {showText && (
        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {current} of {total} modules completed
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
