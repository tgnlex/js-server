import pino from 'pino';
import config from './config.js';

const logger = pino(config);

export default logger;
