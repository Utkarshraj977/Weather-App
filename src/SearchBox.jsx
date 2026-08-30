import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const getWeatherInfo = async () => {
    if (!API_KEY) throw new Error("Missing VITE_OPENWEATHER_API_KEY");

    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("Weather request failed");

    const data = await response.json();
    return {
      city,
      temp: data.main.temp,
      tempmin: data.main.temp_min,
      tempmax: data.main.temp_max,
      humidity: data.main.humidity,
      feelslike: data.main.feels_like,
      weather: data.weather[0].description,
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{ color: "red" }}>Unable to find that location.</p>}
      </form>
    </div>
  );
}
