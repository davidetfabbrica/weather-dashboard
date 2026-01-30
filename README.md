# 🌤️ Weather Dashboard

A clean, responsive web application that displays real-time weather information for any city worldwide.

![Weather Dashboard](https://img.shields.io/badge/status-active-success.svg)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Future Enhancements](#future-enhancements)
- [Known Limitations](#known-limitations)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## ✨ Features

- **Real-time Weather Data**: Fetches current weather information from OpenWeatherMap API
- **City Search**: Search for weather by city name with instant results
- **Comprehensive Information**: Displays temperature, "feels like" temperature, humidity, wind speed, and weather conditions
- **Input Validation**: Prevents empty searches and provides helpful error messages
- **Error Handling**: Graceful handling of invalid cities and API errors
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Loading States**: Visual feedback while fetching data
- **Smooth Animations**: Elegant fade-in effects for weather display
- **Keyboard Support**: Press Enter to search (no need to click the button)
- **Dark and Light modes**: Click moon/sun icon to toggle between modes

## Security Features
- API key stored securely as environment variable on Vercel
- Backend serverless function proxies weather requests
- No sensitive credentials exposed to client

## 🎬 Demo

### How It Works

1. Enter any city name in the search box
2. Click "Search" or press Enter
3. View current weather conditions instantly

### Example Cities to Try

- London
- Tokyo
- New York
- São Paulo
- Sydney

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox, Grid, gradients, and animations
- **JavaScript (ES6+)**: Async/await, Fetch API, DOM manipulation
- **OpenWeatherMap API**: Real-time weather data
- **Git**: Version control

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)
- An OpenWeatherMap API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Get your free API key**
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to "My API Keys"
   - Copy your API key

3. **Configure the API key**
   - Open `index.html` in your text editor
   - Find line with: `const API_KEY = 'YOUR_API_KEY_HERE';`
   - Replace `YOUR_API_KEY_HERE` with your actual API key
   - Save the file

4. **Run the application**
   - Simply open `index.html` in your web browser
   - No server or build process required!

## 📖 Usage

### Basic Search
1. Type a city name in the input field
2. Click the "Search" button or press Enter
3. Weather information appears instantly

### Features in Action

**Valid Search:**
- Shows city name with country code
- Displays current temperature in Celsius
- Shows weather description (e.g., "clear sky", "light rain")
- Includes feels-like temperature, humidity percentage, and wind speed

**Invalid Search:**
- Empty input: "Please enter a city name"
- City not found: "City not found. Please check spelling and try again."
- API errors: Helpful error messages guide you to resolve issues

## 📁 Project Structure

```
weather-dashboard/
├── index.html          # Main HTML file (contains HTML, CSS, and JavaScript)
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

### Why Single File?

This project uses a single-file architecture for simplicity:
- Easy to understand for beginners
- No build tools or bundlers required
- Quick to deploy anywhere
- Self-contained and portable

## 🌐 API Reference

### OpenWeatherMap Current Weather API

**Endpoint:** `https://api.openweathermap.org/data/2.5/weather`

**Parameters:**
- `q`: City name (e.g., "London", "New York")
- `appid`: Your API key
- `units`: Temperature units (metric for Celsius)

**Response Example:**
```json
{
  "name": "London",
  "sys": {"country": "GB"},
  "main": {
    "temp": 15.5,
    "feels_like": 14.2,
    "humidity": 72
  },
  "weather": [{"description": "broken clouds"}],
  "wind": {"speed": 3.5}
}
```

**Rate Limits (Free Tier):**
- 1,000 API calls per day
- 60 calls per minute

## 🔮 Future Enhancements

Potential features to add:

- [ ] 5-day weather forecast
- [ ] Geolocation auto-detection
- [ ] Save favorite cities (localStorage)
- [ ] Weather icons and animations
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Dark mode
- [ ] Search history
- [ ] Weather alerts and warnings
- [ ] Multiple language support
- [ ] Weather maps integration

## ⚠️ Known Limitations

- **API Key Visibility**: The API key is visible in the client-side code. For production apps, use a backend server to hide the key.
- **Rate Limiting**: Free tier limited to 1,000 calls/day. Implement caching for high-traffic scenarios.
- **City Disambiguation**: Cannot distinguish between cities with the same name (e.g., Paris, France vs Paris, Texas).
- **Network Dependency**: Requires internet connection to fetch weather data.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use meaningful variable names
- Add comments for complex logic
- Follow existing formatting patterns
- Test thoroughly before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenWeatherMap** - For providing the free weather API
- **Claude (Anthropic)** - AI assistance in learning and building this project
- **MDN Web Docs** - Excellent JavaScript and Web API documentation
- **CSS-Tricks** - Inspiration for CSS techniques

## 📞 Contact

**Developer**: DT  
**Project Link**: [https://github.com/YOUR_USERNAME/weather-dashboard](https://github.com/YOUR_USERNAME/weather-dashboard)

---

## 🎓 Learning Resources

If you're interested in understanding how this project works, here are some key concepts:

### JavaScript Concepts Used
- **Variables and Constants** (`const`, `let`)
- **Functions** (regular and arrow functions)
- **Async/Await** (handling asynchronous operations)
- **Fetch API** (making HTTP requests)
- **DOM Manipulation** (updating HTML elements)
- **Event Listeners** (responding to user interactions)
- **Error Handling** (try/catch blocks)
- **Template Literals** (string interpolation)

### CSS Techniques
- **Flexbox** (centering and layout)
- **CSS Grid** (weather details grid)
- **Linear Gradients** (background)
- **CSS Animations** (fade-in effect)
- **Media Queries** (responsive design)
- **Pseudo-classes** (`:hover`, `:focus`, `:active`)

### Web Development Best Practices
- Input validation
- User feedback (loading states, error messages)
- Responsive design
- Semantic HTML
- Accessibility considerations
- Code organization and comments

---

**Built with ❤️ by a beginner developer learning to code**

*This project was created as part of a learning journey to understand web development fundamentals, API integration, and modern JavaScript.*
