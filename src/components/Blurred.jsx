import TFLButton from "./TFLButton";
import ForecastItem from "./ForecastItem";
import "./Blurred.css";

const Blurred = () => {
  return (
    <div className="blurred-container">

      <div className="hourly-forecast">
        <ForecastItem></ForecastItem>
        <ForecastItem></ForecastItem>
        <ForecastItem></ForecastItem>
        <ForecastItem></ForecastItem>
        <ForecastItem></ForecastItem>
        <ForecastItem></ForecastItem>
      </div>

      <div className="lines">
        <div className="line-container">
          <TFLButton line={"central"} />
          <TFLButton line={"circle"} />
        </div>
        <div className="line-container">
          <TFLButton line={"district"} />
          <TFLButton line={"jubilee"} />
        </div>
      </div>

    </div>
  );
};

export default Blurred;
