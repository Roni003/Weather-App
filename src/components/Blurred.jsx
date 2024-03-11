import TFLButton from "./TFLButton";
import ForecastItem from "./ForecastItem";
import "./Blurred.css";
import { useEffect, useState } from "react";
import { getLocalStorageLines, setLocalStorageLines } from "../functions/tfl.js";


const Blurred = () => {
  // Default 4 lines
  const [linesArray, setLinesArray] = useState(["central", "district", "circle", "elizabeth"]);

  useEffect(() => {
    if (localStorage.getItem("lines") == null) {
      setLocalStorageLines(["central", "district", "circle", "elizabeth"]);
    } else {
      // If lines in localstorage, update linesArray with it.
      setLinesArray(getLocalStorageLines());
    }
  }, [])

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
          <TFLButton line={linesArray[0]} />
          <TFLButton line={linesArray[1]} />
        </div>
        <div className="line-container">
          <TFLButton line={linesArray[2]} />
          <TFLButton line={linesArray[3]} />
        </div>
      </div>

    </div>
  );
};

export default Blurred;
