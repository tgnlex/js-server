import {User} from '../sql/user.js';
import {uuidv4} from 'uuid';
import {compareHash} from '../../lib/hash.js';
import bcrypt from 'bcrypt';
async function validUser(username, password, res=res) {
  let user = await User.searchByName(username);
  const hash = user.hashed_password;
  const match = await compareHash(password, hash);
  if (match) {
      return match;
  } 
  return false;
}
async function authenticate(username, password, req=req) {
  if (validUser(username, password)) {
      req.session.loggedIn = true;
      req.session.sessionId = uuidv4();
      req.session.userId = user.id
      req.session.username = user.name;
      res.status(200).json({message: 'authentication successful!'})
  } else {
    res.json({error: "Incorrect username or password"})
  }
}


export {authenticate, isValid};
