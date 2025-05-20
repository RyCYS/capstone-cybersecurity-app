// src/components/Certificate.jsx
import React, { useState } from 'react';
import { FaDownload, FaCopy, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

/**
 * @component Certificate
 * @description This component is responsible for displaying a certificate of completion to the user
 * when all training modules are finished. It shows a unique certificate ID and provides options
 * for the user to download the certificate as a text file or copy the unique ID to their clipboard.
 * It also allows navigation back to the module listing.
 *
 * @props {object} props - The props for the component.
 * @props {string} props.uniqueID - The unique identifier for the certificate, passed down from `App.jsx`.
 * @props {function} props.onViewModules - A function passed from `App.jsx` that allows the user to
 * navigate back to the module listing view (effectively by setting `uniqueID` to null in `App.jsx`).
 */
const Certificate = ({ uniqueID, onViewModules }) => {
  /**
   * @state {boolean} copied - Tracks whether the `uniqueID` has recently been copied to the clipboard.
   * This is used to provide visual feedback to the user (e.g., changing button text to "Copied!").
   */
  const [copied, setCopied] = useState(false);

  /**
   * @function downloadCertificate
   * @description Handles the generation and download of the certificate as a plain text file.
   * - Creates a data object containing the `uniqueID`, the current date as `issuedDate`,
   *   and the `course` name.
   * - Formats this data into a structured plain text string, which represents the certificate content.
   * - Creates a `Blob` object from the certificate text with a `text/plain` MIME type.
   * - Generates an object URL from the `Blob` using `URL.createObjectURL()`.
   * - Dynamically creates an anchor (`<a>`) element.
   * - Sets the `href` attribute of the anchor to the generated object URL and the `download`
   *   attribute to a filename that includes the `uniqueID` (e.g., "Cybersecurity_Certificate_yourID.txt").
   * - Programmatically clicks the anchor element to trigger the browser's download process.
   * - Schedules the revocation of the object URL using `URL.revokeObjectURL()` after a 100ms delay
   *   to ensure the download has initiated and to free up browser resources.
   * - Includes error handling: if any part of this process fails, it logs an error to the console
   *   and displays an alert message to the user.
   */
  const downloadCertificate = () => {
    try {
      const data = {
        certificateID: uniqueID,
        issuedDate: new Date().toISOString(),
        course: "Cybersecurity Essentials Training",
      };
      const certificateText = 
`---------------------------------------
CERTIFICATE OF COMPLETION
---------------------------------------

This certifies that the user associated with the ID below
has successfully completed the Cybersecurity Essentials Training.

Certificate ID: ${data.certificateID}
Issued Date: ${new Date(data.issuedDate).toLocaleDateString()}

---------------------------------------
`;
      const blob = new Blob([certificateText], { type: 'text/plain' });
      const url  = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Cybersecurity_Certificate_${uniqueID}.txt`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error("Error generating or downloading certificate:", error);
      alert("Sorry, there was an error downloading your certificate.");
    }
  };

  /**
   * @function copyToClipboard
   * @description Copies the `uniqueID` to the user's clipboard using the `navigator.clipboard` API.
   * - Calls `navigator.clipboard.writeText()` with the `uniqueID`.
   * - On successful copying:
   *   - Sets the `copied` state to `true` to provide immediate visual feedback.
   *   - Uses `setTimeout` to reset the `copied` state back to `false` after 2000 milliseconds (2 seconds).
   * - On failure (e.g., if clipboard permissions are denied or the API is not supported):
   *   - Logs an error to the console.
   *   - Displays an alert message to the user indicating that the copy action failed.
   */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(uniqueID)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
        alert('Failed to copy Certificate ID.');
      });
  };

  /**
   * @returns {JSX.Element} The rendered certificate display.
   * - The main container is styled to center its content on the page.
   * - Inside, a styled card (`div`) holds all certificate information and actions.
   * - It displays a "Congratulations!" message with a checkmark icon.
   * - The user's `uniqueID` is prominently displayed.
   * - Two primary action buttons are provided:
   *   - "Download (.txt)": Calls `downloadCertificate` when clicked.
   *   - "Copy ID": Calls `copyToClipboard`. Its text changes to "Copied!" for 2 seconds
   *     (controlled by the `copied` state) after a successful copy.
   * - A brief message advises the user to keep their Certificate ID safe.
   * - A "Review Modules" button is present, which, when clicked, calls the `onViewModules` prop function
   *   to navigate the user back to the module listing page.
   */
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 max-w-lg w-full">
        <div className="text-center">
          <FaCheckCircle className="mx-auto text-green-500 dark:text-green-400 w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Congratulations!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">You've successfully completed the Cybersecurity Essentials Training.</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Your Certificate ID:</h3>
          <p className="text-lg font-mono text-blue-600 dark:text-blue-400 break-all">{uniqueID}</p>
          <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
            <button
              onClick={downloadCertificate}
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 shadow-md hover:shadow-lg"
            >
              <FaDownload className="mr-2" />
              Download (.txt)
            </button>
            <button
              onClick={copyToClipboard}
              className={`flex items-center px-4 py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg ${copied ? 'bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              disabled={copied}
            >
              <FaCopy className="mr-2" />
              {copied ? 'Copied!' : 'Copy ID'}
            </button>
          </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Please keep this Certificate ID safe. You can use it to verify your completion status.
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={onViewModules}
            className="flex items-center mx-auto bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition duration-300 shadow-sm hover:shadow"
          >
            <FaArrowLeft className="mr-2" />
            Review Modules
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;