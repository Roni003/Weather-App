import "./TFLButton.css";
import { useEffect, useState } from "react";

const TFL_API_ID = "8a625acf19ac4447a1990cfbac214163";
const TFL_API_KEY = "fe4079da085740529d42ffe9e57db3c9";
const map = new Map();
map.set("bakerloo", "rgb(116, 90, 42)");
map.set("central", "rgb(225, 37, 27)");
map.set("circle", "rgb(255, 205, 0)");
map.set("district", "rgb(0, 121, 52)");
map.set("elizabeth", "rgb(119, 61, 189)");
map.set("jubilee", "rgb(123, 134, 140)");
map.set("metropolitan", "rgb(135, 15, 84)");
//map.set("h&c", "rgb(236, 155, 173)"); dont know TFL line name
map.set("northern", "rgb(0, 0, 0)");
map.set("piccadilly", "rgb(0, 15, 159)");
map.set("victoria", "rgb(0, 160, 223)");
//map.set("waterloo&city", "rgb(107, 205, 178)"); dont know TFL line name

const TFLButton = ({ line }) => {
  const [lineStatus, setLineStatus] = useState(null);
  useEffect(() => {
    getLineStatus(line).then(out => setLineStatus(out));
  }, [line])

  // Capitalize first letter of word, looks better
  line = line.charAt(0).toUpperCase() + line.substring(1).toLowerCase();

  return (
    <div className="line-button" style={{ backgroundColor: map.get(line.toLowerCase()) }}>
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