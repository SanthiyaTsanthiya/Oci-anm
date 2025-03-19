const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap or WeatherAPI

async function getWeather() {
  const city = prompt("Enter city name:");
  if (city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("city-name").textContent = `City: ${data.name}`;
      document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    } else {
      alert('City not found');
    }
  }
}
