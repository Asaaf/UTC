var express = require('express');
var UserController = require('../controllers/userController');
var api = express.Router();


api.post('/user', UserController.createUser);


module.exports = api;