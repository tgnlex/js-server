
import {createServer} from 'http';
import {app} from './app.js';
import {HOST, PORT} from '../env.js';

const server = createServer(app);
function listen() {
  server.listen(PORT, () => {
    console.log(`[SERVER]: Listening on http://${HOST}:${PORT}`);
  });
};
export {listen};
