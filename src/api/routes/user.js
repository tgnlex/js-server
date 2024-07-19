import express from 'express';
import {userData} from '../services/formData.js';
import {genSalt, encrypt, compareHash} from '../lib/hash.js';
let router = express.Router();

router.POST('/auth/register', (req, res, next) => {
  const user = userData(req);
});
router.POST("/auth/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  let user = User.searchByName(username);
  if (user) {
    let match = compareHash(password, user.salt)
  }
});

const authRouter = router;
export {authRouter};
