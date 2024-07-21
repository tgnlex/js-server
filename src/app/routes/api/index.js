import express from 'express';

const api = express.Router();

api.use(todoRouter, '/todo/')



export {api};
