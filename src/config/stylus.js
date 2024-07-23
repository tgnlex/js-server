import stylus from 'stylus';
import nib from 'nib';
import {__static, __app} from './path.js';
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib())
    .import('nib')
}
const styleConf = stylus.middleware({
  src: __app + '/style/',
  dest: __static + '/css/',
  compile: compile
});
export {styleConf}
