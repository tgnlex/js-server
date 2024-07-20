import {server} from './backend/server.js';
import {frontend} from './frontend/server.js'
// Call the server function inside of a main loop
// This is done in case I want to fire off multiple servers at once, 
// Or run any other additional code on server startup

function main() {
  console.log("Preparing to start server....")
  server();
  frontend();
};

main();
