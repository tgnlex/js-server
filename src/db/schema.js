import {db} from './db.js';

const todoSchema = `
CREATE TABLE IF NOT EXISTS todos(
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  owner_id INTEGER,
  task VARCHAR(70) NOT NULL,
  description TEXT NOT NULL,
  isActive Boolean NOT NULL
) `;

const userSchema = `
CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname  VARCHAR(50) NOT NULL,
  age INTEGER, 
  email varchar(80) NOT NULL,
  username VARCHAR(70) NOT NULL,
  hashed BLOB NOT NULL,
  salt BLOB not null 
)
`
db.run('DROP TABLE todos')
db.run(todoSchema);
//db.run(userSchema);
