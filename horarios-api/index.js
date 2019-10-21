'use strict';

var app = require('./app');
var config = require('./config');
var server = require('http').Server(app);
var connection = require('./controllers/connectionController');


connection.CONNECTION.connect(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Conexión MySQL exitosa: OK');
        server.listen(config.SERVER_PORT, function () {
            console.log(`API Server Listen: ON. http://${config.SERVER_IP}:${config.SERVER_PORT}`);
        });
    }
});

