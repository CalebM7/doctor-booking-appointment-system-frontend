# Doctor Booking System - Frontend

This is the frontend for a doctor booking system, built with React and Vite.

## Description

This project is a web application that allows users to find and book appointments with doctors. Users can search for doctors by speciality, view doctor profiles, and book appointments. The application also includes user authentication and a user profile section where users can view their upcoming appointments.

## Folder Structure

```
/home/caleb/CODE/MERN-PROJECTS/doctor-booking-system/frontend/
├───.gitignore
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───postcss.config.js
├───README.md
├───tailwind.config.js
├───vite.config.js
├───.git/...
├───node_modules/...
├───public/
│   └───vite.svg
└───src/
    ├───App.jsx
    ├───index.css
    ├───main.jsx
    ├───assets/
    │   ├───...
    ├───components/
    │   ├───Banner.jsx
    │   ├───Footer.jsx
    │   ├───Header.jsx
    │   ├───Navbar.jsx
    │   ├───RelatedDoctors.jsx
    │   ├───SpecialityMenu.jsx
    │   └───TopDoctors.jsx
    ├───context/
    │   └───AppContext.jsx
    └───pages/
        ├───About.jsx
        ├───Appointment.jsx
        ├───Contact.jsx
        ├───Doctors.jsx
        ├───Home.jsx
        ├───Login.jsx
        ├───MyAppointments.jsx
        └───MyProfile.jsx
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18.x or later)
*   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/your_project_name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run lint`

Lints the project files using ESLint.

### `npm run preview`

Serves the production build locally.

## Dependencies

*   **axios**: Promise based HTTP client for the browser and node.js
*   **react**: A JavaScript library for building user interfaces
*   **react-dom**: Serves as the entry point to the DOM and server renderers for React
*   **react-router-dom**: DOM bindings for React Router
*   **react-toastify**: For adding notifications to your app

## Dev Dependencies

*   **@eslint/js**: The core ESLint library
*   **@types/react**: TypeScript definitions for React
*   **@types/react-dom**: TypeScript definitions for React DOM
*   **@vitejs/plugin-react**: The Vite plugin for React
*   **autoprefixer**: A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules
*   **eslint**: An open source JavaScript linting utility
*   **eslint-plugin-react-hooks**: ESLint rules for React Hooks
*   **eslint-plugin-react-refresh**: ESLint rules for React Refresh
*   **globals**: Global identifiers for JavaScript environments
*   **postcss**: A tool for transforming CSS with JavaScript
*   **tailwindcss**: A utility-first CSS framework
*   **vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects

## Technologies Used

*   **React**: A JavaScript library for building user interfaces
*   **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects
*   **React Router**: For routing in the application
*   **Tailwind CSS**: A utility-first CSS framework
*   **ESLint**: For code linting

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.