
import http from 'http';
import {app} from './app/app.js';
import {PORT, HOST} from './config/env.js';
import {log} from './logging/logger.js';
 // Start Message \\
 // Http server  \\
const server = http.createServer(app);
// Start function \\
function start() {
  server.listen(PORT, (req, res) => {
  console.info(`[MAIN]: Server listening on http://localhost:3000`)
  });
};
export {start, server};
