const OW_API_KEY = "521df71864619eb4967a3609be2c0191"; //Invalid key, used client-side for prototyping 

// Returns the value of location from localstorage
export function getLocationFromLocalStorage() {
  return localStorage.getItem("location");
}

// Sets the location in localstorage to the given value
export function setLocationInLocalStorage(location) {
  localStorage.setItem("location", location);
}

/**
 *
 * @param {String} location - location to get weather info about
 * @returns {Promise} - fetch request that returns weather information
 */
export async function getWeatherInfo(location) {
  const { lat, lon } = await getCoordsFromLocation(location);
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${OW_API_KEY}`;

  //console.log("Fetching weather data for", location);

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

/**
 * 
 * @param {String} location - location to get hourly weather info for
 * @returns {Promise} - returns the fetch request, that returns hourly information about the location
 */
export async function getHourlyWeatherInfo(location) {
  const { lat, lon } = await getCoordsFromLocation(location);
  //console.log(location, "\nlat:", lat, "lon:", lon)
  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?units=metric&lat=${lat}&lon=${lon}&appid=${OW_API_KEY}`;

  //console.log("Fetching Hourly weather data for", location);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return { data: data.list };
    })
    .catch((err) => console.log(err));
}

/** Since the openWeather API's use longitude and latitude, a secondary API is used to get lon & lat data from a location name
 * @param {String} location - location name to get lon & lat for
 * @returns {Promise} - returns the fetch request, that returns the lon & lat for the loation
 */
export function getCoordsFromLocation(location) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${OW_API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data = data[0];
      return { lat: data.lat, lon: data.lon };
    })
    .catch((err) => console.log(err));
}
