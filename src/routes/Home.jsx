import "./Home.css";
import TopSection from "../components/TopSection";
import MidSection from "../components/MidSection";
import Blurred from "../components/Blurred";
import { getLocationFromLocalStorage } from "../functions/ow.js";
import { useEffect, useState } from "react";

const OW_API_KEY = "521df71864619eb4967a3609be2c0191";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const location = getLocationFromLocalStorage();

    if (location == null) {
      getWeatherInfo("Mile end")
        .then((out) => {
          setData(out);
        });
    } else {
      getWeatherInfo(location)
        .then((out) => {
          setData(out);
        });
    }
  }, []);

  return (
    <div className="home">
      <TopSection />
      {data ?
        <MidSection data={data} /> :
        ""}
      <Blurred />
    </div>
  );
};

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

export default Home;
