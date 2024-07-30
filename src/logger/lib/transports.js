import pino from 'pino';
import {__logs} from '../../config/path.js';

const transports = pino.transport({
  targets: [
    {
      target: 'pino/file',
      options: { destination: `${__logs}/main.log`},
    },
  ]
});

export {transports};
