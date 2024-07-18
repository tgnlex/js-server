import {db} from '../export.js';

async function id(table, id) {
  let sql = `SELECT * FROM ${table.name} WHERE id = ?`; 
  const data = db.get(sql, [id], (err, row) => {
    if (err) {console.error(err)}
    console.info(row);
    return row;
  })
}
export {id};
