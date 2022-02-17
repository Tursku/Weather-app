
import React, { useState } from 'react';
import './App.css';


function App() {

  const apiKey = 'vEGZibTVawfqRIE5pSeypYIMAtICMhqg'
  const [weatherData, setWeatherData] = useState("")
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`http://dataservice.accuweather.com/currentconditions/v1/133328?apikey=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
        }
      )

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
          <p>Enter city</p>
        </div>
      ) : (
        <div className='weather-data'>
          <p className='city' >{city}</p>
          <p className='temperature' >{Math.round(weatherData[0].Temperature.Metric.Value)}°C</p>
          <p className='precipitation-type' >{weatherData[0].WeatherIcon} (image)</p>
          <p className='weather-text' >{weatherData[0].WeatherText}</p>
          
          
        </div>
      )}

    </div>
  )
}

export default App;
