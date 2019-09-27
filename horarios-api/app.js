'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var user = require('./routes/userRoutes');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Allow', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Expose-Headers','Content-Disposition');
    next();
});

app.use('/api', user);

module.exports = app;
