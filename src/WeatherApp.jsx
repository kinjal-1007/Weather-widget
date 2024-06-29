import SearchBox from "./SearchBox/SearchBox";
import InfoBox from "./InfoBox/InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo]= useState(
        {
        city: "Delhi",
        feelsLike: 39,
        temp: 33.05,
        tempMin: 33.05,
        tempMax: 33.05,
        humidity: 53,
        weather: 'Clear'
        }
    );
    let updateInfo=(newResult)=>{
        setWeatherInfo(newResult);
    }
    return (
        <div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
        </div>
    );
};