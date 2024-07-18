import winston, {transports} from 'winston';
import {logLevels} from './levels.js';

// TODO: SETUP PROPER TRANSPORTS

// TODO: FINISH LOGGING CONFIG 
const apiConfig = {
  level:  "debug",
  // levels: logLevels
  format: winston.format.json(),
  transports: apiTransports,
};
const webConfig = {
  level: 'debug',
  format: winston.format.json(),
  transports: webTransports,
}

export {apiConfig, webConfig};
