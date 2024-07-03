import {createLogger} from 'winston';
import {config} from './config';



const log = createLogger(config);


export {log};

