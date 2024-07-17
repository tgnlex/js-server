
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

export {handleNewTodo};
