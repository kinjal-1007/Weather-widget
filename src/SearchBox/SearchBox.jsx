import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="9803ebef9d89b6e04498048ce7949031";
    const [city, setCity]=useState("");
    const [error, setError]=useState(false);
    let weatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].main,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    }
    let handleChange=(evt)=>{
        setCity(evt.target.value);
        setError(false);
    };

    let handleSubmit=async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        setError(false);
        let newResult=await weatherInfo();
        updateInfo(newResult);
        }
        catch(err){
            setError(true);
        }
    };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/><br/><br/>
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color: 'red'}}>No such place exists!</p>}
            </form>
        </div>
    )
};