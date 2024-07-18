
function owner(table, owner_id) {
  let results = []
  let sql = `SELECT * FROM ${table.name} WHERE owner_id = ? ORDER BY id`;
  db.each(sql, [owner_id], (err, row) => {
    if (err) {
      console.error(err);
      throw err;
    }
    results.push(row);
  })
  return results;
}

export {owner};
