// Capitalizes the first letter of the string and returns it
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}