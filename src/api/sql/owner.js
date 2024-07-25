
function byUser(table, user_id) {
  let results = []
  let sql = `SELECT * FROM ${table.name} WHERE user_id = ?`;
  db.each(sql, [owner_id], (err, row) => {
    if (err) {
      console.error(err);
      throw err;
    }
    results.push(row);
  })
  return results;
}

export {byUser};
