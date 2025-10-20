# Web Technology Lab - Lab 3

## Overview

This repository contains a responsive registration form application built with HTML, CSS, and JavaScript. The form provides real-time validation for student coordinator registration for the "Instincts" event.

**Registration Form** - A dynamic form application that validates user input including name, email, phone number, age, and T-shirt size with instant feedback and error messages.

## Project Structure

```
lab-3/
├── form.html            # Main registration form webpage
├── styles/
│   └── form.css         # Styles for registration form
├── scripts/
│   └── form.js          # JavaScript for form validation
└── README.md            # Project documentation
```

## Features

-   Real-time form validation with instant feedback
-   Clean and intuitive user interface
-   Responsive design with modern styling
-   Client-side validation for data integrity
-   Dynamic error messages for invalid inputs
-   Multiple field types: text, email, phone, number, and select

## Validation Rules

-   **Full Name:** Mandatory field, minimum 3 characters
-   **Email Address:** Mandatory field, must be in valid email format
-   **Phone Number:** Optional field, must be 10 digits if provided
-   **Age:** Mandatory field, must be between 18 and 25
-   **T-Shirt Size:** Mandatory field, must select from dropdown

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript (ES6+)

## Live Demo

**Registration Form:** https://web-tech-lab-3-one.vercel.app/form.html

## Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/nikgrinding/Web-Tech-Lab
    ```
2. Navigate to the project directory:
    ```bash
    cd lab-3
    ```
3. Open the HTML file in your browser:
    - `form.html` for the registration form
4. Fill out the form and see real-time validation in action
