import {listen} from './main.js';
// Call the server function inside of a main loop
// This is done in case I want to fire off multiple servers at once, 
// Or run any other additional code on server startup

function main() {
  console.log("Preparing to start server....")
  listen();
};

main();
