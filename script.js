// NOTE: API key exposed for demo purposes only. 
// In production, store in environment variables or backend proxy.
const API_KEY = 'e91ca9d2d3f35f376fa68cf9f9d4e138'; // ← PUT YOUR REAL KEY HERE

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weather-icon');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const errorMsg = document.getElementById('error-msg');

searchBtn.addEventListener('click', getWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getWeather();
});

async function getWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        errorMsg.textContent = 'Please enter a city name';
        return;
    }
    
    errorMsg.textContent = '';
    
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) throw new Error('City not found');
            if (response.status === 401) throw new Error('Invalid API key');
            throw new Error('Failed to fetch weather');
        }
        
        const data = await response.json();
        
        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind: ${data.wind.speed} m/s`;
        
    } catch (error) {
        console.error(error);
        errorMsg.textContent = error.message;
        cityName.textContent = '';
        temperature.textContent = '';
        description.textContent = '';
        weatherIcon.src = '';
        humidity.textContent = '';
        wind.textContent = '';
    }
}
