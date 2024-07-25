import express from 'express';
import Todo from '../controllers/todo.js';
const todo = express.Router();

todo.get('/todo', (req, res, next) => {
  const data = Todo.all();
  res.json(data);
});

todo.get('/todo/search/:id', (req, res, next) => {
  let id = req.params;
  let data = Todo.getById(id)
  res.json(data);
});

todo.get('/todo/users/:user_id', (req, res, next) => {
  let user_id = req.params;
  let data = Todo.owner(owner_id);
  res.json(data);
});

todo.delete('/todo/delete/:id', (req, res, next) => {
  let id = req.params;
  try {Todo.remove(id)}
  catch(err) {
    res.json({ message: `${err.message}`})
    throw err;
  }
  res.status(200).json({ message: "sucess"})
});

todo.post('/todo/new', (req, res, next, err) => {
  let todoData = todoData(req);
  try { Todo.add(todoData); }
  catch (err) { 
    res.json({ message: `${err.message}`})
    throw err;
  }
  res.status(200).json({ message: "success!" });
});

export default todo;
