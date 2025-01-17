import React, { useEffect } from 'react'
import './Weather.css'
import search from '../assets/search.png'
import clear from '../assets/clear.png'	
import cloud from '../assets/cloud.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'	
import wind from '../assets/wind.png'	


const Weather = () => {

const search = async (city)=>{
  try{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  search("London")
},[])

  return (

    <div className="app">
      
      <div className='weather'>
      
      <div className="search-bar">

        <input type="text" placeholder="Search..." />
        <img src={search} alt="" />
      </div>


    <img src={clear} alt="" className="weather-icon"/>
    <p className='temperature'>16°C</p>
    <p className='location'>London</p>

    <div className="weather-data">

      <div className="col">
        <img src={humidity} alt="" />
        <div>
        <p>91%</p>
        <span>Humidity</span>
        </div>
      </div>

      <div className="col">
        <img src={wind} alt="" />
        <div>
        <p>3.6Km/h</p>
        <span>Wind Speed</span>
        </div>
      </div>
      
      
    </div>

    </div>


    </div>
  
  )
}

export default Weather
