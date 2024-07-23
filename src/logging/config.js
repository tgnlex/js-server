import {LOG_LEVEL} from '../config/env.js';
import {levels} from './config/levels.js';
import {levelFormat, bindingFormat} from './config/format.js';
import {datetime} from './config/time.js';
import {transports} from './config/transports.js';
const config = {
  level: LOG_LEVEL || "trace",
  customLevels: levels,
  timestamp: datetime,
  formatters: {
    level: levelFormat,
    bindings: bindingFormat
  },
  transports
};

export {config};
