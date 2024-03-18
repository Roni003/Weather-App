import "./Locations.css";
import LocationsTopSection from "../components/LocationsTopSection";
import BoxComponent from "../components/BoxComponent1";
import SearchBar from "../components/SearchBar";
import { getLocationFromLocalStorage } from "../functions/ow.js";
import { useEffect, useState } from "react";

const OW_API_KEY = "521df71864619eb4967a3609be2c0191";

const Locations = () => {
  const [data, setData] = useState();
  const [hourlyData, setHourlyData] = useState();

  useEffect(() => {
    const location = getLocationFromLocalStorage();

    if (location == null) {
      getWeatherInfo("Mile end").then((out) => {
        setData(out);
      });
      getHourlyWeatherInfo("Mile end").then((out) => {
        setHourlyData(out);
      });
    } else {
      getWeatherInfo(location).then((out) => {
        setData(out);
      });
      getHourlyWeatherInfo(location).then((out) => {
        setData(out);
      });
    }
  }, []);
  return (
    <div className="Locations">
      <div>
        <LocationsTopSection></LocationsTopSection>
        <SearchBar />
        {data ? <BoxComponent data={data} /> : ""}
        {data ? <BoxComponent data={data} /> : ""}
        {data ? <BoxComponent data={data} /> : ""}
        {data ? <BoxComponent data={data} /> : ""}
      </div>
    </div>
  );
};

async function getWeatherInfo(location) {
  const { lat, lon } = await getCoordsFromLocation(location);
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${OW_API_KEY}`;

  console.log("Fetching weather data for", location);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return {
        location: data.name,
        temperature: data.main,
        wind: data.wind,
        weather: data.weather,
        timezone: data.timezone,
      };
    })
    .catch((err) => console.log(err));
}

async function getHourlyWeatherInfo(location) {
  const { lat, lon } = await getCoordsFromLocation(location);
  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?units=metric&lat=${lat}&lon=${lon}&appid=${OW_API_KEY}`;

  console.log("Fetching Hourly weather data for", location);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return { data: data.list };
    })
    .catch((err) => console.log(err));
}

function getCoordsFromLocation(location) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${OW_API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data = data[0];
      return { lat: data.lat, lon: data.lon };
    })
    .catch((err) => console.log(err));
}
export default Locations;
