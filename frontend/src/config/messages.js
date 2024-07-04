import {HOST, PORT} from './env.js';

const messages = {
  start: `[WEB]: Preparing to start dev server....`,
  serve: `[WEB]: DevServer listening on http://${HOST}:${PORT}`,
};

export {messages};
