
import React, { useState } from 'react';
import './App.css';

function App() {
  
  const apiKey = '94a7c2e9db8671f07ef4bc377004a4f8'
  const [weatherData, setWeatherData] = useState("")
  const [city, setCity] = useState("")

  var message = "Enter any city and press Enter!"
  let errorMessage= "404 City not found"

  
  const getWeather = (event) => {
      if (event.key === "Enter") {
        console.log("working")
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
          response => response.json()
        ).then(
          data => {
            setWeatherData(data)
          })     

          function timeOutPart() { // Error message
            if(weatherData.cod === "404") {
              message = errorMessage
              console.log(errorMessage)
            }
          }
        
          setTimeout(timeOutPart, 999)
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

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p className='welcome'>{message}</p>
          <p className='error'>{errorMessage}</p>
        </div>

      ) : (

        <div className='weather-data'>
          <p className='city' >{weatherData.name}</p>
          <p className='temperature' >{Math.round(weatherData.main.temp)}°C</p>
          <img src={require (`./images/${weatherData.weather[0].icon}@2x.png`)} className='image' alt='Weather Icon' />
          <p className='weather' >{weatherData.weather[0].main}</p>

        </div>
      )}

    </div>
  )
}

export default App;
