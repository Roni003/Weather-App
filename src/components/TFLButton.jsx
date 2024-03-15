import PropTypes from 'prop-types';
import "./TFLButton.css";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from '../functions/helpers';
import { getLineStatus, colorMap } from "../functions/tfl.js";

const TFLButton = ({ line }) => {
  const [lineStatus, setLineStatus] = useState("Fetching line status");
  useEffect(() => {
    // On initial component render, get line status for "line" by calling the TFL API, update local state with it
    getLineStatus(line).then(out => setLineStatus(out));
  }, [line])

  // Capitalize first letter of word, looks better
  line = capitalizeFirstLetter(line);

  return (
    <div className="line-button" style={{ backgroundColor: colorMap.get(line.toLowerCase()) }}>
      {lineStatus}
    </div>);
}

TFLButton.propTypes = {
  line: PropTypes.string.isRequired,
};

export default TFLButton;