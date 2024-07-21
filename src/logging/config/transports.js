import {resolve} from 'path';
import winston, {transports} from 'winston';
const logPath =  resolve("/repos/js-server/logs/");
const apiTransports = [
  new transports.Console({
       level: 'event',
       format: winston.format.combine(
         winston.format.colorize(),
         winston.format.simple()
       )
  }),
  new transports.Http({
    level: 'warn',
    fomat: winston.format.json()
  }),
  new transports.File({
        level: "meta", 
        filename: `${logPath}/api/all.log`,
        format: winston.format.json()
  }),
  new transports.File({
        level: "event",  
        filename: `${logPath}/api/info.log`,
        format: winston.format.json()
  }),
  new transports.File({
        level: "warn", 
        filename: `${logPath}/api/errors.log`,
        format: winston.format.json()
  })
];

const reactTransports = [
  new transports.Console({
    level: 'event',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }),
  new transports.Http({
       level: 'warn',
       format: winston.format.json()
  }),
  new transports.File({ 
        level: "meta", 
        filename: `${logPath}/react/all.log`,
        format: winston.format.json()
  }),
  new transports.File({ 
        level: "info",  
        filename: `${logPath}/react/info.log`,
        format: winston.format.json()
  }),
  new transports.File({ 
        level: "warn", 
        filename: `${logPath}/react/errors.log`,
        format: winston.format.json()
  })
];

export {apiTransports, reactTransports};
