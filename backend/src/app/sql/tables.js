import {Table} from './constructor/table.js';


const userTable = new Table('users', '? ? ? ? ? ? ?', [
  'firstname', 'lastname', 'age',
  'username', 'email', 'account_type', 'hashed_password', 'salt'
]);
const sessionTable = new Table('sessions', '? ? ? ? ? ? ?', [
   'session_key', 'user_id', 'ip_address', 'user_agent', 
   'user_data', 'username', 'last_activity'
]);
const profileTable = new Table('profiles', '? ? ?' [
  'user_id', 'avatar', 'bio'
]);
const avatarTable = new Table('avatars', '? ? ?', [
  'user_id', 'profile_id', 'image'
])
const postTable = new Table('posts', '? ? ? ?', [
  'user_id', 'profile_id', 'content', 'media'
]);
const commentTable = new Table('comments', '? ? ?', [
  'user_id', 'post_id', 'content'
]);
const todoTable = new Table('todos', '? ? ? ?', [
  'user_id', 'task', 'description', 'isActive'
]);
const messageTable = new Table('messages', '? ? ?', [
  'user_id', 'recipient_id', 'body'
]);
const logTable = new Table('logs', '? ?', [
  'log_level', 'data'
]);
export {
  userTable, 
  sessionTable, 
  profileTable, 
  avatarTable,
  postTable,
  commentTable, 
  todoTable, 
  messageTable,
  logTable
};
