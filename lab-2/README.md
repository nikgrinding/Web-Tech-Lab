# Weather Dashboard

A simple weather dashboard that fetches and displays current weather data for a city using the OpenWeatherMap API.

## Features

-   Search for current weather in any city.
-   Displays temperature, humidity, and wind speed.
-   Dynamic weather icons that change based on the weather conditions.
-   Clean, responsive user interface.
-   Error handling for invalid city names.

## Technologies Used

-   **HTML5** for the structure
-   **CSS3** for styling
-   **JavaScript** for functionality
-   **Fetch API** with **async/await** for making API requests
-   **OpenWeatherMap API** for weather data

## Local Testing

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Set up environment variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and add your OpenWeatherMap API key

### Step 3: Run locally
```bash
cd lab-2
vercel dev
```

This will start a local server (usually at `http://localhost:3000`) with your serverless functions working!

## Deployment on Vercel

### Step 1: Get OpenWeatherMap API Key
1. Go to https://openweathermap.org/api
2. Sign up and get your free API key

### Step 2: Deploy to Vercel
1. Push your code to GitHub
2. Go to https://vercel.com and import your repository
3. Select the `lab-2` folder as the root directory
4. Add environment variable:
   - Key: `WEATHER_API_KEY`
   - Value: Your OpenWeatherMap API key
5. Deploy!

### How it works
- The API key is stored securely in Vercel's environment variables
- The frontend calls `/api/get-weather?city=<cityname>`
- The serverless function (`api/get-weather.js`) fetches weather data with the hidden API key
- Your API key is never exposed to the browser