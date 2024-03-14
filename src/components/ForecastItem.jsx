import "./ForecastItem.css";

const ForecastItem = ({ data }) => {
  const time = new Date(data.dt_txt).toLocaleTimeString(); // Format time as desired
  const weatherDescription = data.weather[0].description;
  const temperature = data.main.temp;

  return (
    <div className="forecast-item">
      <p>{time}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      />
      <p>{weatherDescription}</p>
      <p>{temperature}</p>
    </div>
  );
};

export default ForecastItem;
