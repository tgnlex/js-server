import {Table} from './constructor/table.js';
import {db} from '../db/db.js';
import {id} from './id.js';
import {owner} from './owner.js';
import {insert} from './insert.js';
import {remove} from './remove.js';
import {all} from './all.js';
import {search} from './search.js';
import {todoTable, userTable} from './tables.js';


export {id, insert, remove, all, owner, search};
export {Table, db, todoTable, userTable};
