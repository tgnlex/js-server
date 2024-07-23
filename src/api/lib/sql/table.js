import {db} from './export.js';
function createTable(name, schema) {
  let sql = `CREATE TABLE IF NOT EXISTS ${name} (${schema})`;
  return db.run(sql);
}

function deleteTable(name) {
  let sql = `DROP TABLE ${name}`;
  return db.run(sql);
}

export {createTable, deleteTable};
