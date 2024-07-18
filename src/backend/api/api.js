import express from 'express';
import session from 'express-session';
import {BACKEND_HOST, BACKEND_PORT} from '../../../config/env.js';
import {userRouter} from './routes/user.js';
import {todoRouter} from './routes/todo.js';
import cookieParser from 'cookie-parser';
const api = express();
api.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false;
}))
api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use(cookieParser());

api.use(todoRouter, '/api');
api.use(userRouter, '/api');

api.get("/", (req, res, next) => { 
  res.json({"message":"Hello World!"})
})


function server() {
  api.listen(PORT, () => {
    console.info(`[API]: Listening on http://${API_HOST}:${API_PORT}`);
  });
};
export {server};
