

function authenticate(email, password) {
  let user = getUserByEmail(email);
  if (user.password === password) {
    return 1; 
  } else {
    return 0;
  }
}

export {authenticate};
