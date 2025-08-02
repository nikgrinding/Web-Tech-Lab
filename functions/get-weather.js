// functions/get-weather.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Get the secret API key from Netlify's settings
  const API_KEY = process.env.WEATHER_API_KEY;
  
  // Get the city name that the frontend sends
  const city = event.queryStringParameters.city;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return { 
      statusCode: 200, 
      body: JSON.stringify(data) 
    };
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: 'Failed to fetch weather data' }) 
    };
  }
};