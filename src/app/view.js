import express from 'express';
import App from '../../../views/pages/App.js';
import render from 'preact-render-to-string';
const app = express();
//const view = express.Router();

const Layout = (html, state) => `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css">
            <title> SSR Preact App </title>
        </head>
        <body>
            <div id="app">${html}</div>
      <script>window.__STATE__=${JSON.stringify(state).replace(/<|>/g, '')}</script>
            <script src="./app.js"></script>
        </body>
    </html>`;

app.get('/', (req, res) => {
  let html = render(<App />)
  res.send(Layout(html, state));
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});

//export {view};
