import React, { useState, useEffect } from 'react';
import ToggleTheme from './components/ToggleTheme';
import WeatherCard from './components/WeatherCard';

const API_KEY = 'd8a3e1c5985d4a99b3124938251003';
const defaultCity = 'San Francisco';

function App() {
  const [city, setCity] = useState(defaultCity);
  const [inputCity, setInputCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const cities = ['New York', 'Los Angeles', 'Tokyo', 'London', 'Paris'];

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (cityName) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=5&aqi=yes&alerts=no`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gradient-to-br from-blue-300 to-purple-300 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors">
      <div className="max-w-2xl mx-auto bg-white/30 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 space-y-6 text-center">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Weather App</h1>
          <ToggleTheme />
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          <input
            type="text"
            placeholder="Enter city"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            className="px-4 py-2 rounded-full w-48 sm:w-64 bg-white/80 dark:bg-gray-800 dark:text-white border outline-none"
          />
          <button
            onClick={() => setCity(inputCity)}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        <div className="flex gap-2 flex-wrap justify-center">
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className="bg-white/50 dark:bg-gray-700 px-4 py-1 rounded-full hover:bg-white dark:hover:bg-gray-600 transition"
            >
              {c}
            </button>
          ))}
        </div>

        {weatherData && (
          <>
            <div className="space-y-1">
              <img
                src={`https:${weatherData.current.condition.icon}`}
                alt="icon"
                className="mx-auto w-20"
              />
              <h2 className="text-4xl font-bold">{weatherData.current.temp_c}°C</h2>
              <p className="text-lg">{weatherData.current.condition.text}</p>
              <p className="text-sm">{weatherData.location.name}, {weatherData.location.country}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Next 3 Days</h3>
              <div className="flex overflow-x-auto gap-4 justify-center flex-wrap">
                {weatherData.forecast.forecastday.map((day) => (
                  <WeatherCard key={day.date} day={day} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
