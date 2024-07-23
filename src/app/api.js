import express from 'express';
import {todoRouter} from './routes/api/todo.js';
import {utilRouter} from './routes/api/util.js';
const api = express.Router();

api.use(todoRouter)
api.use('/util', utilRouter)

api.get('/', (req, res, next) => {
  res.json({route: "api index"})
});


export {api};
