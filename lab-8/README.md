# Web Technology Lab - Lab 8

## Overview

This repository contains a React blog dashboard application demonstrating React Bootstrap integration, API data fetching, and responsive grid layouts. The app features a homepage and a posts page that fetches data from the JSONPlaceholder API and displays blog posts in a responsive card grid with random images from Lorem Picsum.

## Project Structure

```
lab-8/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx            # Landing page with welcome message
│   │   └── PostsPage.jsx           # Posts page with API data fetching
│   ├── components/
│   │   ├── NavigationBar.jsx       # Bootstrap Navbar with routing
│   │   └── PostCard.jsx            # Bootstrap Card for individual posts
│   ├── App.jsx                     # Main app with routing configuration
│   └── main.jsx                    # React entry point with Bootstrap import
└── README.md                       # Project documentation
```

## Features

-   **React Bootstrap Integration**: Modern, responsive UI using React Bootstrap components
-   **API Data Fetching**: Asynchronous data fetching from JSONPlaceholder API using fetch
-   **Responsive Grid Layout**: Bootstrap Grid system (Container, Row, Col) for responsive post display
-   **Card Components**: Bootstrap Cards with images, titles, descriptions, and buttons
-   **Sticky Navigation**: Persistent navbar with routing links and action buttons
-   **Random Images**: Dynamic images from Lorem Picsum API for visual appeal
-   **Error Handling**: Try-catch blocks for API error management
-   **React Router**: Client-side navigation between Home and Posts pages

## Technologies Used

-   React 19
-   React Bootstrap 2.x
-   React Router DOM v6
-   Bootstrap 5 (via React Bootstrap)
-   Vite
-   JavaScript (ES6+)

## APIs Used

-   **JSONPlaceholder**: Free fake REST API for posts data (`https://jsonplaceholder.typicode.com/posts`)
-   **Lorem Picsum**: Random placeholder images (`https://picsum.photos/`)

## Live Demo

**Lab 8 - Blog Dashboard with React Bootstrap:** https://web-tech-lab-8.vercel.app/

## Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/nikgrinding/Web-Tech-Lab
    ```
2. Navigate to the project directory:
    ```bash
    cd lab-8
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

-   **React Bootstrap**: Using pre-built Bootstrap components (Navbar, Nav, Container, Row, Col, Card, Button)
-   **Async/Await**: Modern JavaScript async operations for API calls
-   **useEffect Hook**: Side effects for data fetching on component mount
-   **useState Hook**: Managing fetched data in component state
-   **Array Methods**: Using `.slice()` and `.map()` for data transformation and rendering
-   **Destructuring**: Object destructuring in component props and API responses
-   **Error Handling**: Try-catch blocks for graceful error management
-   **Responsive Design**: Bootstrap Grid system for mobile-first layouts
-   **Component Props**: Passing post data to child components

## How It Works

1. **Bootstrap Integration**:

    - Bootstrap CSS imported in main.jsx
    - React Bootstrap components used throughout the app
    - Responsive utilities for different screen sizes

2. **Navigation**:

    - NavigationBar component uses React Bootstrap's Navbar
    - Sticky navbar stays at the top while scrolling
    - Links integrated with React Router using `as={Link}`
    - Sign In and Register buttons (UI only, no functionality)

3. **Data Fetching (PostsPage)**:

    - useEffect triggers on component mount
    - Async function fetches data from JSONPlaceholder API
    - Response parsed as JSON and transformed
    - First 12 posts extracted using `.slice(0, 12)`
    - State updated with mapped post objects

4. **Posts Display**:

    - Bootstrap Grid (Container → Row → Col) for responsive layout
    - Col breakpoints: lg={4} (3 columns), md={6} (2 columns), sm={12} (1 column)
    - PostCard component renders each post in a Bootstrap Card
    - Random images generated using post ID as seed

5. **Card Structure**:
    - Card.Img: Random image from Lorem Picsum
    - Card.Body: Title, description, and "Read More" button
    - Flexbox utilities for consistent card heights

## Bootstrap Components Used

-   **Navbar**: Navigation bar with brand, links, and buttons
-   **Nav**: Navigation links and buttons
-   **Container**: Responsive fixed-width container
-   **Row**: Bootstrap grid row
-   **Col**: Responsive grid columns with breakpoints
-   **Card**: Content cards with image, body, title, text, and button
-   **Button**: Styled buttons with variants (primary, outline-light)

## Route Configuration

```
/ (Home)                    → HomePage (Welcome message)
/posts                      → PostsPage (Blog posts from API)
```

## API Response Structure

**JSONPlaceholder Posts API**:

```json
{
	"userId": 1,
	"id": 1,
	"title": "Post title",
	"body": "Post content..."
}
```

**Transformed Data**:

```javascript
{
  id: post.id,
  title: post.title,
  description: post.body
}
```
