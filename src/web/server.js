// Packages

import express from 'express';
// Import Config
import {HOST, PORT} from './config/env.js'
import {messages} from  './config/messages.js';
import {log, render} from './config/alias.js';
// Import Routers 
import {authRouter} from './routes/auth.js';
// Express Setup
const server = express();
server.use(express.json);
server.use(express.urlencoded({extended: true}));
server.use(express.static(__dirname, 'static'))
server.set('view engine', 'ejs')
// Routers
server.use(authRouter);
// server.use(todoRouter);
// server.use(blogRouter);
// server.use(utilRouter);

// Routes 
server.get('/', (req, res, next) => {
  render(res, 'index');
});
server.get('/test', (req, res, next) => {
  res.render('<h1>Server Is Running</h1>')
});
server.get('/todos', (req, res, next) => {
  render(res, 'todos')
});

function listen() {
  app.listen(PORT, () => {
    log(messages.serve)
  });
}
export {listen}
