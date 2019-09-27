'use strict';

var config = require('../config');

function connect() {
    return config.CONNECTION.connect(function (error) {
        if (error) {
            throw error;
        } else {
            console.log('Conexión exitosa: OK');
        }
    });
}
function disconnect(connection) {
    connection.end();
    console.log("Desconectado");
}

module.exports = {
    connect,
    disconnect
};