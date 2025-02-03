import React from "react";

function WeatherDisplay({ city, weather }) {
  return (
    <div>
      <h2>City Name: {city}</h2>
      <p>Weather: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
