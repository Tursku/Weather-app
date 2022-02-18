
import React, { useState } from 'react';
import './App.css';

function App() {

  const apiKey = '60rYAme9Ak25tjyihR3ll0u1CzH1LbSl'



  const [locationKey, setLocationKey] = useState("")
  const [weatherData, setWeatherData] = useState("")
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`)
        .then(response => response.json()).then(data => {
          setLocationKey(data);
        })
        
      fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey[0].Key}?apikey=${apiKey}`)
        .then(response => response.json()).then(data => {
          setWeatherData(data)
        })

    }
  }



  return (
    <div className="container">
      <input
        className='input'
        placeholder='Enter city...'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData[0] === 'undefined' ? (
        <div>
          <p className='welcome'>Enter any city and press Enter!</p>
        </div>

      ) : (

        <div className='weather-data'>
          <p className='city' >{locationKey[0].EnglishName}</p>
          <p className='temperature' >{Math.round(weatherData[0].Temperature.Metric.Value)}°C</p>
          <img src={require(`./images/${weatherData[0].WeatherIcon}.png`)} className='image' alt='Weather icon' />
          <p className='weather-text' >{weatherData[0].WeatherText}</p>

        </div>
      )}

    </div>
  )
}

export default App;
