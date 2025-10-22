# Web Technology Lab - Lab 9 (Vercel Deployment)

## Overview

This is the Vercel-compatible version of Lab 9 - a Node.js blog application adapted to use Vercel serverless functions. The app demonstrates server-side routing using Vercel's file-based routing, serverless function handlers, and dynamic HTML generation. It features a home page and a posts page that dynamically renders blog posts from data.

## Project Structure

```
lab-9-vercel/
├── api/
│   ├── index.js            # Serverless function for home page (/)
│   └── posts.js            # Serverless function for posts page (/posts)
├── data/
│   └── posts.js            # Blog posts data array
├── vercel.json             # Vercel configuration for routing
├── package.json            # Project metadata
└── README.md               # Project documentation
```

## Key Differences from Original Lab 9

-   **Serverless Functions**: Uses Vercel serverless functions instead of traditional Node.js HTTP server
-   **File-based Routing**: Routes determined by file location in `api/` folder
-   **Vercel Configuration**: `vercel.json` handles URL rewrites for clean URLs
-   **ES Modules Compatible**: Works with both CommonJS and ES modules
-   **No Server File**: No need for server.cjs or router.cjs - Vercel handles this

## Technologies Used

-   Node.js (Vercel serverless runtime)
-   JavaScript (CommonJS modules)
-   HTML5
-   CSS3 (inline styles)
-   Vercel (deployment platform)

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```

2. Navigate to the project directory:
    ```bash
    cd lab-9-vercel
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

4. Vercel will automatically detect the configuration

5. Click "Deploy"

## Local Development

1. Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```

2. Navigate to the project directory:
    ```bash
    cd lab-9-vercel
    ```

3. Run local development server:
    ```bash
    vercel dev
    ```

4. Open your browser and navigate to `http://localhost:3000`

## How It Works

### Serverless Functions

Each file in the `api/` folder becomes a serverless function:
-   `api/index.js` → handles requests to `/`
-   `api/posts.js` → handles requests to `/posts`

### Vercel Routing

The `vercel.json` file configures URL rewrites:
```json
{
  "rewrites": [
    { "source": "/", "destination": "/api/index" },
    { "source": "/posts", "destination": "/api/posts" }
  ]
}
```

This creates clean URLs without the `/api/` prefix.

### Function Structure

Each serverless function exports a handler:
```javascript
module.exports = (req, res) => {
  res.status(200).send('<html>...</html>');
};
```

-   `req`: HTTP request object
-   `res`: HTTP response object with methods like `.status()` and `.send()`

### Dynamic Content Rendering

The posts page imports data and generates HTML:
1. Imports posts array from `data/posts.js`
2. Uses `.map()` to transform each post into HTML
3. Uses `.join('')` to combine all post HTML
4. Injects into template using template literals

## Routes

```
GET /                       → Home page (api/index.js)
GET /posts                  → Posts page (api/posts.js)
```

## Features

-   **Serverless Architecture**: Functions scale automatically with traffic
-   **Global CDN**: Content delivered from edge locations worldwide
-   **Zero Configuration**: Vercel auto-detects and deploys
-   **Instant Deployments**: Deploy in seconds with CLI or Git
-   **HTTPS by Default**: Automatic SSL certificates
-   **Custom Domains**: Easy to add custom domain names

## Advantages of Vercel Deployment

1. **No Server Management**: No need to maintain servers
2. **Automatic Scaling**: Handles traffic spikes automatically
3. **Global Performance**: Edge network for fast loading worldwide
4. **Easy Rollbacks**: Instant rollback to previous deployments
5. **Preview Deployments**: Every Git push gets a preview URL
6. **Zero Downtime**: Deployments happen without downtime

## Vercel vs Traditional Server

| Feature | Traditional Server (lab-9) | Vercel Serverless (lab-9-vercel) |
|---------|---------------------------|-----------------------------------|
| Deployment | Requires hosting service | One-click deployment |
| Scaling | Manual server scaling | Automatic scaling |
| Server Code | server.cjs, router.cjs | Not needed (Vercel handles it) |
| Routing | Custom router function | File-based + vercel.json |
| Cost | Always running (even idle) | Pay per request (free tier) |
| Maintenance | Server updates required | Managed by Vercel |

## Notes

-   Serverless functions have a cold start delay on first request
-   Each function has a maximum execution time (10 seconds on free tier)
-   State is not preserved between requests (stateless)
-   File system access is limited in serverless environment
