import express from 'express';
import session from 'express-session';
import {HOST, PORT} from './config/constants.js';
import {__views, __static} from './config/path.js';
import {index} from './routes/index.js';
import {api} from './api/api.js';
const app = express();

app.set('views',  __views); 
app.set('view engine', 'ejs');

app.use(express.static(__static));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//app.use(session());

app.use(index);
app.use('/api', api);

app.listen(PORT, () => {
  console.info(`[MAIN]: Server running on http://${HOST}:${PORT}`)
})
