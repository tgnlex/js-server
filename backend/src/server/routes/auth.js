import express from 'express';
import {authenticate} from '../services/authenticate.js';
import {createUser} from '../services/registration.js'
let authRouter = express.Router();

function login(req, res, next) {
  let email = req.body.email;
  let pass = req.body.password;  
  const valid = authenticate(email, pass);
  if (valid === 1) {
    res.send("Login Successful")
  } else {
    res.send('Login Failed please try again.')
  }
}

function register(req, res, next) {
  let name = req.body.username;
  let age = req.body.age;
  let email = req.body.email;
  let pass = req.body.password 
  let pass2 = req.body.password2
  try {
    const newUser = createUser(name, age, email, pass, pass2);
    return newUser;
  } catch (err) {
    console.error(err);
    return err;
  }
}

authRouter.POST("/auth/register", register());
authRouter.POST("/auth/login", login());
// authRouter.POST("/auth/logout", logout());

export {authRouter};
