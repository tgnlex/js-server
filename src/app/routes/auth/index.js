import express from 'express';
import {userData} from '../services/formData.js';
import {login} from '../services/login';
import {logout} from '../services/logout';
let auth = express.Router();

auth.POST('/register', (req, res, next) => {
  const user = userData(req);
});
router.POST("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  login(req, res, username, password);
});
router.POST('/logout', (req, res, next) => {
  logout();
});
router.POST('/session', (req, res, next) => {
  const session = {
    isLoggedIn: req.session.isLoggedIn,
    sessionKey: req.session.sessionKey,
    user_id: req.session.user_id,
    user: req.session.username,
  }
})
const authRouter = router;
export {authRouter};
