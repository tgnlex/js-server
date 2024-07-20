mport {getData} from '../lib/fetch.js';
import {Component} from 'preact';
import {TodoList} from './list.js';
import {TodoForm} from './form.js';
class Todo extends Component {
  render(props) {
    return (
      <main id="todo" class="container">
        <h1 class="todo-heading">Todo List</h1>
        <TodoList />
        <TodoForm />
      </main>
    )
  }
}
export {Todo};
