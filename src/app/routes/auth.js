import express from 'express';
import {userData} from '../services/formData.js';
import {login} from '../services/login.js';
import {logout} from '../services/logout.js';
let authRouter = express.Router();

authRouter.post('/register', (req, res, next) => {
  const user = userData(req);
});
authRouter.post("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  login(req, res, username, password);
});
authRouter.post('/logout', (req, res, next) => {
  logout();
});
authRouter.post('/session', (req, res, next) => {
  const session = {
    isLoggedIn: req.session.isLoggedIn,
    sessionKey: req.session.sessionKey,
    user_id: req.session.user_id,
    user: req.session.username,
  }
})
export {authRouter};
