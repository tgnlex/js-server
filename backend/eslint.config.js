import globals from "globals";
import pluginJs from "@eslint/js";
import {config} from './config/lint.js';

export default [
  pluginJs.configs.recommended,
  config.node, 
  config.markdown
];
