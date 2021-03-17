const server = require('./server/server')();
//const config = require('./configs');
//const db = require('./configs/db');

server.create(/*config, db*/);
server.start();