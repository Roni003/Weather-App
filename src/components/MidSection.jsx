import { useEffect, useState } from "react";
import "./MidSection.css";
import { capitalizeFirstLetter } from "../functions/helpers.js";

const MidSection = ({ data }) => {
  return (
    <div className="mid">
      <h1> {capitalizeFirstLetter(data.location)} </h1>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>
      <h2> {data.temperature.temp}℃</h2>
      <h3> {capitalizeFirstLetter(data.weather[0].description)} </h3>
      <h3>Feels like {data.temperature.feels_like}℃</h3>
    </div>
  );
};

export default MidSection;
