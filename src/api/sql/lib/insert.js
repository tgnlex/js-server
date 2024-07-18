import {db} from '../export.js';

async function insert(table, values) {
  await db.run(`INSERT INTO ${table.name} (${table.fields}) VALUES (${table.fieldSub})`, 
          [...values])
}

export {insert};
