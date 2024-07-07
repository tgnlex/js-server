import express from 'express';

const router = express.Router();
// Temporary sample todos until db are setup;
const todos = [
  {id: 1, task: "Database", description: "Setup an in memory db, most like sqlite"},
  {id  2, task: "Todo Frontend", description: "build the todos.ejs page"},
  {id: 3, task: "Logging", description: "setup proper logging"}
];

function handleNewTodo(req) {
  let task = req.body.task;
  let desc = req.body.desc;
  let id = todos.length + 1;
  const todo = {
    id: id,
    task: task, 
    description: desc
  }
  return todo;
}

router.get('/todo', (req, res, next) => {
    const data = Todo.makeList(todos);
    res.send(data);
});
router.post('/todo/new', (req, res, next) => {
  const data = handleNewTodo()
  
  res.redirect('/todo');
    
});
router.patch('/todo/update', (req, res, next) => {

});
router.get('/todo/:id', (req, res, next) => {

});
