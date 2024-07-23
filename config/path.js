import path from 'node:path';
import url from 'url';
export let __filename = url.fileURLToPath(import.meta.url);
export let __dirname = url.fileURLToPath(new URL ('.', import.meta.url));
// Root Tree
export const __root = path.resolve('/repos/js-server/');
export const __test = path.resolve(`${__root}/test/`);
export const __logs = path.resolve(`${__root}/logs/`);
export const  __script = path.resolve(`${__root}/script/`)

export const __db  = path.resolve(`${__root}/db/`);
export const  __src = path.resolve(`${__root}/src/`);

export const __logger = path.resolve(`${__src}/logger/`);
export const  __route = path.resolve(`${__src}/routes/`);

export const __api = path.resolve(`${__src}/api/`)
export const __client = path.resolve(`${__src}/client/`)
export const __view = path.resolve(`${__client}/view/`)
export const __page = path.resolve(`${__view}/page/`)
export const __style = path.resolve(`${__client}/style/`)
// Public Tree
export const __public = path.resolve(`${__root}/public/`);
export const __js = path.resolve(`${__public}/js/`);
export const __css = path.resolve(`${__public}/css/`)
export const __assets = path.resolve(`${__public}/assets/`)




