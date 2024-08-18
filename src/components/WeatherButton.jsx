import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WeatherButton({
  cities,
  city,
  selected,
  setCity,
  setSelected,
}) {
  return (
    <div>
      <Button
        variant={selected === 'current' ? 'outline-primary' : 'primary'}
        onClick={() => {
          setCity('current');
          setSelected('current');
        }}
      >
        Current Location
      </Button>{' '}
      {cities.map((city, idx) => (
        <>
          <Button
            variant={selected === city ? 'outline-primary' : 'primary'}
            key={idx}
            onClick={() => {
              setCity(city);
              setSelected(city);
            }}
          >
            {city}
          </Button>{' '}
        </>
      ))}
    </div>
  );
}
