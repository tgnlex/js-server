import express from 'express';
import {page} from '../config/paths.js';
const authRouter = express.Router();

authRouter.get('/login', (req, res, next) => {
  page(res, 'login');
})

authRouter.get('/register', (req, res, next) => {
  page(res, 'register');
})

export {authRouter};
