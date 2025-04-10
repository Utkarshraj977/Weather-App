import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "785f26d3acdee5b8c845ac2f84be3933";

    let getWeatherInfo = async () => {
        try {
            let resPonse = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await resPonse.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempmin: jsonResponse.main.temp_min,
                tempmax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            
            return result;
        } catch (err) {
            throw err;
        }
    }
    let handlechange = (event) => {
        setCity(event.target.value);
    }
    let handlesubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }
    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form >
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handlechange} />
                <br></br>
                <br></br>
                <Button variant="contained" type='submit' onClick={handlesubmit}>
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place Exist In this Api</p>}
            </form>
        </div>
    )
}

