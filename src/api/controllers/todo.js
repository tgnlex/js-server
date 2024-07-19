import {todoTable} from '../../sql/export.js';
import {all, insert, remove,  id} from '../../sql/export.js'
class Todo {
  static table = todoTable;
  static add(todo) { insert(this.table, todo); }
  static remove(row_id) { remove(this.table, row_id); }
  static async all() {
    let data = all(this.table); 
    return data;
  }
  static getById(row_id) {
    const data = await id(this.table, row_id); 
    return data;
  }
  static owner(user_id) {
    const data = owner(this.table,  user_id) 
    return data;
  }
}
export {Todo};
