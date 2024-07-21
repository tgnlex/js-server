import path from 'node:path';
import url from 'url';
let __filename = url.fileURLToPath(import.meta.url);
let __dirname = url.fileURLToPath(new URL ('.', import.meta.url));
// Root Tree
let __root = path.resolve('/repos/js-server/');
let __test = path.resolve('/repos/js-server/test/');
let __logs = path.resolve('/repos/js-server/logs/');
let __script = path.resolve('/repos/js-server/scripts/')
// Src Tree
let __src = path.resolve('/repos/js-server/src/');
let __db  = path.resolve('/repos/js-server/src/db');
let __config = path.resolve('/repos/js-server/src/config');
let __logger = path.resolve('/repos/js-server/src/logger');
// Lib Tree
let __lib = path.resolve('/repos/js-server/src/lib/');
let __sql = path.resolve('/repos/js-server/src/lib/sql/');

// App Tree
let __app = path.resolve('/repos/js-server/src/app/');
let __util = path.resolve('/repos/js-server/src/app/utils/');
let __route = path.resolve('/repos/js-server/src/app/routes/');
let __service = path.resolve('/repos/js-server/src/app/services/');
let __controller = path.resolve('/repos/js-server/src/app/controllers/');
// View Tree
let __view = path.resolve('/repos/js-server/src/views/')
let __partial = path.resolve('/repos/js-server/src/views/partials/')
// Public Tree
let __public = path.resolve('/repos/js-server/public/');
let __js = path.resolve('/repos/js-server/public/js/');
let __style = path.resolve('/repos/js-server/public/style/'); 




export {
  __filename, __dirname, __root, __src, __app, __lib, __sql, __test, 
  __script, __config, __logger, __logs, __util, __view, __public, __style, __js, __controller, __route 
}
