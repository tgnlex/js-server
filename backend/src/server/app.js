import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res, next) => { 
  res.json({"message":"Hello World!"})
})


export {app};
