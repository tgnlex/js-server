import express from 'express';
import compression from 'compression';
import {router} from './router.js';
const server = express();
const PORT = 3000
// Middleware
server.use(compression());
server.use(express.json());

// Router
server.use(router)

function ssr() {
  server.listen(PORT, () => {
    console.info(`[SSR]: Server listening on http:/localhost:${PORT}/`)           
  });
}


export {ssr};
