import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WeatherButton() {
  return (
    <div>
      <Button variant='primary'>Current Location</Button>{' '}
      <Button variant='primary'>New York</Button>{' '}
      <Button variant='primary'>Paris</Button>{' '}
      <Button variant='primary'>Tokyo</Button>
    </div>
  );
}
