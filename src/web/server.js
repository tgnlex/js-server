import {app, eta} from './config/globals.js';
import {buildEtaEngine} from './config/viewEngine.js'
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname, 'static'))
app.engine('eta', buildEtaEngine())
app.set('view engine', eta)
app.use(authRouter);

function frontend() {
  let port = 3000;
  app.listen(port, () => {
    console.info(`Serving on http://localhost:${port}/`)
  });
}

export {frontend}
