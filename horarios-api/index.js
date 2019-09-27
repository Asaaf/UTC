'use strict';

var app = require('./app');
var config = require('./config');
var server = require('http').Server(app); 


config.CONNECTION.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Prueba de conexion a la base de datos MySQL: OK');
        config.CONNECTION.end();
        console.log("Prueba de conexión finalizada");
    }
});


server.listen(config.SERVER_PORT, function () {
    console.log(`API Server Listen: ON. http://${config.SERVER_IP}:${config.SERVER_PORT}`); 
});