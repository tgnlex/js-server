import express from 'express';
import {Todo} from '../../controllers/todo.js';
const todoRouter = express.Router();

todoRouter.get('/todo', (req, res, next) => {
  const data = Todo.all();
  res.json(data);
});

todoRouter.get('/todo/search/:id', (req, res, next) => {
  let id = req.params;
  let data = Todo.getById(id)
  res.json(data);
});

todoRouter.get('/todo/users/:user_id', (req, res, next) => {
  let user_id = req.params;
  let data = Todo.owner(owner_id);
  res.json(data);
});

todoRouter.delete('/todo/delete/:id', (req, res, next) => {
  let id = req.params;
  try {Todo.remove(id)}
  catch(err) {
    res.json({ message: `${err.message}`})
    throw err;
  }
  res.status(200).json({ message: "sucess"})
});

todoRouter.post('/todo/new', (req, res, next, err) => {
  let todo = todoData(req);
  try { Todo.add(todo); }
  catch (err) { 
    res.json({ message: `${err.message}`})
    throw err;
  }
  res.status(200).json({ message: "success!" });
});

export {todoRouter};
