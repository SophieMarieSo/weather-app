import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=953f0c6e931e61136763636928559bf1&units=metric`;
    const res = await axios.get(url);
    setWeather(res.data);
  };

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
