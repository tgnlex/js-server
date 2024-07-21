import jsdoc from "eslint-plugin-jsdoc";
import markdown from "eslint-plugin-markdown";
import format from 'prettier-eslint';
let sourceCode = 'const {this} = that;'
config.node = {
  text: sourceCode,
  files: [
      './src/**/*.js', 
      './src/**/*.cjs',
      './scripts/**/*.js', 
      './scripts/**/*.cjs'
  ],
  rules: {
    semi: ["error", "never"]
    "no-unused-vars": "warn",
    "no-undef": "warn",
    "prettier/prettier": "error",
    "jsdoc/require-description":  "never",
    "jsdoc/check-values": "never"
  },
  languageOptions: { 
      globals: globals.browser 
  },
  prettierOptions: {
    bracketSpacing: true,
  },
  fallbackPrettierOptions: {
    signleQuote: false,
  }
};        
config.markdown: {
  files: ["./**/*.md"],
  plugins: {
    markdown
  },
  rules: {},
  processor: "markdown/markdown"
};
export {config}
