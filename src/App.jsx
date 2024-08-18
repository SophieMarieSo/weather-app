import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const cities = ['new york', 'paris', 'tokyo'];

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [selected, setSelected] = useState('current');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city === '' || city === 'current') {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoading(true);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=953f0c6e931e61136763636928559bf1&units=metric`;
      const res = await axios.get(url);
      setWeather(res.data);
    } catch (error) {
      alert(error);
    }

    setLoading(false);
  };

  const getWeatherByCity = async () => {
    setLoading(true);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=953f0c6e931e61136763636928559bf1&units=metric`;
      const res = await axios.get(url);
      setWeather(res.data);
    } catch (error) {
      alert(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <div className='container'>
        {loading ? (
          <ClipLoader
            color={'white'}
            loading={loading}
            size={100}
            aria-label='Loading Spinner'
          />
        ) : (
          <>
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              city={city}
              selected={selected}
              setCity={setCity}
              setSelected={setSelected}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
