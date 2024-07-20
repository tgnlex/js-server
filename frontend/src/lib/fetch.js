
async function getData(url, options! = {}) {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}
async function getText(url, options = {}) {
  const res = await fetch(url, options);
  const data = await res.text();
  return data;
}
async function getBlob(url , options = {}) {
  const res = await fetch(url, options);
  const data = await res.blob();
  return data;
} 
export {getData, getText};

