import { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY?.trim();
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;
    async function fetchWeather() {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        console.log(response);
        setWeather(response.data);
        setError(null);
      } catch (e) {
        setError("City not found. Try again..");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [city]);

  const handleInputChange = ({ target }) => setInput(() => target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setCity(() => input.trim());
  };

  return (
    <div>
      <header>
        <h1>Weather App</h1>
        <nav>
          <SearchBar
            handleInputChange={handleInputChange}
            handleSearch={handleSearch}
            input={input}
          />
        </nav>
      </header>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherDisplay city={city} weather={weather} />}
    </div>
  );
}

export default App;
