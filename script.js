const API_KEY = 'e91ca9d2d3f35f376fa68cf9f9d4e138'; 
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const errorDiv = document.getElementById('error');
const card = document.getElementById('weatherCard');

searchBtn.addEventListener('click', getWeather);
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') getWeather();
});

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    showError('Please enter a city name');
    return;
  }
  
  try {
    errorDiv.textContent = '';
    card.classList.add('hidden');
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) throw new Error('City not found');
      if (response.status === 401) throw new Error('Invalid API key');
      throw new Error('Failed to fetch weather');
    }
    
    const data = await response.json();
    displayWeather(data);
    
  } catch (err) {
    showError(err.message);
  }
}

function displayWeather(data) {
  document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById('desc').textContent = data.weather[0].description;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind').textContent = `Wind: ${data.wind.speed} m/s`;
  document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  card.classList.remove('hidden');
}

function showError(msg) {
  errorDiv.textContent = msg;
  card.classList.add('hidden');
}