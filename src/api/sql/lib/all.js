

function all(table) {
  let sql = `SELECT * FROM ${table.name}`;
  db.run(sql, [], (err, row) => {
    if (err) { 
      console.error(err); 
      throw err;
    }
    return row;
  })
};


export {all};
