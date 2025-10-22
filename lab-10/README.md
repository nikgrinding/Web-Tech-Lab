# Web Technology Lab - Lab 10

## Overview

This repository contains a Node.js web application demonstrating file system operations, asynchronous file reading, error logging, and serving static HTML/CSS files. The app features modular code organization with separate modules for server logic, file handling, and error logging. It serves static HTML pages (home and about) and CSS stylesheets using Node.js `fs` module.

## Project Structure

```
lab-10/
├── server.cjs              # Main HTTP server with routing logic
├── fileHandler.cjs         # File reading module with error handling
├── logger.cjs              # Error logging module (writes to error.log)
├── index.html              # Home page HTML
├── about.html              # About page HTML
├── styles.css              # Shared CSS stylesheet
├── error.log               # Error log file (auto-generated)
└── README.md               # Project documentation
```

## Features

-   **File System Operations**: Reading HTML and CSS files from disk using `fs.readFile()`
-   **Asynchronous File Reading**: Non-blocking file operations with callbacks
-   **Error Logging**: Automatic logging of file read errors to `error.log` with timestamps
-   **Static File Serving**: Serving HTML pages and CSS stylesheets
-   **Proper Content-Type Headers**: Setting correct MIME types for HTML and CSS
-   **404 Error Handling**: Custom 404 page for invalid routes
-   **Modular Design**: Separation of concerns across multiple modules
-   **Path Resolution**: Using `path.join()` for cross-platform file path handling
-   **External Stylesheets**: HTML pages link to external CSS file

## Technologies Used

-   Node.js (built-in modules: `http`, `fs`, `path`, `url`)
-   JavaScript (ES6+ with CommonJS modules)
-   HTML5
-   CSS3 (external stylesheet)

## Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/nikgrinding/Web-Tech-Lab
    ```
2. Navigate to the project directory:
    ```bash
    cd lab-10
    ```
3. Run the server:
    ```bash
    node server.cjs
    ```
4. Open your browser and navigate to `http://localhost:3000`

## Key Concepts Demonstrated

-   **File System Module**: Using `fs.readFile()` for reading file contents
-   **Asynchronous Operations**: Callback-based file reading (non-blocking I/O)
-   **Path Module**: Using `path.join(__dirname, filename)` for reliable file paths
-   **URL Parsing**: Using `url.parse()` to extract pathname from request URL
-   **Error Handling**: Try-catch equivalent with callback error parameters
-   **Error Logging**: Appending errors to log file with `fs.appendFile()`
-   **Timestamps**: Using `new Date().toISOString()` for log timestamps
-   **Content-Type Headers**: Setting `text/html` for HTML and `text/css` for CSS
-   **Static File Serving**: Reading files from disk and sending as response
-   **Modular Code**: Exporting and requiring custom modules

## How It Works

### 1. Server Initialization (server.cjs)

-   Creates HTTP server with `http.createServer()`
-   Parses incoming request URL using `url.parse()`
-   Routes based on pathname:
    -   `/` or `/home` → serves `index.html`
    -   `/about` → serves `about.html`
    -   `/styles.css` → serves `styles.css`
    -   All other routes → 404 error
-   Listens on port 3000

### 2. File Handler Module (fileHandler.cjs)

-   Exports `readHTML` function that reads any file
-   Takes `filename` and `callback` as parameters
-   Uses `path.join(__dirname, filename)` to construct file path
-   Calls `fs.readFile()` with UTF-8 encoding
-   On error: logs to error.log and returns null
-   On success: returns file content via callback

### 3. Logger Module (logger.cjs)

-   Exports `logError` function for error logging
-   Creates timestamp using `new Date().toISOString()`
-   Formats log message: `[timestamp] error message`
-   Appends to `error.log` file using `fs.appendFile()`
-   Handles append errors by logging to console

## Routes

```
GET /                       → Home page (index.html)
GET /home                   → Home page (index.html)
GET /about                  → About page (about.html)
GET /styles.css             → CSS stylesheet
GET /* (any other)          → 404 Not Found
```

## File Contents

### index.html

-   Home page with welcome message
-   Navigation bar with links to Home and About
-   Links external `styles.css` stylesheet
-   Active page indicator (underlined "Home")

### about.html

-   About page with information
-   Same navigation structure as home page
-   Active page indicator (underlined "About us")

### styles.css

-   Dark theme styling (`rgb(40, 40, 40)` background)
-   Centered layout (600px width)
-   Blue rounded navbar with flexbox
-   Typography and spacing styles
-   Active page indicators (underline)

### error.log

-   Auto-generated file for error logging
-   Format: `[ISO timestamp] error message`
-   Example: `[2025-01-15T10:30:45.123Z] Error reading index.html: ENOENT: no such file or directory`

## Error Handling

### File Read Errors

-   Logged to `error.log` with timestamp
-   User receives fallback content
-   Server continues running (doesn't crash)

### Missing Files

-   If HTML file missing: shows basic HTML with message
-   If CSS file missing: responds with 404 and plain text error
-   If invalid route: shows 404 Not Found page

### Logging Errors

-   If log file write fails: error printed to console
-   Server continues operating normally

## Module Details

### server.cjs

-   Main server file
-   Handles routing and response sending
-   Uses both `fileHandler` and implicitly triggers `logger`

### fileHandler.cjs

-   Reads files asynchronously
-   Handles file system errors
-   Calls logger when errors occur

### logger.cjs

-   Appends errors to log file
-   Adds ISO timestamps
-   Handles append errors gracefully
