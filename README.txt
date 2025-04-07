# Cybersecurity Training Platform

## Overview
The **Cybersecurity Training Platform** is a React-based web application designed to improve cybersecurity literacy. It provides interactive modules on key topics such as Social Engineering, Secure Browsing, and Password Management. Users progress through quizzes and learning content, with their achievements tracked and rewarded through a completion certificate. The platform is intuitive, scalable, and designed to make cybersecurity education accessible to everyone, regardless of technical background.

## Features
- **Interactive Training Modules**: Learn key cybersecurity topics through comprehensive and engaging lessons.
- **Quizzes and Assessments**: Test your understanding with dynamic quizzes for each module.
- **Certificate Generation**: Earn a unique certificate upon completing all modules, stored locally for easy access.
- **Progress Tracking**: Automatically track completed modules and ensure smooth progression.
- **Responsive Design**: Optimized for use across devices with Tailwind CSS.

## Technologies Used
- **React**: Frontend framework for building modular and scalable components.
- **Tailwind CSS**: Styling framework for a responsive and visually appealing UI.
- **UUID Library**: For generating unique IDs to store user certificates.
- **LocalStorage**: Used for storing the user's certificate and progress persistently.

## File Structure
src/
│
├── components/
│   ├── Certificate.jsx                 # Component for generating and displaying certificates
│   ├── Header.jsx                      # Header for the app
│   ├── Footer.jsx                      # Footer for the app
│   ├── LandingPage.jsx                 # Landing page listing all modules
│   ├── Module.jsx                      # Module content and quiz logic
│   ├── ModuleCard.jsx                  # Module component to display module information
│   ├── PasswordStrengthChecker.jsx     # Password checker for the Password module
│   ├── ProgressBar.jsx                 # ProgressBar component for the Modules
│   ├── Quiz.jsx                        # Quiz component for the app
│ 
├── data/
│   ├── trainingModules.js    # Data for training modules
│
├── App.jsx                   # Main application file
├── index.js                  # Entry point for rendering the app
├── styles.css                # Additional custom styles
