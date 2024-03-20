import "./Locations.css";
import LocationsTopSection from "../components/LocationsTopSection";
import BoxComponent from "../components/BoxComponent";
import SearchBar from "../components/SearchBar";
import {
  getLocationFromLocalStorage,
  setLocationInLocalStorage,
  getWeatherInfo,
} from "../functions/ow.js";
import { useEffect, useState } from "react";

const Locations = () => {
  const [data, setData] = useState([]); // State for weather data of locations
  const [error, setError] = useState(""); // State for handling errors

  useEffect(() => { //Fetch and display initial weather data
    const storedLocation = getLocationFromLocalStorage();
    const initialLocation = storedLocation || "Mile end";
    getWeatherInfo(initialLocation).then((weatherData) => {
      setData([weatherData]);
    });
  }, []);

  const handleSearchSubmit = (location) => {  // Add new location weather data
    if (data.length >= 4) {
      setError("You can only add up to 4 locations.");
      return;
    }

    getWeatherInfo(location).then((weatherData) => {
      setData((prevData) => [...prevData, weatherData]);
      setError("");
    });
  };

  const removeLocation = (index) => {  // Remove a location from the list
    setData((currentData) => currentData.filter((_, i) => i !== index));
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
            handleClick={() => {
              setLocationInLocalStorage(weatherData.location)
              //redirect("/"), does not work for some reason
              window.location = "/";
            }}
          />
        ))}
      </div>
    </>
  );
};
export default Locations;
