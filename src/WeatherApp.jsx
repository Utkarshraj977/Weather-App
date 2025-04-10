import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 34.59,
        humidity: 6,
        temp: 37.78,
        tempmax: 37.78,
        tempmin: 37.78,
        weather: "clear sky",
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return (
        <div>
            <h2>Weather App Using React</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo} />
        </div>
    )
}

