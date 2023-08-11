
import React, { useState, useEffect } from 'react';
import './Weather.css'
// import './WeatherComponent.css'; // Don't forget to create and style this CSS file

function Weather() {
      const apiKey = 'cf77a0a9198c0ffcf8c3d9720b17bde9';
    //   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")
    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`).then(
                response => response.json() 
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }
    }

    return (
        <div className='container'>
            <input 
            className='input' 
            placeholder='Enter City...' 
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            />

         {/* {typeof weatherData.main === 'undefined' ? (
            <div>
                
         )} */}
        </div>
    )
}
export default Weather;