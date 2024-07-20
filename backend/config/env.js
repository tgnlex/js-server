import dotenv from 'dotenv';
dotenv.config("./.env");

export const NODE_ENV = process.env.NODE_ENV;
export const HOST = process.env.BACK_HOST;
export const PORT = process.env.BACK_PORT;
export const LOG = process.env.BACK_LOG_LEVEL;
export const FRONTEND = process.env.FRONT_PORT;






