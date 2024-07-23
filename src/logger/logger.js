import pino from 'pino';
import {config} from './config.js';

const log = pino(config);

export {log};
