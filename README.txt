# Cybersecurity Essentials Training Platform

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-^5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-^3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A web-based application designed to educate users on essential cybersecurity topics through interactive modules and quizzes.

## Description

This platform provides a series of training modules covering fundamental cybersecurity concepts like social engineering, secure browsing, password management, and more. Users progress through modules, complete quizzes, and receive a unique certificate ID upon completion of all modules. The application features persistent progress tracking and a dark mode option for user preference.

## Features

*   **Interactive Training Modules:** Engaging content covering key cybersecurity areas.
*   **Quizzes:** Test understanding at the end of each module (60% required to pass).
*   **Progress Tracking:** Completed modules are saved locally (`localStorage`).
*   **Certificate Generation:** Unique ID generated upon completion of all modules.
*   **Certificate Download:** Downloadable `.txt` certificate file.
*   **Dark Mode:** Toggle between light and dark themes, preference saved locally.
*   **Module Navigation:** Easily navigate between modules (Previous/Next/Home).
*   **Responsive Design:** Basic responsiveness provided by Tailwind CSS.
*   **Auto-Advance:** Automatically navigates to the next module upon passing a quiz.
*   **Retry Quiz Option:** Allows users to review module content and retry failed quizzes.

## Tech Stack

*   **Frontend:** React.js (^18.3)
*   **Build Tool:** Vite (^5.4)
*   **Styling:** Tailwind CSS (^3.4)
    *   Includes `@tailwindcss/typography` plugin for content styling.
*   **Icons:** React Icons
*   **Unique IDs:** UUID
*   **Linting:** ESLint

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js and npm (or yarn) installed. You can download them from [nodejs.org](https://nodejs.org/).
*   Git installed.

### Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>/Capstone-app
    ```
    *(Replace `<your-repository-url>` and `<repository-directory>`)*

2.  **Navigate to the app directory:**
    If you already have the project, make sure you are in the `Capstone-app` directory:
    ```bash
    cd Capstone-app
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(Or `yarn install` if you prefer Yarn)*

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    *(Or `yarn dev`)*

2.  Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## Usage

1.  Launch the application using the steps above.
2.  Use the "Get Started" or "Continue Learning" button on the landing page to begin or resume training.
3.  Navigate through the available modules using the cards or the Previous/Next buttons within a module.
4.  Read the module content and take the quiz.
5.  If you pass, you'll automatically advance (or see completion). If you fail, you can review and retry.
6.  Once all modules are completed, you will see your Certificate on the landing page.
7.  Use the Dark Mode toggle in the header to switch themes.

## Screenshots

*(Consider adding screenshots here later)*
*   *Landing Page (Light/Dark)*
*   *Module View (Light/Dark)*
*   *Quiz View*
*   *Certificate View*

## Contributing

Contributions are welcome! Please follow standard fork/pull request workflows. *(You can expand this section later if needed)*

## License

*(Specify your license here, e.g., MIT License. If you don't have one, you can add one later.)*
