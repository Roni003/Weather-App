import "./MidSection.css";
import { capitalizeFirstLetter } from "../functions/helpers.js";
import WeatherIcon from "./weatherIcon.jsx";

const MidSection = ({ data }) => {
  //output current weather information
  return (
    <div className="mid">
      <h1> {capitalizeFirstLetter(data.location)} </h1>
      <div>
        <WeatherIcon code={data.weather[0].icon}></WeatherIcon>
      </div>
      <h2> {data.temperature.temp}℃</h2>
      <h3> {capitalizeFirstLetter(data.weather[0].description)} </h3>
      <h3>Feels like {data.temperature.feels_like}℃</h3>
    </div>
  );
};

export default MidSection;
