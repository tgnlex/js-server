import {User} from '../controllers/user.js';
import {hashValid} from  './hash.js';
import {setSession} from './session.js';
import bcrypt from 'bcrypt';

async function authenticate(username, password, req=req) {
  if (hashValid(username, password)) { 
    let user = await User.searchByName(username);
    setSession(req, user);  
     return true;
  } else {
    console.error('Failed to authenticate user');
    return null;
  }
}

async function login(req, res, username, password) {
  const isAuthed = await authenticate(username, password);
  if(isAuthed === true) {
    res.status(200).redirect('/auth/session');
  } else {
    res.send('Failed to authenticate user');
  }
};

export {authenticate, login};
