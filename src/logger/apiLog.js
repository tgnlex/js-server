import {createLogger} from 'winston';
import {apiConfig} from './config/main.js';

const log = createLogger(apiConfig);

export {log};

