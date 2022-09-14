import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = (props) => {

const api_key = process.env.REACT_APP_API_KEY;

const [weather, setWeather] = useState([]);
const [showWeather, setShowWeather]=useState(true);

useEffect(() => {
axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.name}`)
.then(response=>{
    setWeather(response);
    setShowWeather(false);
})
},[])

if(!showWeather ){
return(
    <>
    <h4>Wather in {props.name} Celsius</h4>
    <p>Temperature {weather.data.current?.temperature} </p>
    <img src={weather.data.current?.weather_icons}  width="80" height="50" alt={`Flag ${props.name}`}/>
    <p>Wind {weather.data.current?.wind_speed} m/s </p>
    </>
)
}else{
    return <p>The weather is loading</p>
}
}

export default Weather