import {log} from '../../logger/apiLog.js';
import {timestamp} from '../utils/timestamp.js';

function reqTime(req, res, next) {
  log.info(`Request at ${timestamp()}`)
}
