
import React, { useState } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  const[weatherData,setWeatherData]=useState({
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  })

  const api_key="6c7a7c6a308f68d65e0681d3951b3431";

  //"http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44"


  const getWeather=(e)=>{
    e.preventDefault()

    const country=e.target.elements.country.value
    const city=e.target.elements.city.value
    const api = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${api_key}`)
    const res = api.then(res=>res.json());
    res.then(data=>{
      if(city&&country){
        setWeatherData({
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:''
        })
  
      }else{
        setWeatherData({
          temperature:'',
          city:'',
          country:'',
          humidity:'',
          description:'',
          error:'please enter city and country'
        })
  
      }

      
    })

  }
  
  
  return (
    
    <div className='form-container'>
     <Form getWeather={getWeather}/>
     <Weather 
       weatherData={{...weatherData}}
     />
    </div>
  );
}

export default App;
