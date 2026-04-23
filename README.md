# Weather App

Real-time weather application using OpenWeather REST API.

## Live Demo
https://anumulaakshitha.github.io/weather-app-js/

## Features
- Search weather by city name
- Display temperature, humidity, wind speed, weather description
- Dynamic weather icons from API
- Error handling for invalid cities (404) and API failures (401)
- Responsive design for mobile/desktop

## Tech Stack
HTML5, CSS3, JavaScript ES6, REST API, Async/Await

## Key Implementations
1. **API Integration**: Used fetch() with async/await to call OpenWeather API
2. **Error Handling**: Try-catch blocks for network errors, HTTP status checks
3. **JSON Parsing**: Extracted temperature, humidity, wind data from API response
4. **DOM Manipulation**: Dynamic UI updates without page reload

## Security Note
API key is hardcoded for this demo. In production, keys should be stored 
in environment variables or handled via backend proxy.

## How to Run Locally
1. Clone repo: `git clone https://github.com/AnumulaAkshitha/weather-app-js.git`
2. Get free API key from openweathermap.org
3. Replace API_KEY in script.js
4. Open index.html in browser
