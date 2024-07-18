import {createLogger} from 'winston';
import {webConfig} from './config/main.js';

const log = createLogger(webConfig);

export {log};

