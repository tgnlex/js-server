

function todoData(req) {
  const todo = {
    owner_id: 1, 
    task: req.body.task,
    description: req.body.description,
    isActive: true
  }
  return todo;
}

function userData(req) {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    username: req.body.username, 
    email: req.body.email, 
    pass: req.body.pass,
    pass2: req.body.pass2
  }  
  return user;
}

export {todoData, userData};
