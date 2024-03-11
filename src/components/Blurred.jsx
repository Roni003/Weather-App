import TFLButton from "./TFLButton";
import ForecastItem from "./ForecastItem";
import "./Blurred.css";
import { useEffect, useState } from "react";

function updateLocalStorageLines(linesArray) {
  let str = "";
  for (let i = 0; i < linesArray.length; i++) {
    str += linesArray[i] + ","
  }
  str = str.substring(0, str.length - 1); // remove last ","
  localStorage.setItem("lines", str);
}

const Blurred = () => {
  // Default 4 lines
  const [linesArray, setLinesArray] = useState(["central", "district", "circle", "elizabeth"]);

  useEffect(() => {
    if (localStorage.getItem("lines") == null) {
      updateLocalStorageLines(linesArray);
    }

    setLinesArray(localStorage.getItem("lines").split(","));
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
