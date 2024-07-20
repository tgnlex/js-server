function getDatetime() {
  const datetime = Date.toLocaleString();
  return datetime;
}
function getStamp() {
  const timestamp = Date.now();
  return timestamp;
}
function getDate() {
  const date = Date.toLocaleDateString();
  return date;
}
function getTime() {
  const time = Date.toLocaleTimeString();
  return time;
}
export { getDatetime, getStamp, getDate, getTime };
