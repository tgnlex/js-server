import {listen} from './server.js';
import {messages} from '../config/messages.js';
import {log} from '../config/alias.js'

function main() {
	log(messages.start);
  listen();
}

main();
