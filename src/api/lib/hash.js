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

function compareHash(username, password) {
  
  let match = await bcrypt.compare(password, );
  if (match) {
    return match;
  } else {
    console.info('Password did not match.')
    return;
  }
}
