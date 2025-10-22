# Web Technology Lab - Lab 7

## Overview

This repository contains a multi-page React portfolio application demonstrating React Router for client-side navigation, component reusability, and data-driven rendering. The app features a personal portfolio with multiple sections (Education, Skills, Projects, Experience, Achievements) and includes two interactive apps from previous labs (Thermostat from Lab 5 and Timer from Lab 6) integrated as separate pages.

## Project Structure

```
lab-7/
├── src/
│   ├── pages/
│   │   ├── Home.jsx                # Home/About page with introduction
│   │   ├── Education.jsx           # Education background page
│   │   ├── Skills.jsx              # Skills and technologies page
│   │   ├── Projects.jsx            # Projects portfolio page
│   │   ├── Experience.jsx          # Work experience page
│   │   ├── Achievements.jsx        # Achievements and certifications page
│   │   ├── Thermostat.jsx          # Temperature converter (from Lab 5)
│   │   ├── Thermostat.css          # Thermostat page styles
│   │   ├── Timer.jsx               # Countdown timer (from Lab 6)
│   │   └── Timer.css               # Timer page styles
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar with route links
│   │   ├── PageSection.jsx         # Reusable page section container
│   │   ├── ListItem.jsx            # Reusable list item for content display
│   │   ├── Heading.jsx             # Dynamic heading component (h1-h6)
│   │   ├── Button.jsx              # Reusable button component
│   │   ├── Input.jsx               # Reusable input component
│   │   ├── Label.jsx               # Reusable label component
│   │   ├── ControlButton.jsx       # Control button for thermostat
│   │   ├── ControlButtons.jsx      # Button group for timer
│   │   ├── TemperatureDisplay.jsx  # Temperature display for thermostat
│   │   ├── TemperatureControls.jsx # Temperature control buttons
│   │   ├── TimerDisplay.jsx        # Timer countdown display
│   │   └── TimeSetter.jsx          # Timer input controls
│   ├── data.js                     # Portfolio data (education, skills, etc.)
│   ├── App.jsx                     # Main app with routing configuration
│   ├── main.jsx                    # React entry point with BrowserRouter
│   └── index.css                   # Global styles
└── README.md                       # Project documentation
```

## Features

-   **Multi-page Navigation**: Client-side routing with React Router for seamless page transitions
-   **Portfolio Sections**: Dedicated pages for Education, Skills, Projects, Experience, and Achievements
-   **Data-Driven Content**: Centralized data management in data.js file
-   **Integrated Apps**: Previous lab projects (Thermostat and Timer) as functional pages
-   **Responsive Navbar**: Persistent navigation bar across all pages
-   **Reusable Components**: Generic components (PageSection, ListItem) for consistent UI
-   **Component Composition**: Clean separation of pages, components, and data

## Technologies Used

-   React 19
-   React Router DOM v6
-   Vite
-   JavaScript (ES6+)
-   CSS3

## Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/nikgrinding/Web-Tech-Lab
    ```
2. Navigate to the project directory:
    ```bash
    cd lab-7
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

-   **React Router**: Client-side routing with BrowserRouter, Routes, Route, and Link components
-   **Single Page Application (SPA)**: No full page reloads when navigating between pages
-   **Component Reusability**: Generic components used across multiple pages
-   **Data Separation**: Portfolio data stored separately from components
-   **Nested Routing**: Routes configured in App component with centralized navigation
-   **Link Component**: Declarative navigation using React Router's Link component
-   **Route Parameters**: Dynamic route matching and component rendering
-   **Code Organization**: Clear separation of pages, components, and data files

## How It Works

1. **Routing Setup**:

    - `BrowserRouter` wraps the entire app in main.jsx
    - Routes defined in App.jsx using `Routes` and `Route` components
    - Each route maps a URL path to a page component

2. **Navigation**:

    - Navbar component uses `Link` components for client-side navigation
    - Clicking links updates the URL and renders the corresponding page
    - No full page reload, only the page content changes

3. **Data Flow**:

    - Portfolio data exported from data.js (education, skills, projects, etc.)
    - Page components import relevant data arrays
    - Data mapped to ListItem components for display

4. **Page Structure**:
    - Most pages use PageSection wrapper for consistent layout
    - ListItem component renders individual content items
    - Thermostat and Timer pages are self-contained with their own state management

## Route Configuration

```
/ (Home)                    → About/Introduction page
/education                  → Education background
/skills                     → Technical skills
/projects                   → Project portfolio
/experience                 → Work experience
/achievements               → Certifications and achievements
/Thermostat                 → Temperature converter app (Lab 5)
/Timer                      → Countdown timer app (Lab 6)
```

## Previous Labs Integration

-   **Lab 5 (Thermostat)**: Temperature converter with Celsius/Fahrenheit toggle, accessible at `/Thermostat`
-   **Lab 6 (Timer)**: Countdown timer with start/stop/reset controls, accessible at `/Timer`
