
import React, { useState } from 'react';
import './App.css';
import { getCity } from './weather.js'
import { getWeather } from './weather.js'


function App() {

  const apiKey = 'Yj7PbGaTqMeArQC7KArjGRQ1u4b2bXdl'
  const [weatherData, setWeatherData] = useState("")
  const [city, setCity] = useState("")


  const getWeather = (event) => {
    if (event.key = "Enter") {
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

      {typeof weatherData.main == 'undefined' ? (
        <div>
          <p>Täs o ny sää-appi</p>
      )}

    </div>
  );
}

export default App;
