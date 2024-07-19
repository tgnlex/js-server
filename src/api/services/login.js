import {User} from '../sql/user.js';
import {uuidv4} from 'uuid';
import {hashValid} from '../../lib/hash.js';
import bcrypt from 'bcrypt';

function setSession(req, next=next) {
  req.session.loggedIn = true;
  req.session.sessionId = uuidv4();
  req.session.userId = user.id;
  req.session.user = user.username;
  next(req);
  return req;
};

async function authenticate(username, password, req=req) {
  if (validUser(username, password)) {
    setSession(req, next);  
    res.status(200).json({message: 'authentication successful!'})
  } else {
    res.json({error: "Incorrect username or password"})
  }
}


export {authenticate, isValid};
