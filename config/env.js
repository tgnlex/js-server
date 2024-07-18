import dotenv from 'dotenv';
dotenv.config("../../../.env");

export const NODE_ENV = process.env.NODE_ENV;

export const HOST = process.env.API_SERVER_HOST;
export const PORT = process.env.API_SERVER_PORT;

export const LOG_LEVEL = process.env.API_LOG_LEVEL;



