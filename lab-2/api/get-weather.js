// Vercel serverless function to securely fetch weather data
export default async function handler(req, res) {
  // Get the secret API key from Vercel's environment variables
  const API_KEY = process.env.WEATHER_API_KEY;

  // Get the city name from query parameters
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}
