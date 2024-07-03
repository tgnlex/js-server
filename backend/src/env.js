import dotenv from 'dotenv';
dotenv.config("../.env");

const NODE_ENV = process.env.NODE_ENV;

const HOST = process.env.HOST_PORT;
const PORT = process.env.SERVER_PORT;
const LOG_LEVEL = process.env.LOG_LEVEL;


export {NODE_ENV, HOST, PORT, LOG_LEVEL}
