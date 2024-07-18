import {eta} from './eta.js';


function buildEtaEngine() {
  return (path, opts, callback) => {
    try {
      const file = eta.readFile(path);
      const template = eta.renderString(file, opts);
      callback(null, template);
    } catch (error) {
      callback(error)
    }
  }
}

export {buildEtaEngine};
