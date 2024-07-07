import dotenv from 'dotenv';
dotenv.config('../../../.env');

const NODE_ENV = process.env.NODE_ENV;
const HOST = process.env.WEB_SERVER_HOST;
const PORT = process.env.WEB_SERVER_PORT;

const LOG_LEVEL = process.env.WEB_LOG_LEVEL;

export {NODE_ENV, HOST, PORT, LOG_LEVEL};
