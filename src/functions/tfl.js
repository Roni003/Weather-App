// Takes input as array, updates localstorage
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