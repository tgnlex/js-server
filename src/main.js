import {app} from './app/app.js';
import {PORT, HOST} from './config/env.js';

function main() {
  app.listen(PORT, (req, res) => {
    console.info(`[MAIN]: Server listening on http://${HOST}:${PORT}`)
  });
};



main();
