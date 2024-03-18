import TFLButton from "./TFLButton";
import ForecastItem from "./ForecastItem";
import "./Blurred.css";
import { useEffect, useState } from "react";
import {
  getLocalStorageLines,
  setLocalStorageLines,
} from "../functions/tfl.js";

const Blurred = ({ data }) => {
  const currentTime = new Date();
  const next24Hours = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
  //contains only the next 24 hours
  let filteredData = [];
  filteredData = data.data.filter(
    (item) => new Date(item.dt_txt) <= next24Hours
  );

  // Default 4 lines
  const [linesArray, setLinesArray] = useState();

  useEffect(() => {
    if (localStorage.getItem("lines") == null) {
      setLocalStorageLines(["central", "district", "circle", "elizabeth"]);
    } else {
      // If lines in localstorage, update linesArray with it.
      setLinesArray(getLocalStorageLines());
    }
  }, []);

  return (
    <div className="blurred-container">
      <div className="hourly-forecast">
        {filteredData.map((forecast, index) => (
          <ForecastItem key={index} data={forecast} />
        ))}
      </div>

      {linesArray ? (
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Blurred;
