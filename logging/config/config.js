import winston from 'winston';
import {logLevels} from './levels.js';
import {apiTransports, reactTransports} from './transports.js';

const apiConfig = {
  levels: logLevels.levels,
  level:  "signal",
  format: winston.format.json(),
  transports: apiTransports,
};
const reactConfig = {
  levels: logLevels.levels,
  level: 'signal',
  format: winston.format.json(),
  transports: reactTransports,
}

export {apiConfig, reactConfig};
