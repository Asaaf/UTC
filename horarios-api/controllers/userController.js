'use strict';
var Usuario = require('../models/userModel');

function createUser(req, res) {
    var params = req.body;
    console.log(params);
    res.status(200).send({
        message: `Se registro`,
        error: err
    });
}

module.exports = {
    createUser
}