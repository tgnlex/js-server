import express from 'express';
import session from 'express-session';
import nunjucks from 'nunjucks';
import {config} from '../config/config.js';
import {__view, __public, __style} from '../config/path.js';
import {HOST, PORT} from '../config/constants.js';
import {index} from './client/index.js';
import {api} from './api/api.js';
const app = express();

nunjucks.configure(__view, {watch: true,  express: app });

app.set('views', __view); 
app.set('view engine', 'html');
app.use(express.static(__public));

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(config.stylus)
app.use(session(config.session));
/**  Routers **/

app.use(index);
app.use('/api', api);


function server() {
  app.listen(PORT, () => {
    console.info(`[APP]: Server running on http://${HOST}:${PORT}`)
  })
}
export {server};
