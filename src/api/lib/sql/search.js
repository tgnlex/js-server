import {db} from './export.js';

function search(table, field, value) {
  let sql = `SELECT * FROM ${table.name} WHERE ${field} = ${value}`
  db.get(sql, [value], (err, row) => {
    if (err) {
      console.error(err);
      throw err;
    }
    return row;
  })
}

export {search};
