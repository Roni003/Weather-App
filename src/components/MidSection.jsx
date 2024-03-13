import { useEffect, useState } from "react";
import "./MidSection.css"

const OW_API_KEY = "521df71864619eb4967a3609be2c0191";

const MidSection = ({ location }) => {
  const [data, setData] = useState("Fetching weather data");
  const [pending, setPending] = useState(true);

  useEffect(() => {

    getWeatherInfo(location)
      .then((out) => {
        console.log(out);
        setData(out);
        setPending(false);
      });
  }, []);


  return (
    <div className="mid">
      <h1> {pending ? "Fetching" : data.location} </h1>
      <div> Icon </div>
      <h2> {pending ? "" : data.temperature.temp}℃</h2>
      <h3> {pending ? "" : data.weather[0].description} </h3>
      <h3>Feels like {pending ? "" : data.temperature.feels_like}℃</h3>
    </div>);
}

async function getWeatherInfo(location) {
  const { lat, lon } = await getCoordsFromLocation(location);
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${OW_API_KEY}`;

  console.log("Fetching weather data for", location);

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return { location: data.name, temperature: data.main, wind: data.wind, weather: data.weather, timezone: data.timezone };
    })
    .catch(err => console.log(err));
}

function getCoordsFromLocation(location) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${OW_API_KEY}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      data = data[0];
      return { lat: data.lat, lon: data.lon };
    })
    .catch(err => console.log(err));
}

export default MidSection;