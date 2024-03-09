import "./TFLButton.css";
import { useEffect, useState } from "react";

const TFL_API_ID = "8a625acf19ac4447a1990cfbac214163";
const TFL_API_KEY = "fe4079da085740529d42ffe9e57db3c9";
const map = new Map();
map.set("central", "red");
map.set("circle", "yellow");
map.set("district", "green");
map.set("jubilee", "gray");
map.set("metropolitan", "purple");
map.set("", "");
map.set("", "");
map.set("", "");
map.set("", "");
map.set("", "");
map.set("", "");

const TFLButton = ({ line }) => {
  const [lineStatus, setLineStatus] = useState(null);
  useEffect(() => {
    getLineStatus(line).then(out => setLineStatus(out));
  }, [line])
  // Capitalize first letter of word, looks better
  line = line.charAt(0).toUpperCase() + line.substring(1).toLowerCase();

  return (<div className="line-button" style={{ backgroundColor: map.get(line.toLowerCase()) }}>
    {lineStatus}
  </div>);
}

function getLineStatus(linesArray) {
  const url = `https://api.tfl.gov.uk/Line/${linesArray}/Status?app_id=${TFL_API_ID}&app_key=${TFL_API_KEY}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data.map((train) => `${train.name}: ${train.lineStatuses[0].statusSeverityDescription}`)
    })
    .catch(err => console.log(err));
}
export default TFLButton;