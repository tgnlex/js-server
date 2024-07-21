import express from 'express';
import session from 'express-session';
import nunjucks from 'nunjucks';
import cookieParser from 'cookie-parser';
import {__view, __public} from '../config/paths.js';
//import {api} from './routes/api/index.js';
//import {auth} from './routes/auth/index.js';
import {view} from './routes/view/index.js';

const app = express();

nunjucks.configure(__view, {
  autoescape: true,
  express: app,
  noCache: false,
  watch: true
});

app.set('views', __view); 
app.set('view engine', 'html');

app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__public));
//app.use(compression());
app.use(cookieParser());


//app.use(api, '/api/');
//app.use(auth, '/auth/');
//app.use(view,  '/view/');


app.get('/', (req, res) => {
  res.render('index.html', {});
})


export {app};
