
import {log} from '../../logging/logger.js';
const errorLogger = (err, req, res, next) => {
  log.error(err.stack);
  next(err);
}

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode ?? 500;
  return res.status(statusCode ?? 500).json({
    error: {
      code: statusCode, 
      message: err.message 
    }
  })
}
const notFoundHandler = (err, req, res, next) => {
  res.status(404).json({
    error: 404, 
    message: "Route not found"
  })
}
export {errorLogger, errorHandler, notFoundHandler};
