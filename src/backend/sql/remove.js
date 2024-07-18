import {db} from '../export.js';
import {todoTable} from './tables.js';

function remove(table, id) {
  let sql = `DELETE FROM ${table.name} WHERE id = ${id}`;
  db.run(sql);
};

export {remove};
