# Web Technology Lab - Lab 4

## Overview

This repository contains a React application demonstrating component hierarchy, props passing, and functional component design. The lab focuses on building three distinct UI sections using only functional components and props without state management or events.

## Objective

For the given UI designs, the following tasks were performed:

-   Identified main React components (parent and child components)
-   Listed props received by each component
-   Designed component hierarchy with parent-child relationships
-   Implemented using only functional components and props

## Project Structure

```
lab-4/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx           # Search input component
│   │   ├── ProductTable.jsx        # Product table container
│   │   ├── ProductCategoryRow.jsx  # Category grouping component
│   │   ├── ProductRow.jsx          # Individual product row
│   │   ├── ItemList.jsx            # Generic grocery list component
│   │   ├── ItemCard.jsx            # Individual grocery item card
│   │   ├── AnimalList.jsx          # Animal list container
│   │   └── AnimalCard.jsx          # Individual animal card
│   ├── data/
│   │   ├── productsData.js         # Product data array
│   │   ├── groceriesData.js        # Fruits and vegetables data
│   │   └── animalData.js           # Animals data array
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # App styles
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles
└── README.md                       # Project documentation
```

## Features

-   **Product Table**: Displays products grouped by category with visual distinction for out-of-stock items (red text)
-   **Grocery Lists**: Side-by-side display of fruits and vegetables with their calorie values
-   **Animal Cards**: Comprehensive animal information cards with name, scientific name, weight, and diet
-   **Component Reusability**: Generic components (ItemList, ItemCard) reused for different data
-   **Props-based Data Flow**: All data passed through props from parent to child components

## Technologies Used

-   React 18
-   Vite
-   JavaScript (ES6+)
-   CSS3

## Live Demo

**Lab 4 - React Components:** https://web-tech-lab-4.vercel.app/

## Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/nikgrinding/Web-Tech-Lab
    ```
2. Navigate to the project directory:
    ```bash
    cd lab-4
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

-   **Functional Components**: All components are functional components using modern React syntax
-   **Props Passing**: Data flows from parent to child components via props
-   **Component Composition**: Breaking down UI into reusable, composable components
-   **List Rendering**: Using `.map()` to render arrays of data with unique keys
-   **Conditional Rendering**: Displaying different styles based on data (stocked vs out-of-stock products)
-   **Component Hierarchy**: Clear parent-child relationships and data flow

## Design Patterns

-   **Container/Presentational Pattern**: List components (containers) manage data flow to Card components (presentation)
-   **Single Responsibility**: Each component has a clear, focused purpose
-   **DRY Principle**: Reusable components (ItemList, ItemCard) prevent code duplication
