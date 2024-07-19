import dotenv from 'dotenv';
dotenv.config("./.env");

export const NODE_ENV = process.env.NODE_ENV;

export const HOST = process.env.FRONTEND_HOST;
export const PORT = process.env.FRONTEND_PORT;
export const LOG = process.env.FRONTEND_LOG_LEVEL;

export const API_PORT = process.env.BACKEND_PORT;



