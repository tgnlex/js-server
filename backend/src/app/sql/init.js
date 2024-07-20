import {db, schema, deleteTable, createTable} from './export.js'

function initUsers() {
//  deleteTable('users');
  createTable('users', schema.users)
}
function initTodos() {
//  deleteTable('todos')
  createTable('todos', schema.todos)
}
function initAvatars() {
  //deleteTable('avatars')
  createTable('avatars', schema.avatars)
}
function initProfiles() {
  //deleteTable('profiles');
  createTable('profiles', schema.profiles);
}
function initLogs() {
  //deleteTable('logs');
  createTable('logs', schema.logs);
}
function initMessages() {
  //deleteTable('messages');
  createTable('messages', schema.messages);
}
function initPosts() {
  //deleteTable('posts');
  createTable('posts', schema.posts);
}
function initComments() {
  //deleteTable('comments');
  createTable('comments', schema.comments);
}
function initSessions() {
  //deleteTable('sessions');
  createTable('sessions', schema.sessions);
}
function initAll() {
  initUsers();
  initProfiles();
  initAvatars();
  initMessages();
  initPosts();
  initSessions();
  initComments();  
  initLogs();
  initTodos();
}
initAll()
