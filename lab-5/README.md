# Web Technology Lab - Lab 5

## Overview

This repository contains a React temperature converter application demonstrating state management, event handling, and component interaction. The app allows users to increase/decrease temperature values and toggle between Celsius and Fahrenheit scales with real-time conversion.

## Project Structure

```
lab-5/
├── src/
│   ├── components/
│   │   ├── ControlButton.jsx         # Reusable button component with click handler
│   │   ├── TemperatureControls.jsx   # Container for control buttons
│   │   └── TemperatureDisplay.jsx    # Temperature display with scale switching
│   ├── App.jsx                       # Main app component with state management
│   ├── App.css                       # App styles
│   ├── main.jsx                      # React entry point
│   └── index.css                     # Global styles
└── README.md                         # Project documentation
```

## Features

-   **Temperature Conversion**: Real-time conversion between Celsius and Fahrenheit
-   **Interactive Controls**: Increase/decrease temperature with button clicks
-   **Scale Toggle**: Switch between Celsius (°C) and Fahrenheit (°F) display
-   **State Management**: Uses React useState hook for managing temperature and scale
-   **Event Handling**: Button click events trigger temperature changes
-   **Dynamic UI**: Control button labels change based on current scale

## Technologies Used

-   React 19
-   Vite
-   JavaScript (ES6+)
-   CSS3

## Live Demo

**Lab 5 - Temperature Converter:** https://web-tech-lab-5.vercel.app/

## Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/nikgrinding/Web-Tech-Lab
    ```
2. Navigate to the project directory:
    ```bash
    cd lab-5
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Key Concepts Demonstrated

-   **React State**: Using `useState` hook to manage temperature and scale values
-   **Event Handling**: onClick events triggering state updates
-   **Lifting State Up**: State managed in parent (App) component, passed to children
-   **Props**: Passing data and functions from parent to child components
-   **Conditional Rendering**: Displaying different content based on scale state
-   **Component Reusability**: Single ControlButton component used for multiple actions
-   **Temperature Conversion**: Mathematical formula for Celsius/Fahrenheit conversion

## How It Works

1. **State Management**: App component maintains two state variables:

    - `celsius`: Temperature value in Celsius (default: 25)
    - `scale`: Current display scale (0 = Celsius, 1 = Fahrenheit)

2. **Temperature Conversion**:

    - Celsius to Fahrenheit: `(C × 9/5) + 32`
    - Fahrenheit to Celsius: `(F - 32) × 5/9`

3. **User Interactions**:
    - **Increase**: Increments temperature by 1 in current scale
    - **Decrease**: Decrements temperature by 1 in current scale
    - **Toggle Scale**: Switches between Celsius and Fahrenheit display
