import {app} from './app.js';

const PORT = 4000;
const HOST = `localhost`

function server() {
  app.listen(PORT, (req, res) => {
    console.info(`[MAIN]: Server listening on http://${HOST}:${PORT}`)
  })
}

function main() {
  server();
};

main();
