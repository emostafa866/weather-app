import React from 'react';

const Form = (props) => {
    let {getWeather}=props
    return ( 
        <div>
        
        <form onSubmit={getWeather}>
            <input type='text' name='city' placeholder='city ..'/>
            <input type='text' name='country' placeholder='country ..'/>
            <button type='submit ' >Get Weather</button>
        </form>
        
        </div>

     );
}
 
export default Form;