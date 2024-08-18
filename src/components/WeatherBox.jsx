import React from 'react';

export default function WeatherBox({ weather }) {
  return (
    <div className='weather-box'>
      <h5>{weather?.name}</h5>
      <h1>{weather?.main.temp} °C</h1>
      <h5>{weather?.weather[0].description}</h5>
    </div>
  );
}
