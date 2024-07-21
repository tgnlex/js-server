import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('/repos/js-server/backend/src/dev.db');

export {db};
