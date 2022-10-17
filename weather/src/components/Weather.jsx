import React from 'react';

const Weather = (props) => {
    return ( <div className='info'>
  {props.weatherData.temperature && <p className='info_key'>Temperature:<span className='info_value'>{props.weatherData.temperature}</span></p> }
  {props.weatherData.city && <p className='info_key'>City:<span className='info_value'>{props.weatherData.city}</span></p> }
  {props.weatherData.country && <p className='info_key'>Country:<span className='info_value'>{props.weatherData.country}</span></p> }
  {props.weatherData.humidity && <p className='info_key'>Humidity:<span className='info_value'>{props.weatherData.humidity}</span></p> }
  {props.weatherData.description &&<p className='info_key'>Description:<span className='info_value'>{props.weatherData.description}</span></p>}
  {props.weatherData.error &&<p className='info_key'><span className='info_value'>{props.weatherData.error}</span></p>}
    </div> );
}
 
export default Weather;