import express from 'express';
const viewRouter = express.Router();



viewRouter.get('/', (req, res, next) => {
  res.render('home/index.html');
});
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


export {viewRouter};
