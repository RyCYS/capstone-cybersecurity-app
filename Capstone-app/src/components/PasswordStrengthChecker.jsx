// src/components/PasswordStrengthChecker.jsx
// PasswordStrengthChecker component is SICK *DONE* 

import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');

  const checkPasswordStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (pass.length >= 12) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[a-z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;
    return strength;
  };

  const getStrengthLabel = (strength) => {
    if (strength <= 2) return 'Weak';
    if (strength <= 4) return 'Moderate';
    return 'Strong';
  };

  const strengthColor = (strength) => {
    if (strength <= 2) return 'bg-red-500';
    if (strength <= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const strength = checkPasswordStrength(password);

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Password Strength Checker</h3>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
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