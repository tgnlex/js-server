import path from 'node:path';
import url from 'url';
export let __filename = url.fileURLToPath(import.meta.url);
export let __dirname = url.fileURLToPath(new URL ('.', import.meta.url));
// Root Tree
export const __root = path.resolve('/repos/js-server/');
export const __src = path.resolve(`${__root}/src/`);
export const __test = path.resolve(`${__root}/test/`);
export const __logs = path.resolve(`${__root}/logs/`);
export const __db  = path.resolve(`${__root}/db/`);
export const __views = path.resolve(`${__src}/views/`)
export const __static = path.resolve(`${__root}/static/`)


