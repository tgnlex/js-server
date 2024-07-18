import {resolve} from 'path';
const logPath =  resolve("/repos/js-server/logs/");
const apiTransports = [
  new transports.console();
  new transports.file({level: "debug", file: `${logPath}/api/debug.log`});
  new transports.file({level: "info",  file: `${logPath}/api/info.log`});
];
const webTransports = [
  new transports.console();
  new transports.file( { level: "debug", file: `${logPath}/web/debug.log`} );
  new transports.file( { level: "info",  file: `${logPath}/web/info.log`} );
]

export {apiTransports, webTransports};
