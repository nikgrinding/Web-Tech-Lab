# Web Technology Lab - Lab 6

## Overview

This repository contains a React countdown timer application demonstrating advanced state management, lifecycle hooks (useEffect), and controlled form inputs. The app allows users to set a custom time, start/stop/reset the timer, and displays real-time countdown in MM:SS format.

## Project Structure

```
lab-6/
├── src/
│   ├── components/
│   │   ├── Button.jsx              # Reusable button component
│   │   ├── Heading.jsx             # Dynamic heading component (h1-h6)
│   │   ├── Input.jsx               # Reusable number input component
│   │   ├── Label.jsx               # Reusable label component
│   │   ├── TimerDisplay.jsx        # Timer display with formatted time
│   │   ├── ControlButtons.jsx      # Start/Stop/Reset buttons container
│   │   └── TimeSetter.jsx          # Time input controls (minutes/seconds)
│   ├── App.jsx                     # Main app component with timer logic
│   ├── App.css                     # App styles
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles
└── README.md                       # Project documentation
```

## Features

-   **Custom Timer Setting**: Set timer duration using separate minutes and seconds inputs
-   **Real-time Countdown**: Displays time in MM:SS format with zero-padding
-   **Timer Controls**: Start, Stop, and Reset functionality
-   **Disabled Inputs**: Time inputs disabled during countdown to prevent conflicts
-   **Auto-stop**: Timer automatically stops when countdown reaches 00:00
-   **React Hooks**: Uses useState for state management and useEffect for interval handling
-   **Reusable Components**: Generic Button, Input, Label, and Heading components

## Technologies Used

-   React 19
-   Vite
-   JavaScript (ES6+)
-   CSS3

## Live Demo

**Lab 6 - Countdown Timer:** https://web-tech-lab-6.vercel.app/

## Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/nikgrinding/Web-Tech-Lab
    ```
2. Navigate to the project directory:
    ```bash
    cd lab-6
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

-   **React State Management**: Using multiple `useState` hooks to manage timer state (initialTime, timeLeft, isRunning)
-   **React Effects**: Using `useEffect` hook for side effects (setInterval/clearInterval)
-   **Controlled Components**: Form inputs controlled by React state
-   **Conditional Rendering**: Dynamic button display (Start/Stop toggle based on timer state)
-   **Event Handling**: onChange events for inputs, onClick events for buttons
-   **Component Composition**: Breaking down complex UI into small, reusable components
-   **Props Drilling**: Passing state and handlers through component hierarchy
-   **Cleanup Functions**: Proper cleanup of intervals in useEffect return

## How It Works

1. **State Management**: App component maintains three state variables:

    - `initialTime`: The original timer duration (used for reset)
    - `timeLeft`: Current remaining time in seconds
    - `isRunning`: Boolean tracking if timer is active

2. **Timer Logic**:

    - useEffect creates an interval when timer is running
    - Decrements timeLeft by 1 every second
    - Automatically stops when timeLeft reaches 0
    - Cleanup function clears interval on unmount or state change

3. **Time Setting**:

    - Users input minutes and seconds separately
    - Values converted to total seconds: `(minutes × 60) + seconds`
    - Updates both timeLeft (current) and initialTime (for reset)
    - Inputs disabled during countdown

4. **Control Flow**:

    - **Start**: Sets isRunning to true (if timeLeft > 0)
    - **Stop**: Sets isRunning to false (pauses countdown)
    - **Reset**: Stops timer and restores timeLeft to initialTime

5. **Display Formatting**:
    - Converts total seconds back to minutes and seconds
    - Formats with zero-padding (e.g., 05:09)
