

function setSession(req, user) {
  req.session.loggedIn = true;
  req.session.sessionId = uuidv4();
  req.session.userId = user.id;
  req.session.user = user.username;
  return req;
};

export {setSession};
