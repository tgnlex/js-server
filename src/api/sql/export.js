import {Table} from './lib/table.js';
import {db} from '../../db/db.js';
import {id} from './lib/id.js';
import {owner} from './lib/owner.js';
import {insert} from './lib/insert.js';
import {remove} from './lib/remove.js';
import {all} from './lib/all.js';
import {search} from './lib/search.js';
import {todoTable, userTable} from './lib/tables.js';


export {id, insert, remove, all, owner, search};
export {Table, db, todoTable, userTable};
