import express from 'express';
import {Todo} from '../sql/todo.js';
import {todoData} from '../lib/formData.js';
const router = express.Router();
router.use(express.json());

router.get('/todo', (req, res, next) => {
  const data = Todo.all();
  res.json(data);
});

router.get('/todo/search/:id', (req, res, next) => {
  let id = req.params;
  let data = Todo.getById(id)
  res.json(data);
});

router.get('/todo/owner/:owner', (req, res, next) => {
  let owner_id = req.params;
  let data = Todo.owner(owner_id);
  res.json(data);
});

router.delete('/todo/delete/:id', (req, res, next) => {
  let id = req.params;
  try {Todo.remove(id)}
  catch(err) {
    res.json({ message: `${err.message}`})
    throw err;
  }
  res.status(200).json({ message: "sucess"})
});

router.post('/todo/new', (req, res, next, err) => {
  let todo = todoData(req);
  try { Todo.add(todo); }
  catch (err) { 
    res.json({ message: `${err.message}`})
    throw err;
  }
  res.status(200).json({ message: "success!" });
});
const todoRouter = router;
export {todoRouter};
