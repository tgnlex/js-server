import {Router} from 'express';

const index = Router();

index.get('/', (req, res, next) => {
  res.render(`index`, {title: "Welcome"});
});

index.get('/register', (req, res, next) => {
  res.render('register', {title: 'Register'});
});
 
index.get('/login', (req, res, next) => {
  res.render('login', {title: 'Login'});
});
//index.get('/todo', (req, res) => {res.render('todo/index.html')});
//index.get('/chat', (req, res) => {res.render('chat/index.html')});
//index.get('/dashboard', (req, res) => {res.render('dashboard/index.html')});

export {index};
