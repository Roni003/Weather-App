import "./Sidebar.css";
import {
  getLocalStorageLines,
  setLocalStorageLines,
  lineList
} from "../functions/tfl.js";
import { useState } from "react";

// Returns an array of <option> elements, one for each element of the lineList array
function getOptions(lineList) {
  return lineList.map((line, index) => {
    return (
      <option key={index} value={line}>
        {line}
      </option>
    );
  });
}

const Sidebar = () => {
  // Get list of 4 selected TFL lines from localstorage
  const [lines, setLines] = useState(getLocalStorageLines());

  // Get 4 <select> elements, each with one of the selected TFL lines as the default value
  function getSelects(lineList, lines) {
    let selects = [];
    for (let i = 0; i < 4; i++) {
      selects.push(
        <select
          key={i}
          name={"select-" + i}
          defaultValue={lines[i]}
          onChange={(e) => {
            lines[i] = e.target.value;
            setLines(lines);
            setLocalStorageLines(lines);
            window.location.reload();
          }}
        >
          {getOptions(lineList, { i })}
        </select>
      );
    }
    return selects;
  }

  return (
    <div className="sidebar">
      <h6>Selected TFL Lines</h6>
      <ul className="inputs">{getSelects(lineList, lines)}</ul>
    </div>
  );
};

export default Sidebar;
