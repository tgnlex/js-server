import bcrypt from 'bcrypt';

function genSalt(saltRounds) {
  let salt = await bcrypt.genSaltSync(saltRounds)
  return salt;
}

function encrypt(password, salt) {
  let hash = await bcrypt.hashSync(password, salt);
  if (hash) {
    console.info(`Generated Hash: ${hash}`)
    return hash;
  } else { 
    console.error('Failed to make hash');
    return;
  }
}

function hashValid(username, password) {
  let user = await User.searchByName(username);
  if (user) {
    let hash = user.hashed_password;
    let match = await bcrypt.compare(password, hash);
    if (match) {
      return match;
    } else {
      const error = new Error('Passwords did not match.')
      console.warn(error);
      next(error);
      return null;
    }
  } else {
    const error = new Error('No user with the submitted username exists.')
    console.warn(error);
    next(error);
    return null;
  }
}

export{genSalt, encrypt, hashValid};
