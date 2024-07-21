import {createLogger} from 'winston';
import {apiConfig, reactConfig} from './config/config.js';
const logConfigs = [
  apiConfig,
  reactConfig
];

function getLogger(config) {
  if(config === 'api') {
    const log = createLogger(logConfigs[1]);
    log.info(`[LOG]: Created API Logger!`)
    return log;

  } else if (config === 'react') {
    const log = createLogger(logConfigs[2]);
    log.info('[LOG]: Created React Logger!')
    return log;

  } else if (config) {
    const log = createLogger(config) 
    log.info('[LOG]: Created custom Logger!')
    return log;

  } else {
    const logError = new Error('[LOG]: Unable to create logger, no config opject was passed')
    console.error(logError);
    throw logError;
  }
}

export {getLogger, logConfigs};

