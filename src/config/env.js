import dotenv from 'dotenv';
dotenv.config("../../.env");

export const NODE_ENV = process.env.NODE_ENV;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const HOST = process.env.HOST;
export const PORT = process.env.PORT;






