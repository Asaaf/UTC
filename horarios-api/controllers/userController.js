'use strict';

var Usuario = require('../models/userModel');//Declaro un nuevo modelo de tipo Usuario
var Conexion = require('./connectionController');//Declaro una variable conexión para conectarme a la base de datos MySQL

function createUser(req, res) {//Se crea una nueva función llamada createUser para registrar nuevos usuarios en el sistema
    var params = req.body;//recupero los parametros de la petición que pidio el cliente (en éste caso la petición es crear un nuevo usuario)

    //GUARDANDO LOS DATOS DEL USUARIO QUE SERÁN GUARDADOS EN LA BASE DE DATOS
    var usuario = new Usuario();//creo un nuevo modelo de usuario que va a estar vacío
    usuario.correo = params.correo;//asigno al correo del modelo usuario vacío el dato del correo que envío el cliente 
    usuario.nombres = params.nombres;//asigno al nombre del modelo usuario vacío el dato del nombre que envío el cliente 
    usuario.apellidos = params.apellidos;//asigno a los apellidos del modelo usuario vacío el dato de los apellidos que envío el cliente 
    usuario.clave = params.clave;//asigno a la clave del modelo usuario vacío el dato de la clave que envío el cliente 

    //INSERTAR DATO EN LA BASE DE DATOS------>
    var sql = "INSERT INTO usuarios(nombres, apellidos, correo, clave) VALUES ('" + usuario.nombres + "', '" + usuario.apellidos + "', '" + usuario.correo + "','" + usuario.clave + "')";//declaro una variable que almacenara la petición a la base de datos, en éste caso INSERT INTO para CREAR un nuevo usuario
    Conexion.CONNECTION.query(sql, function (err, result) {//con la variable conexion creada anteriormente accedo a la conexión para hacer una nueva consulta de tipo SQL y la ejecuto
        if (err) throw err;//Si hay algún error, muestro el error

        //RESPUESTA DEL SERVIDOR CUANDO SE CREA UN USUARIO------>
        res.status(200).send({//Si no hay error preparo una nueva RESPUESTA con estado=200 que significa que todo salio bien
            message: 'Usuario creado',//en la RESPUESTA que será enviada adjunto un mensaje que dice "Usuario creado"
            result: result,//también adiciona a la RESPUESTA el resultado al insertar el registro en la base de datos
            error: err//Y por último, si existe algún error también lo envío en la RESPUESTA
        });

    }
    );
}

module.exports = {
    createUser
}