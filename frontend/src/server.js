import express from 'express';
import {HOST, PORT} from './config/env.js'
import {authRouter} from './routes/auth.js';
import {messages} from  './config/messages.js';
import {log, render} from './config/alias,js';
const server = express();

server.use(express.urlencoded({extended: true}));
server.set('view engine', 'ejs')

// Routers
server.use(authRouter);

server.get('/', (req, res, next) => {
  page(res, 'index');
})

server.get('/todos', (req, res, next) => {
  page(res, 'todos')
})

function listen() {
  app.listen(PORT, () => {
    log(messages.serve)
  });
}
export {listen}
