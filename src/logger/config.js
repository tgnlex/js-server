import {LOG_LEVEL} from '../config/constants.js';
import {levels} from './lib/levels.js';
import {levelFormat, bindingFormat} from './lib/format.js';
import {datetime} from './lib/time.js';
import {transports} from './lib/transports.js';
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

export default config;
