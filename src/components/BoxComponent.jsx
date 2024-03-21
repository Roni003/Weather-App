import PropTypes from "prop-types";
import "./BoxComponent.css";
import { capitalizeFirstLetter } from "../functions/helpers.js";
import WeatherIcon from "./weatherIcon.jsx";
import trashcan from "../assets/icons/trashcan.png"

const BoxComponent = ({ data, onRemove, handleClick }) => {   // Component that displays weather information for a location in a box layout
  function handleRemove(e) {
    e.stopPropagation();
    onRemove();
  }

  return (
    <div className="box" onClick={handleClick}>

      <div id="top" className="subdivision">
        <button id="remove-button" onClick={handleRemove}><img src={trashcan} alt="trashcan" /></button>
        <h2>
          {capitalizeFirstLetter(data.location)}
        </h2>
        <WeatherIcon code={data.weather[0].icon}></WeatherIcon>
      </div>

      <div id="bottom" className="subdivision">
        <span id="description">
          <p>{capitalizeFirstLetter(data.weather[0].description)},</p>
          <p>Temperature: {data.temperature.temp}℃</p>
        </span>
        <span id="high-low">
          <p>H: {data.temperature.temp_max}°</p>
          <p>L: {data.temperature.temp_min}°</p>
        </span>
      </div>

    </div>
  );
};

BoxComponent.propTypes = {
  onRemove: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BoxComponent;
