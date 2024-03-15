import "./Home.css";
import TopSection from "../components/TopSection";
import MidSection from "../components/MidSection";
import Blurred from "../components/Blurred";
import { getLocationFromLocalStorage, getHourlyWeatherInfo, getWeatherInfo } from "../functions/ow.js";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [hourlyData, setHourlyData] = useState();
  const defaultLocation = "Mile end"; // The location used if user has no locations chosen in localstorage

  useEffect(() => {
    const location = getLocationFromLocalStorage();

    // If there is no location set in localstorage, use the default value to make the API calls
    if (location == null) {
      getWeatherInfo(defaultLocation).then((out) => {
        setData(out);
      });
      getHourlyWeatherInfo(defaultLocation).then((out) => {
        setHourlyData(out);
      });
    } else {
      // Use location from localstorage
      getWeatherInfo(location).then((out) => {
        setData(out);
      });
      getHourlyWeatherInfo(location).then((out) => {
        setHourlyData(out);
      });
    }
  }, []);

  return (
    <div className="home">
      {/* Settings & locations icons */}
      <TopSection />

      { /* Main weather information */}
      {data ? <MidSection data={data} /> : ""}

      { /* Hourly forecast information */}
      {hourlyData ? <Blurred data={hourlyData} /> : ""}
    </div>
  );
};

export default Home;
