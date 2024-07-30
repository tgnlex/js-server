import express from 'express';
import logger from '../../logger/logger.js'
const util = express.Router();

util.get('/', (req, res) => {
  res.json({router: "util", parent_router: "api"})
});

util.get('/log_level', (req, res) => {
  const { level } = req.body;
  if (level) {
    logger.level = level;
    res.status(200).send(level);
  } else {
    const error = new Error('[UTIL]: An error occurred while trying to update log level');
    logger.error(error);
    res.redirect('/');
  }
})
export default util;
