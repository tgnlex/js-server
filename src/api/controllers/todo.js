import {todoTable, all, insert, remove,  id, byUser} from '../lib/sql/export.js'

class Todo {
  static table = todoTable;
  static add(todo) { insert(this.table, todo); }
  static remove(row_id) { remove(this.table, row_id); }
  static async all() {
    let data = all(this.table); 
    return data;
  }
  static async getById(row_id) {
    const data = await id(this.table, row_id); 
    return data;
  }
  static async byUser(user_id) {
    const data = await byUser(this.table,  user_id) 
    return data;
  }
}
export {Todo};
