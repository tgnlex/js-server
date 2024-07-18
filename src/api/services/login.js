import {User} from '../sql/user.js';
import {} from '../lib/hash.js';
import bcrypt from 'bcrypt';

async function login(username, password) {
  let user = await User.searchByName(username)
  if (user) {
    let hash = user.hashed_password;
  
  }
}
export {login};
