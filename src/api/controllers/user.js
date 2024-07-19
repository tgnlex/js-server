import {userTable} from '../../export.js';
import {insert, remove, id, all, search} from '../../export.js';
class User {
  static table: userTable;
  static add(user) { insert(this.table, user); }
  static remove(row_id){ remove(this.table, row_id) }
  static all() { 
    const data = await all(this.table, ) 
    return data;
  }
  static getById(row_id) { 
    const data = await id(this.table, row_id);
    return data;
  }
  static getByName(username) {
    const data = await search(this.table, "username",  username);
    return data;
  }
}

export {User};
