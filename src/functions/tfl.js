const TFL_API_ID = "8a625acf19ac4447a1990cfbac214163"; //Invalid key, used client-side for prototyping 
const TFL_API_KEY = "fe4079da085740529d42ffe9e57db3c9"; //Invalid key, used client-side for prototyping 

// Takes an array of TFL line names, updates the value of "lines" with them in localstorage
export function setLocalStorageLines(linesArray) {
  let str = "";
  for (let i = 0; i < linesArray.length; i++) {
    str += linesArray[i] + ","
  }
  str = str.substring(0, str.length - 1); // remove last ","
  localStorage.setItem("lines", str);
}

// Takes lines from storage and returns as array
export function getLocalStorageLines() {
  return localStorage.getItem("lines").split(",");
}

export function getLineStatus(linesArray) {
  const url = `https://api.tfl.gov.uk/Line/${linesArray}/Status?app_id=${TFL_API_ID}&app_key=${TFL_API_KEY}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data.map((train) => `${train.name}: ${train.lineStatuses[0].statusSeverityDescription}`)
    })
    .catch(err => console.log(err));
}

export const colorMap = new Map();
colorMap.set("bakerloo", "rgb(116, 90, 42)");
colorMap.set("central", "rgb(225, 37, 27)");
colorMap.set("circle", "rgb(255, 205, 0)");
colorMap.set("district", "rgb(0, 121, 52)");
colorMap.set("elizabeth", "rgb(119, 61, 189)");
colorMap.set("jubilee", "rgb(123, 134, 140)");
colorMap.set("metropolitan", "rgb(135, 15, 84)");
colorMap.set("hammersmith-city", "rgb(236, 155, 173)");
colorMap.set("northern", "rgb(40, 40, 40)");
colorMap.set("piccadilly", "rgb(0, 15, 159)");
colorMap.set("victoria", "rgb(0, 160, 223)");
colorMap.set("waterloo-city", "rgb(107, 205, 178)");

export const lineList = [
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
  "waterloo-city",
];
