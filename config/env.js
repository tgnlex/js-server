import dotenv from 'dotenv';
dotenv.config("./.env");

export const NODE_ENV = process.env.NODE_ENV;

export const FRONTEND_HOST = process.env.FRONTEND_HOST;
export const FRONTEND_PORT = process.env.FRONTEND_PORT;
export const FRONTEND_LOG = process.env.FRONTEND_LOG_LEVEL;

export const BACKEND_HOST = process.env.BACKEND_HOST
export const BACKEND_PORT = process.env.BACKEND_PORT;
export const BACKEND_LOG = process.env.BACKEND_LOG_LEVEL;



