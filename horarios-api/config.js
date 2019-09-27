'use strict';

var SERVER_IP = 'localhost';
var SERVER_PORT = process.env.PORT || 3636;

var MY_SQL = require('mysql');
var MY_SQL_PORT = 3306;
var MY_SQL_USER_DB = 'root';
var MY_SQL_IP = 'localhost';
var MY_SQL_PASSWORD = '';
var MY_SQL_DB_NAME = 'horarios_db';

var CONNECTION = MY_SQL.createConnection({
    host: MY_SQL_IP,
    user: MY_SQL_USER_DB,
    password: MY_SQL_PASSWORD,
    database: MY_SQL_DB_NAME,
    port: MY_SQL_PORT
});

module.exports = {
    SERVER_IP,
    SERVER_PORT,
    CONNECTION
};
