import express from 'express';
import session from 'express-session';
import nunjucks from 'nunjucks';
import {styleConf} from '../config/stylus.js';
import {__view, __static, __style} from '../config/path.js';
import {viewRouter} from './routes/view.js';
import {authRouter} from './routes/auth.js';
import {api} from './api.js';

const app = express();


nunjucks.configure(__view, {
  watch: true, 
  express: app
})

app.set('views', __view); 
app.set('view engine', 'html');
app.use(express.static(__static));

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(styleConf)



app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
/**  Routers **/

app.use('/api', api);
app.use('/auth', authRouter);
app.use(viewRouter);


export {app};
