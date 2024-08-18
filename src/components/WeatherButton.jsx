import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WeatherButton({ cities, setCity }) {
  return (
    <div>
      <Button variant='primary'>Current Location</Button>{' '}
      {cities.map((city, idx) => (
        <>
          <Button variant='primary' key={idx} onClick={() => setCity(city)}>
            {city}
          </Button>{' '}
        </>
      ))}
    </div>
  );
}
