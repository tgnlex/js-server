import express from 'express';
const view = express.Router();

view.get('/', (req, res) => {
  res.render('index.html')
});


export {view};
