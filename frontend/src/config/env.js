import dotenv from 'dotenv';
dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

export {NODE_ENV, HOST, PORT};
