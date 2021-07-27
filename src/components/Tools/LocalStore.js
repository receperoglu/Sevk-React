function check(item) {
  if (localStorage.getItem(item)) {
    return true;
  }
}
function get(item) {
  return JSON.parse(localStorage.getItem(item));
}
export default { check, get };
