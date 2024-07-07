import {pagePath} from './paths.js';

function json(data) {
  return JSON.stringify(data);
}
function parse(data) {
  return JSON.parse(data);
}
function log(data) {
  return console.log(data);
}

function render(res, file) { 
  return res.render(`${pagePath(file)}`)
};
export {log, json, render};
