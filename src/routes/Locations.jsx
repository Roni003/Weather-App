import "./Locations.css";
import LocationsTopSection from "../components/LocationsTopSection";
import BoxComponent from "../components/BoxComponent1";
import SearchBar from "../components/SearchBar";
import {
  getLocationFromLocalStorage,
  setLocationInLocalStorage,
  getWeatherInfo,
  getHourlyWeatherInfo,
} from "../functions/ow.js";
import { useEffect, useState } from "react";

const OW_API_KEY = "521df71864619eb4967a3609be2c0191";

const Locations = () => {
  const [data, setData] = useState([]);
  const [hourlyData, setHourlyData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const storedLocation = getLocationFromLocalStorage();
    const initialLocation = storedLocation || "Mile end";
    console.log("this is my innital location", initialLocation);
    getWeatherInfo(initialLocation).then((weatherData) => {
      setData([weatherData]);
    });
    getHourlyWeatherInfo(initialLocation).then((hourlyWeatherData) => {
      setHourlyData([hourlyWeatherData.data]);
    });
  }, []);

  const handleSearchSubmit = (location) => {
    if (data.length >= 4) {
      setError("You can only add up to 4 locations.");
      return;
    }

    getWeatherInfo(location).then((weatherData) => {
      setData((prevData) => [...prevData, weatherData]);
      setError("");
    });
    getHourlyWeatherInfo(location).then((hourlyWeatherData) => {
      setHourlyData((prevData) => [...prevData, hourlyWeatherData.data]);
    });
  };

  const removeLocation = (index) => {
    setData((currentData) => currentData.filter((_, i) => i !== index));

    setHourlyData((currentHourlyData) =>
      currentHourlyData.filter((_, i) => i !== index)
    );
  };

  const addLocation = (index) => {
    setLocationInLocalStorage(index);
  };

  return (
    <>
      <LocationsTopSection />
      <div className="Locations">
        <SearchBar onSearchSubmit={handleSearchSubmit} />
        {error && <div className="error">{error}</div>}
        {data.map((weatherData, index) => (
          <BoxComponent
            key={index}
            data={weatherData}
            onRemove={() => removeLocation(index)}
            onAdd={() => addLocation(weatherData.location)}
          />
        ))}
      </div>
    </>
  );
};
export default Locations;
