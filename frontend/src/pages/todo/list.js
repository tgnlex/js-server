import {getData} from '../../lib/fetch.js';
let url = `http://localhost:4000/todos/`
function TodoList () {
  const todos = getData(url);
  return (
    <ul id="todo-list" class="list">
    {todos.map((todo) => (
      <li key={todo.id}>
        <h3 class="task">{todo.task}</h3>
        <p class="description">{todo.description}</p>
      </li>
    ))}
    </ul>
  )
}
