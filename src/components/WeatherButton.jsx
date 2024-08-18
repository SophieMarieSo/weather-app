import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WeatherButton({ cities }) {
  return (
    <div>
      <Button variant='primary'>Current Location</Button>{' '}
      {cities.map((city, idx) => (
        <>
          <Button variant='primary' key={idx}>
            {city}
          </Button>{' '}
        </>
      ))}
    </div>
  );
}
