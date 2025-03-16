# UserInfoForm - React App

## Overview
The **UserInfoForm** is a simple React application that allows users to input their personal details, such as name, favorite color, and age. It displays the entered details via an alert box when the user submits the form. This project is designed to demonstrate the use of React's `useState` hook for managing form input and basic event handling.

---

## Features
- Collect user input for:
  - Name
  - Favorite Color
  - Age
- Alert box displaying the user's information on form submission.
- Simple, responsive design.

---

## How to Use
1. Clone this repository and navigate to the project directory:
   ```bash
   git clone https://github.com/your-username/UserInfoForm.git
   cd UserInfoForm
   ```
Install dependencies:

  ```bash
  npm install
  ```
  Start the development server:

 ```bash
  npm start
  ```
* Open your browser and navigate to http://localhost:3000.

## Code Structure
The app is implemented in the UserInfoForm.js file, using React functional components and hooks:

# Key Components:
* State Management:

* name: Tracks the user's name.

* favoriteColor: Tracks the user's favorite color.

* age: Tracks the user's age.

* Submit Button: Displays an alert box containing the input data on click.

Project Structure
```
src/
│
├── components/
│   └── UserInfoForm.js    # Core form component
│
├── App.js                 # Root component
├── index.js               # Application entry point
└── styles.css             # Optional: CSS for global styles
```

## Built With
* React: Frontend library for building user interfaces.

* HTML5: Markup and basic styling.

* Tailwind Css : For Styling.

## Future Enhancements
- Possible improvements for the app include:

- Adding input validations.

- Styling enhancements using libraries like Tailwind CSS.

- Storing user data in localStorage or a database.

- Adding a toggle for dark mode.

## License
This project is open-source and available under the MIT License.

## Author
Created by Abdul Rahman. Feel free to suggest improvements, report issues, or contribute!
