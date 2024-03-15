import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchCity = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const API_KEY = 'ee948dcbe8286b91c7394fcc9a8c180c';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
  const navigate = useNavigate()

  // search city function
  const handleSubmit = () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      return;
    }
    fetchWeatherData(city);
  }



  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`${API_URL}&q=${city}`);
      navigate('/city-weather',{state : response.data}) 
      setError(null);
    } catch (error) { 
      setError(error?.response?.data?.message);
    }
  };

  // currecnt location function
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherDataByCoordinates(latitude, longitude);
        },
        () => {
          setError('Geolocation is not supported by your browser.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  const fetchWeatherDataByCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(`${API_URL}&lat=${latitude}&lon=${longitude}`);
      navigate('/city-weather',{state : response.data}) 
      setError(null);
    } catch (error) {
      setError(error?.response?.data?.message); 
    }
  };

  return (
    <div class='weather'>
      <div class=' col-lg-3 col-md-5 col-10 m-auto rounded-4 bg-white text-start '>
        <p class='fw-bold p-3'>Weather App</p>
        <div class='border w-100'></div>
        <div class='col-11 m-auto'>
          <div class="input-group my-3">
            <input type="text" class="form-control" placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)} />
            <button class="btn border z-0" onClick={() => handleSubmit()}><i class="bi bi-arrow-right"></i></button>
          </div>

          <div class='d-flex align-items-center gap-2 mt-2'>
            <div class='border w-100'></div>
            <p class='text-secondary'>Or</p>
            <div class=' border w-100'></div>
          </div>
          <div class='d-flex justify-content-center my-2 mb-3'>
            <button type="button" class="btn border " onClick={handleGetLocation}>Get Device Location</button>
          </div>
        </div>
      </div>

      {
        error &&
        <div class='error'>
          <div class=' col-lg-3 col-md-5 col-10 m-auto rounded-4 bg-white text-start '>
            <p class='fw-bold p-3 text-danger'>Error</p>
            <div class='border w-100'></div>
            <div class='col-11 m-auto text-center'>
              <p class='fw-semibold my-4'>{error}</p>
              <div class='d-flex justify-content-center my-2 mb-3'>
                <button type="button" class="btn border " onClick={() => setError(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  );
};

export default SearchCity;
