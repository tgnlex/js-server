import {router} from './globals.js';
router.get('/', (req, res) => {
  let opts = {title: "Home"}
  res.render('home/index.eta', opts);
});
router.get('/register', {title: "Register"}, (req, res) => {
  let opts = {title: "Register"};
  res.render('register/index.eta', opts);
});
router.get('/login', (req, res) => {
  let opts = {title: "Login"};
  res.render('login/index.eta', opts)
});
router.get('/todo', (req, res) => {
  let opts = {title: "Todo"}
  res.render('todo/index.eta', opts);
});

export {router};
