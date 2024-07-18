import express from 'express';
import {API_HOST, API_PORT} from '../../config/env.js';
const api = express();

api.use(express.json());
api.use(express.urlencoded({extended: true}));


api.get("/", (req, res, next) => { 
  res.json({"message":"Hello World!"})
})


function server() {
  api.listen(PORT, () => {
    console.info(`[API]: Listening on http://${API_HOST}:${API_PORT}`);
  });
};
export {server};
