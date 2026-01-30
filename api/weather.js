// api/weather.js
// This is a serverless function that runs on Vercel's servers
// It keeps your API key secret!

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get the city from the query parameters
    // Example: /api/weather?city=London
    const { city } = req.query;

    // Validate that city was provided
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }

    // Get API key from environment variable (stored securely on Vercel)
    const API_KEY = process.env.OPENWEATHER_API_KEY;

    if (!API_KEY) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        // Build the OpenWeatherMap API URL
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

        // Fetch weather data from OpenWeatherMap
        const response = await fetch(url);

        // If OpenWeatherMap returns an error, pass it through
        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json(errorData);
        }

        // Get the weather data
        const data = await response.json();

        // Return the weather data to the frontend
        // Set CORS headers to allow your frontend to access this
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.status(200).json(data);

    } catch (error) {
        // If anything goes wrong, return an error
        console.error('Error fetching weather:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
}
