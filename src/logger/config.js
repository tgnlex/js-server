import winston, {transports} from 'winston';
const logPath =  "/repos/js-server/logs/backend";
// TODO: SETUP CUSTOM LOG LEVELS 
const logLevels = {}
// TODO: SETUP PROPER TRANSPORTS
const logTransports = [
  new transports.console();
  new transports.file({level: "info", file: `${logPath}/info.log`});
]
// TODO: FINISH LOGGING CONFIG 
const config = {
  level:  "debug",
  // levels: logLevels
  format: winston.format.json(),
  transports: logTransports,
};


export {config};
