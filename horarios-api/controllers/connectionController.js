'use strict';

var config = require('../config');

var CONNECTION = config.MY_SQL.createConnection({
    host: config.MY_SQL_IP,
    user: config.MY_SQL_USER_DB,
    password: config.MY_SQL_PASSWORD,
    database: config.MY_SQL_DB_NAME,
    port: config.MY_SQL_PORT
});

module.exports = {
    CONNECTION
};