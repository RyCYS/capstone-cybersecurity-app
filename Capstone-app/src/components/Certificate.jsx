// src/components/Certificate.jsx
//Version 2.0 plz work  *DONE*

import React, { useState } from 'react';
import { FaDownload, FaCopy, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

// Certificate component to display the certificate after completion
const Certificate = ({ uniqueID, onViewModules }) => {
  const [copied, setCopied] = useState(false);

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