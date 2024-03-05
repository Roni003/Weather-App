import TFLButton from "./TFLButton";
import "./Blurred.css";

const Blurred = () => {
  return (
    <div className="blurred-container">
      <div className="hourly-forecast">
        <h1>Hourly forecast</h1>
        <div className="forecast-container">
          <div className="forecast-item">12:00 Sunny (Temp)</div>
          <div className="forecast-item">13:00 Rain (Temp)</div>
          <div className="forecast-item">14:00 Cloudy (Temp)</div>
          <div className="forecast-item">15:00 Cloudy (Temp)</div>
          <div className="forecast-item">16:00 Cloudy (Temp)</div>
          <div className="forecast-item">17:00 Cloudy (Temp)</div>
          <div className="forecast-item">18:00 Cloudy (Temp)</div>
          <div className="forecast-item">19:00 Cloudy (Temp)</div>
        </div>
      </div>

      <div className="lines">
        <div className="line-container">
          <TFLButton color={"red"} />
          <TFLButton color={"pink"} />
        </div>
        <div className="line-container">
          <TFLButton color={"green"} />
          <TFLButton color={"gray"} />
        </div>
      </div>
    </div>
  );
};

export default Blurred;
