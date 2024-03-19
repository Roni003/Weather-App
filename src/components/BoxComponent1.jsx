import PropTypes from "prop-types";
import "./BoxComponent1.css";
import { capitalizeFirstLetter } from "../functions/helpers.js";
import closeBtn from "../assets/closeBtn.png";

const BoxComponent = ({ data, onRemove }) => {
  return (
    <div className="box">
      <div id="top" className="subdivision">
        <div>
          <button onClick={onRemove}>
            <img src={closeBtn} alt="Close Button"></img>
          </button>
        </div>
        <h2 style={{ fontSize: "20px" }}>
          {capitalizeFirstLetter(data.location)}
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={`${data.weather[0].description} icon`}
        />
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
  cityName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  details: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default BoxComponent;
