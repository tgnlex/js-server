import stylus from 'stylus';
import nib from 'nib';
import {__public, __style} from './path.js';
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .import('nib')
    .use(nib())
}
const style = stylus.middleware({
  src: __style,
  dest: __public + '/css/',
  compile: compile
});
export {style}
