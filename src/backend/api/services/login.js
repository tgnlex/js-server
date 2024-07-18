import {User} from '../sql/user.js';
import {compareHash} from '../../lib/hash.js';
import bcrypt from 'bcrypt';

async function authenticate(username, password, res=res) {
  let user = await User.searchByName(username)
  if (user) {
    const hash = user.hashed_password;
    const match = await compareHash(password, hash);
    if (match) {
      res.json({message: 'Login success.'});
    } else {
      res.json({message: 'Incorred password.'})
    }
  } else {
    res.json({message: 'Incorrect username.'})
  }
}
export {login};
