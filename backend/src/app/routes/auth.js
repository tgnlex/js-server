import express from 'express';
import {userData} from '../services/formData.js';
import {login} from '../services/login';
import {logout} from '../services/logout';
let router = express.Router();

router.POST('/auth/register', (req, res, next) => {
  const user = userData(req);
});
router.POST("/auth/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  login(req, res, username, password);
});
router.POST('/auth/logout', (req, res, next) => {
  logout();
});
router.POST('/auth/session', (req, res, next) => {
  const session = {
    isLoggedIn: req.session.isLoggedIn,
    sessionKey: req.session.sessionKey,
    user_id: req.session.user_id,
    user: req.session.username,
  }
})
const authRouter = router;
export {authRouter};
