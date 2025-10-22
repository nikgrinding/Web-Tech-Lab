# Web Technology Lab - Lab 10 (Vercel Deployment)

## Overview

This is the Vercel-compatible version of Lab 10 - a Node.js web application adapted to use Vercel serverless functions for serving static HTML/CSS files. The app demonstrates file system operations in a serverless environment, serving HTML pages from disk, and proper static asset handling with Vercel's public folder.

## Project Structure

```
lab-10-vercel/
├── api/
│   ├── index.js            # Serverless function for home page
│   └── about.js            # Serverless function for about page
├── public/
│   ├── index.html          # Home page HTML
│   ├── about.html          # About page HTML
│   └── styles.css          # CSS stylesheet (served automatically by Vercel)
├── vercel.json             # Vercel configuration for routing
├── package.json            # Project metadata
└── README.md               # Project documentation
```

## Key Differences from Original Lab 10

-   **Public Folder**: CSS and static assets served automatically from `public/` folder
-   **Serverless Functions**: HTML pages served via serverless functions with `fs.readFile()`
-   **No Error Logging**: Removed logger.cjs (serverless functions are stateless, logs go to Vercel)
-   **No fileHandler Module**: File reading logic integrated directly into serverless functions
-   **Automatic Static Serving**: `styles.css` served directly by Vercel from public folder
-   **Clean URLs**: Vercel handles routing via `vercel.json` rewrites

## Technologies Used

-   Node.js (Vercel serverless runtime with `fs` and `path` modules)
-   JavaScript (CommonJS modules)
-   HTML5
-   CSS3 (external stylesheet)
-   Vercel (deployment platform)

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```

2. Navigate to the project directory:
    ```bash
    cd lab-10-vercel
    ```

3. Deploy to Vercel:
    ```bash
    vercel
    ```

4. Follow the prompts to link/create a project

### Option 2: Deploy via Git

1. Push this folder to a GitHub repository

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Set **Root Directory** to `lab-10-vercel`

5. Click "Deploy"

## Local Development

1. Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```

2. Navigate to the project directory:
    ```bash
    cd lab-10-vercel
    ```

3. Run local development server:
    ```bash
    vercel dev
    ```

4. Open your browser and navigate to `http://localhost:3000`

## How It Works

### Serverless Functions for HTML

Each HTML page has a corresponding serverless function:
-   `api/index.js` → reads and serves `public/index.html`
-   `api/about.js` → reads and serves `public/about.html`

**Function Structure:**
```javascript
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filePath = path.join(__dirname, '../public/index.html');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error:', err.message);
            res.status(200).send('<h1>Fallback content</h1>');
        } else {
            res.status(200).send(data);
        }
    });
};
```

### Static File Serving

Vercel automatically serves files from the `public/` folder:
-   `public/styles.css` → accessible at `/styles.css`
-   No serverless function needed for CSS
-   Vercel handles caching and optimization

### Vercel Routing

The `vercel.json` file configures URL rewrites:
```json
{
  "rewrites": [
    { "source": "/", "destination": "/api/index" },
    { "source": "/home", "destination": "/api/index" },
    { "source": "/about", "destination": "/api/about" }
  ]
}
```

This creates clean URLs:
-   User visits `/` → Vercel routes to `/api/index`
-   User visits `/about` → Vercel routes to `/api/about`
-   User requests `/styles.css` → Vercel serves from `public/styles.css`

## Routes

```
GET /                       → Home page (api/index.js)
GET /home                   → Home page (api/index.js)
GET /about                  → About page (api/about.js)
GET /styles.css             → CSS stylesheet (public/styles.css, auto-served)
```

## Features

-   **File System in Serverless**: Demonstrates `fs.readFile()` in Vercel functions
-   **Public Folder**: Automatic static asset serving by Vercel
-   **Error Handling**: Graceful fallback if HTML files can't be read
-   **Clean URLs**: User-friendly URLs without `/api/` prefix
-   **Global CDN**: Fast delivery worldwide via Vercel's edge network
-   **HTTPS by Default**: Automatic SSL certificates
-   **Zero Configuration**: Minimal setup required

## Error Handling

### File Read Errors
-   Error logged to console (visible in Vercel dashboard logs)
-   User receives fallback HTML content
-   Function doesn't crash - returns 200 status with fallback

### Missing Files
-   If HTML missing: shows basic fallback message
-   If CSS missing: Vercel returns 404 automatically
-   Console logs help debug via Vercel dashboard

## Vercel vs Traditional Server

| Feature | Traditional Server (lab-10) | Vercel Serverless (lab-10-vercel) |
|---------|-----------------------------|------------------------------------|
| HTML Serving | fs.readFile in server.cjs | fs.readFile in serverless functions |
| CSS Serving | Manual route + fs.readFile | Automatic from public/ folder |
| Error Logging | error.log file | Console logs (Vercel dashboard) |
| File Handler | Separate module | Integrated in functions |
| Logger Module | logger.cjs | Not needed (use console.error) |
| Static Files | Manual handling | Automatic via public/ folder |
| Deployment | Requires hosting | One-click Vercel deployment |

## Why File Reading in Serverless?

Even though serverless functions can generate HTML inline (like lab-9-vercel), this lab demonstrates:
1. **File System Access**: Shows you can still use `fs` in serverless
2. **Separation**: Keeps HTML separate from JavaScript logic
3. **Realistic Workflow**: Mimics traditional server behavior
4. **Flexibility**: Easier to edit HTML without touching function code

## Important Notes

### Serverless Limitations
-   **No Persistent Logs**: Can't write to `error.log` (use console.error instead)
-   **Read-Only File System**: Can read files but can't write during runtime
-   **Stateless**: Each request is independent
-   **Cold Starts**: First request may be slower

### Vercel Public Folder
-   Files in `public/` are served automatically at root path
-   No serverless function needed for static files (CSS, images, etc.)
-   Cached at the edge for fast delivery
-   Can include fonts, images, favicon.ico, etc.

## Deployment Steps Summary

1. **Set Root Directory**: In Vercel settings, set root to `lab-10-vercel`
2. **Auto-Detection**: Vercel detects the `vercel.json` configuration
3. **Build**: No build step needed (pure Node.js functions)
4. **Deploy**: Functions deployed to edge, public files to CDN
5. **Access**: Visit your `.vercel.app` URL

## Logging in Vercel

-   Use `console.log()` or `console.error()` in functions
-   View logs in Vercel dashboard under "Functions" → "Logs"
-   Logs are streamed in real-time during development
-   Production logs available for debugging

## Best Practices

1. **Use Public Folder**: Put all static assets (CSS, images) in `public/`
2. **Error Handling**: Always handle `fs.readFile()` errors gracefully
3. **Console Logging**: Use console methods instead of log files
4. **Path Resolution**: Use `path.join(__dirname, ...)` for file paths
5. **Fallback Content**: Provide meaningful fallback if files can't be read
