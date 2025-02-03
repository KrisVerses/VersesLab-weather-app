import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "d708730abb785ed356340497f9b0296e";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Bentonville");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        console.log(response.data);
        setWeather(response.data);
        setError(null);
      } catch (e) {
        setError("City not found. Try again..");
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  return (
    <div>
      <header>
        <h1>Weather App</h1>
        <h2>City Name: {city}</h2>
        <p>Weather: {weather.main.temp}</p>
        <p>Condition: {weather.weather[0].description}</p>
      </header>
    </div>
  );
}

export default App;
