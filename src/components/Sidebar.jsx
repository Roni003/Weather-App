import "./Sidebar.css";
import { getLocalStorageLines, setLocalStorageLines } from "../functions/tfl.js";
import { useState } from "react";

function getOptions(lineList, keyCounter,) {
  return lineList.map((line) => {
    keyCounter++;
    return (
      <option key={keyCounter} value={line}>
        {line}
      </option>)

  })
}

const Sidebar = () => {
  const [lines, setLines] = useState(getLocalStorageLines());
  const lineList = [
    "bakerloo",
    "central",
    "circle",
    "district",
    "elizabeth",
    "jubilee",
    "metropolitan",
    "hammersmith-city",
    "northern",
    "piccadilly",
    "victoria",
    "waterloo-city"
  ];
  let keyCounter = 10;

  function getSelects(lineList, lines, keyCounter) {
    let selects = [];
    for (let i = 0; i < 4; i++) {
      selects.push(<select key={i} name={"select-" + i} defaultValue={lines[i]} onChange={(e) => {
        lines[i] = e.target.value;
        setLines(lines);
        setLocalStorageLines(lines);
        window.location.reload();
      }}>
        {getOptions(lineList, keyCounter, { i })}
      </select>)
    }
    return selects;
  }

  return (
    <div className="sidebar">
      <h6>Selected TFL Lines</h6>
      <ul>
        {getSelects(lineList, lines, keyCounter)}
      </ul>
    </div>
  );
};

export default Sidebar;
