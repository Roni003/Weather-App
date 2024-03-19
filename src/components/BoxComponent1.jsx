import PropTypes from "prop-types";
import "./BoxComponent1.css";
import { capitalizeFirstLetter } from "../functions/helpers.js";
import WeatherIcon from "./weatherIcon.jsx";

const BoxComponent = ({ data, onRemove, onAdd }) => {
  return (
    <div className="box">
      <div id="top" className="subdivision">
        <div>
          <button onClick={onRemove}>X</button>
          <button onClick={onAdd}>Add</button>
        </div>
        <h2 style={{ fontSize: "20px" }}>
          {capitalizeFirstLetter(data.location)}
        </h2>
        <WeatherIcon code={data.weather[0].icon}></WeatherIcon>
      </div>
      <div id="bottom" className="subdivision">
        <span style={{ fontSize: "14px" }}>
          Temperature: {data.temperature.temp}℃
        </span>
        <span style={{ fontSize: "14px" }}>
          Details: {capitalizeFirstLetter(data.weather[0].description)}
        </span>
      </div>
    </div>
  );
};

BoxComponent.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default BoxComponent;
