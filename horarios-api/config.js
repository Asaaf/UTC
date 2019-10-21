'use strict';

var SERVER_IP = 'localhost';
var SERVER_PORT = process.env.PORT || 3636;

var MY_SQL = require('mysql');
var MY_SQL_PORT = 3306;
var MY_SQL_USER_DB = 'root';
var MY_SQL_IP = 'localhost';
var MY_SQL_PASSWORD = '';
var MY_SQL_DB_NAME = 'horarios_db';

module.exports = {
    SERVER_IP,
    SERVER_PORT,
    MY_SQL,
    MY_SQL_PORT,
    MY_SQL_USER_DB,
    MY_SQL_IP,
    MY_SQL_PASSWORD,
    MY_SQL_DB_NAME
};
