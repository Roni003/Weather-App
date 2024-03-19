import "./ForecastItem.css";
import { capitalizeFirstLetter } from "../functions/helpers.js";
import WeatherIcon from "./weatherIcon.jsx";

const ForecastItem = ({ data }) => {
  const time = new Date(data.dt_txt).toLocaleTimeString(); // Format time as desired
  const weatherDescription = data.weather[0].description;
  const temperature = data.main.temp;

  return (
    <div className="forecast-item">
      <p>{time.substring(0, 2).replace(":", "") + " " + time.substring(time.length - 2, time.length)}</p>
      <WeatherIcon code={data.weather[0].icon}></WeatherIcon>
      <p>{capitalizeFirstLetter(weatherDescription)}</p>
      <p>{temperature}℃</p>
    </div>
  );
};

export default ForecastItem;
