function check(item) {
  if (localStorage.getItem(item)) {
    return true;
  }
}
function remove(item) {
  localStorage.removeItem(item);
}
function get(item) {
  return JSON.parse(localStorage.getItem(item));
}
export default { check, remove, get };
