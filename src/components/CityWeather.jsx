import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const CityWeather = () => {
  const location = useLocation();
  const value = location?.state;

  const navigate = useNavigate()

  useEffect(() => {
    if (!value) {
      navigate('/')
    }
  })

  let cityName = value?.name
  let cityDetails = value?.main
  let cityWeather = value?.weather 
  
  const iconBaseUrl = 'http://openweathermap.org/img/wn/'; 
  const iconUrl = `${iconBaseUrl}${cityWeather?.[0]?.icon}@2x.png`;





  return (
    <div class='weather'>
      <div class=' col-lg-3 col-md-5 col-10 m-auto rounded-4 bg-white text-start '>

        <p class='fw-bold p-3'><span class='fw-bold mx-2 ' style={{cursor:'pointer'}} onClick={()=>navigate('/')}><i class="bi bi-arrow-left"></i></span> <span>Weather App</span> </p>
        <div class='border w-100'></div>
        <div class='col-11 m-auto fw-semibold my-3 text-center'>
          <img src={iconUrl} alt="" />
          <p class='fs-1'>{cityDetails?.temp} <span>&deg;C</span></p>


          <p>{cityWeather?.[0]?.main}</p>
          <p class='mt-1'><span><i class="bi bi-geo-alt-fill mx-1"></i></span><span>{cityName}</span></p>

        </div>
        <div class='row m-0 fw-semibold'>
          <div class='col-6  border-top d-flex align-items-center justify-content-center gap-3 p-1' style={{ borderRight: '1px solid #dee2e6' }}>
            <div>
              <p><i class="bi bi-thermometer-sun fs-5 text-success"></i></p>
            </div>
            <div>
              <p >{cityDetails?.feels_like} <span>&deg;C</span></p>
              <p style={{ fontSize: '10px' }} > Feel Tamp</p> 
            </div>
          </div>
          <div class='col-6  border-top d-flex align-items-center justify-content-center gap-3 p-1'>
            <div>
              <p><i class="bi bi-droplet-half fs-5 text-info"></i></p>
            </div>
            <div>
              <p >{cityDetails?.humidity} <span>%</span></p>
              <p style={{ fontSize: '10px' }} >Humidity</p> 
            </div>
          </div>
          <div class='col-6  border-top d-flex align-items-center justify-content-center gap-3 p-1' style={{ borderRight: '1px solid #dee2e6' }}>
            <div>
              <p><i class="bi bi-thermometer-low fs-5 text-primary"></i></p>
            </div>
            <div>
              <p >{cityDetails?.temp_min} <span>&deg;C</span></p>
              <p style={{ fontSize: '10px' }} >Min Tamp</p> 
            </div>
          </div>
          <div class='col-6  border-top d-flex align-items-center justify-content-center gap-3 p-1' >
            <div>
              <p><i class="bi bi-thermometer-high fs-5 text-danger"></i></p>
            </div>
            <div>
              <p >{cityDetails?.temp_max} <span>&deg;C</span></p>
              <p style={{ fontSize: '10px' }} >Max Tamp</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityWeather