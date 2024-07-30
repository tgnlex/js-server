import sqlite3 from 'sqlite3';
import {__db} from '../../config/path.js';
const db = new sqlite3.Database(`${__db}/dev.db`);

export {db};
