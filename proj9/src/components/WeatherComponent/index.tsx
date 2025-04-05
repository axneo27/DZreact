import axios from "axios";
import React from "react";
import { Fragment } from "react/jsx-runtime";
import { WeatherData, SearchBarProps } from "../../interfaces/WeatherData";

const wAPIkey = "995b626f8e1404b00d411fb5a4e1eff0";

const fetchWeatherData = async (city: string) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${wAPIkey}&units=metric`);
        const data = response.data;

        const weatherData: WeatherData = {
            location: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        };
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

const SearchBarComponent: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = React.useState("");

    const handleSearch = () => {
        onSearch(city);
    }

    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
  
const WeatherComponent: React.FC<WeatherData> = ({ location, temperature, humidity, description, icon }) => {
    return (
        <Fragment>
            <h2>{location}</h2>
            <img src={icon} alt={description} />
            <p>Temperature: {temperature}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Description: {description}</p>
        </Fragment>
    );
}

export default function WeatherApp() {
    const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null);

    const handleSearch = async (city: string) => {
        const data = await fetchWeatherData(city);
        setWeatherData(data);
    }

    return (
        <div>
            <SearchBarComponent onSearch={handleSearch} /> 
            {weatherData && <WeatherComponent {...weatherData} />}
        </div>
    );
}
