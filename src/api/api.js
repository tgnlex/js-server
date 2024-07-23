import express from 'express';
//import {todoRouter} from './api/todo.js';
//import {utilRouter} from './api/util.js';
const api = express.Router();

//api.use(todoRouter)
//api.use('/util', utilRouter)
//api.use('/auth', authRouter)
const data = {
  message: "hello",
  value: 7,
  test: true
}

api.get('/', (req, res, next) => {
  res.status(200).json({route: "api index"})
});
api.get('/test', (req, res, next) => {
  res.status(200).json(data);
})

export {api};
