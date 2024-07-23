import express from 'express';
import {log} from '../../../logging/logger.js'
const utilRouter = express.Router();

utilRouter.get('/', (req, res) => {
  res.json({router: "api", subRouter: "utility"})
})

utilRouter.get('/log/level', (req, res) => {
  const { level } = req.body;
  if (level) {
    log.level = level;
    res.status(200).send(level);
  } else {
    const error = new Error('[UTIL]: An error occurred while trying to update log level');
    log.error(error);
    res.redirect('/');
  }
})
export {utilRouter};
