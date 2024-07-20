import {db} from './db.js';
const schema = {
  users:`
    user_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname  VARCHAR(50) NOT NULL,
    age INTEGER, 
    email varchar(80) NOT NULL,
    username VARCHAR(70) NOT NULL,
    account_type VARCHAR(5) NOT NULL,
    hashed_password BLOB NOT NULL,
    salt BLOB not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  `,
  sessions: `
    session_id IMTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    session_key VARCHAR(40) DEFAULT '0' NOT NULL,
    user_id integer FOREIGN KEY (user_i) REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    ip_address VARCHAR(16) DEFAULT '0' NOT NULL,
    user_agent VARCHAR(50) NOT NULL, 
    username VARCHAR(70) NOT NULL,
    user_data TEXT NOT NULL,
    last_activity INT(10) unsigned DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `,
  avatars: `
    avatar_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    avatar_blob BLOB NOT NULL,
    user_id INTEGER NOT NULL FOREIGN KEY (user_id) REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    profile_id INTEGER NOT NULL FOREIGN KEY (profile_id) REFERENCES profiles (profile_id) ON UPDATE CASCADE ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
`,
  profiles: `
    profile_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER NOT NULL FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
    avatar BLOB FOREIGN KEY (avatar) REFERENCES avatars(image)
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL  
  `,
  todos: `
    todo_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER NOT NULL FOREIGN KEY(user_id) REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    task VARCHAR(70) NOT NULL,
    description TEXT,
    isActive Boolean NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
   `,
  
  messages: `
    message_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER NOT NULL FOREIGN KEY (user_id) REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    recipient_id INTEGER NOT NULL FOREIGN KEY (user_id) REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    body: TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  `,
  posts: `
    post_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER NOT NULL FOREIGN KEY (user_id) REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    profile_id INTEGER NOT NULL FOREIGN KEY (profile_id) REFERENCES profiles (profile_id) ON UPDATE CASCADE ON DELETE CASCADE,
    content TEXT NOT NULL,
    media BLOB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  `,
   comments: `
    comment_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    user_id INTEGER NOT NULL FOREIGN KEY (user_id) REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    post_id INTEGER NOT NULL FOREIGN KEY (post_id) REFERENCES posts (post_id) ON UPDATE CASCADE ON DELETE CASCADE,
    content: TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
   `,
   logs: `
    log_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    log_level VARCHAR(20), 
    data: TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  `
};

export {schema};
