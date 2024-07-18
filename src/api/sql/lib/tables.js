import {Table} from './constructor/table.js';

const todoTable = new Table('todos', '? ? ? ?', [
  'owner_id',
  'task',
  'description',
  'isActive'
]);

const userTable = new Table('users', '? ? ? ? ? ? ?', [
  'firstname',
  'lastname',
  'age',
  'username',
  'email',
  'hashed_password',
  'salt'
]);
export {todoTable, userTable};
