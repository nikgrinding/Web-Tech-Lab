# Web Technology Lab - Lab 9

## Overview

This repository contains a Node.js blog application built with vanilla Node.js HTTP server (no frameworks). The app demonstrates server-side routing, request handling, HTML generation, and modular code organization. It features a home page, a posts page that dynamically renders blog posts from data, and a custom 404 error page for invalid routes.

## Project Structure

```
lab-9/
├── server.cjs              # Main HTTP server entry point
├── router.cjs              # URL routing logic
├── handlers/
│   ├── homePageHandler.cjs     # Home page request handler
│   ├── postsPageHandler.cjs    # Posts page request handler with dynamic rendering
│   └── notFoundPageHandler.cjs # 404 error page handler
├── data/
│   └── posts.cjs           # Blog posts data array
└── README.md               # Project documentation
```

## Features

-   **Vanilla Node.js HTTP Server**: Built using only Node.js `http` module (no Express or other frameworks)
-   **Server-Side Routing**: Custom router that maps URLs to handlers based on request method and path
-   **Dynamic HTML Generation**: HTML pages generated programmatically in JavaScript
-   **Inline CSS Styling**: Complete styling embedded within HTML responses
-   **Data-Driven Content**: Posts page dynamically renders content from data module
-   **404 Error Handling**: Custom error page for invalid routes
-   **Modular Architecture**: Clean separation of concerns (server, router, handlers, data)
-   **Navigation Bar**: Persistent navigation across all pages

## Technologies Used

-   Node.js (built-in `http` module)
-   JavaScript (ES6+ with CommonJS modules)
-   HTML5
-   CSS3 (inline styles)

## Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/nikgrinding/Web-Tech-Lab
    ```
2. Navigate to the project directory:
    ```bash
    cd lab-9
    ```
3. Run the server:
    ```bash
    node server.cjs
    ```
4. Open your browser and navigate to `http://localhost:3000`

## Key Concepts Demonstrated

-   **Node.js HTTP Server**: Creating a server with `http.createServer()`
-   **Request Handling**: Parsing `req.url` and `req.method` for routing
-   **Response Writing**: Using `res.writeHead()` and `res.end()` to send responses
-   **Modular Design**: Separating server, router, handlers, and data into distinct modules
-   **CommonJS Modules**: Using `require()` and `module.exports` for modular code
-   **Template Strings**: Multi-line HTML generation using JavaScript template literals
-   **Array Mapping**: Using `.map()` and `.join()` to dynamically generate HTML from data
-   **HTTP Status Codes**: Setting appropriate status codes (200 for success, 404 for not found)
-   **Content-Type Headers**: Setting correct MIME types for HTML responses

## How It Works

1. **Server Initialization** (server.cjs):

    - Creates HTTP server using `http.createServer()`
    - Passes all requests to the router function
    - Listens on port 3000

2. **Routing Logic** (router.cjs):

    - Extracts `url` and `method` from request object
    - Routes based on URL patterns:
        - `GET /` → homePageHandler
        - `GET /posts` → postsPageHandler
        - All other routes → notFoundPageHandler
    - Returns appropriate handler response

3. **Request Handlers**:

    - **homePageHandler**: Returns welcome page with navigation
    - **postsPageHandler**: Reads posts data, maps to HTML, and embeds in page
    - **notFoundPageHandler**: Returns 404 error page with red error message

4. **Dynamic Posts Rendering**:
    - Posts data imported from `data/posts.cjs`
    - Each post object has `title`, `description`, and `content`
    - `.map()` transforms each post into HTML div with styled elements
    - `.join('')` combines all post HTML into single string
    - Final HTML injected into template using template literal interpolation

## Routes

```
GET /                       → Home page with welcome message
GET /posts                  → Posts page with blog posts
GET /* (any other)          → 404 Not Found error page
```

## Data Structure

**Posts Array** (data/posts.cjs):

```javascript
[
	{
		title: 'Post Title',
		description: 'Brief description of the post',
		content: 'Full post content text...',
	},
	// ... more posts
];
```

## Page Styling

All pages share consistent styling:

-   **Dark Theme**: Dark gray background (`rgb(40, 40, 40)`) with white text
-   **Centered Layout**: 600px width centered content
-   **Navigation Bar**: Dark blue rounded navbar with flexbox layout
-   **Active Page Indicator**: Underlined link for current page
-   **Post Cards**: Wheat-colored borders with rounded corners
-   **Typography**: Different colors for titles (white), descriptions (wheat), and content
-   **404 Page**: Red error heading for visual emphasis

## Handler Details

### homePageHandler.cjs

-   Sets 200 status code and HTML content type
-   Returns full HTML page with welcome message
-   Includes navigation with "Home" underlined
-   Prompts user to visit Posts page

### postsPageHandler.cjs

-   Sets 200 status code and HTML content type
-   Imports posts data from `data/posts.cjs`
-   Maps posts array to HTML divs with title, description, and content
-   Returns complete HTML page with dynamically generated posts
-   Includes navigation with "Posts" underlined

### notFoundPageHandler.cjs

-   Sets 404 status code and HTML content type
-   Returns error page with red heading
-   Provides navigation to valid pages
-   Helps users recover from invalid URLs
