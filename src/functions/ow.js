export function getLocationFromLocalStorage() {
  return localStorage.getItem("location");
}

export function setLocationInLocalStorage(location) {
  localStorage.setItem("location", location);
}