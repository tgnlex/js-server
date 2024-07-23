import {Router} from 'express';

import {__page} from '../../config/path.js';
import {PORT} from '../../config/constants.js' 

const index = Router();


index.get('/', (req, res, next) => {
  res.render(`${__page}/index.html`, {port: PORT});
});
/** 
viewRouter.get('/login', (req, res, next) => {
  res.render('login/index.html');
});
viewRouter.get('/register', (req, res, next) => {
  res.render('register/index.html')
});
viewRouter.get('/todo', (req, res, next) => {
  res.render('todo/index.html')
});
viewRouter.get('/chat', (req, res, next) => {
  res.render('chat/index.html')
});
viewRouter.get('/dashboard', (req, res, next) => {
  res.render('dashboard/index.html');
});

**/
export {index};
