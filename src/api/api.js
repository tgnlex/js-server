import express from 'express';
import router from './router.js';
const api = express.Router();

api.use(router.todo);
api.use(router.util);
//api.use(router.auth)

api.get('/', (req, res, next) => {
  res.status(200).json({message: "hello"})
});
api.get('/test', (req, res, next) => {
  res.status(200).json({test: "success"});
})

export {api};
