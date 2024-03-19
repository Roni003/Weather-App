import React from "react";
import sunnyDay from "../assets/icons/sunny.png";
import fewClouds from "../assets/icons/cloudy-sun.png";
import clouds from "../assets/icons/cloudy.png";
import heavyRain from "../assets/icons/heavy-rain.png";
import lightRain from "../assets/icons/light-rain.png";
import storm from "../assets/icons/storm.png";
import snowy from "../assets/icons/snowy.png";

const weatherIcons = {
  "01d": sunnyDay,
  "02d": fewClouds,
  "04d": clouds,
  "04n": clouds,
  "09d": heavyRain,
  "09n": heavyRain,
  "10d": lightRain,
  "10n": lightRain,
  "11d": storm,
  "11n": storm,
  "13d": snowy,
  "13n": snowy,
};

// Component to display weather icon based on weather code
const WeatherIcon = ({ code }) => {
  const icon = weatherIcons[code];

  if (icon) {
    return <img src={icon} alt="Weather Icon" />;
  } else {
    // If the code is not found in the mapping object, use OpenWeatherMap URL
    return (
      <img
        src={`https://openweathermap.org/img/wn/${code}@2x.png`}
        alt="Weather Icon"
      />
    );
  }
};

export default WeatherIcon;
