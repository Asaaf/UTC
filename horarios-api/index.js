'use strict';

var app = require('./app');
var global = require('./config');
var server = require('http').Server(app);

server.listen(global.SERVER_PORT, function () {
    console.log(`API Server Listen: ON. http://${global.SERVER_IP}:${global.SERVER_PORT}`);
});