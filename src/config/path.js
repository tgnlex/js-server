import path from 'node:path';
import url from 'url';
export let __filename = url.fileURLToPath(import.meta.url);
export let __dirname = url.fileURLToPath(new URL ('.', import.meta.url));
// Root Tree
export const __root = path.resolve('/repos/js-server/');
export const __test = path.resolve(`${__root}/test/`);
export const __logs = path.resolve(`${__root}/logs/`);
export const  __script = path.resolve(`${__root}/script/`)

// Src Tree
export const  __src = path.resolve(`${__root}/src/`);
export const __logger = path.resolve(`${__src}/logging/`);
export const __db  = path.resolve(`${__src}/db/`);
// Lib Tree

// App Tree
export const __app = path.resolve(`${__src}/app/`);
export const  __route = path.resolve(`${__app}/routes/`);
export const __api = path.resolve(`${__app}/api/`)
export const __view = path.resolve(`${__app}/views/`)
export const __style = path.resolve(`${__app}/style/`)
export const __lib = path.resolve(`${__app}/lib/`)
// Public Tree
export const __static = path.resolve(`${__root}/static/`);
export const __js = path.resolve(`${__static}/js/`);
export const __css = path.resolve(`${__static}/css/`)




