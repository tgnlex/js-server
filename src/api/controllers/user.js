import {userTable, insert, remove, id, all, search} from '../lib/sql/export.js';
class User {
  static table = userTable;
  static async add(user) { insert(this.table, user); }
  static async remove(row_id){ remove(this.table, row_id) }
  static async all() { 
    const data = await all(this.table, ) 
    return data;
  }
  static async getById(row_id) { 
    const data = await id(this.table, row_id);
    return data;
  }
  static async getByName(username) {
    const data = await search(this.table, "username",  username);
    return data;
  }
}

export {User};
