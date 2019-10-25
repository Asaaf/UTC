/*
author:         Dasaaf
version:        0.1
date:           Octubre del 2019
description:    El archivo app contiene todas las configuraciones para la aplicacion de horarios (API)
*/


'use strict';//Activo el modo de uso estricto para javascript

var express = require('express');//Declaro una variable llamada express y le asigno el módulo de Express
var bodyParser = require('body-parser');//Declaro una variable llamada bodyParser y le asigno el módulo de Body Parser
var app = express();//Declaro una variable llamada app a la cuál asignaremos el método de express

var user = require('./routes/userRoutes');//Declaramos una nueva variable llamada user a la cuál asignaremos el archivo de rutas CRUD del Usuario
var materia = require('./routes/materiaRoutes');//Declaramos una nueva variable llamada materia a la cuál asignaremos el archivo de rutas CRUD de la materia

app.use(bodyParser.urlencoded({extended: false}));//Asignamos a la variable app que los datos entrantes por la url serán traducidos en formato json
app.use((req, res, next) => {//Asignamos a la variable app la función flecha que configurará los encabezados de datos entrantes por la URL
    res.header('Access-Control-Allow-Origin', '*');//Configuramos en el encabezado de respuesta que todos los clientes que se conecten a la URL podrán acceder sin ningún problema
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');//Configuramos en los encabezados de respuesta los datos que podrá ver el cliente
    res.header('Allow', 'GET, POST, PUT, DELETE');//Configuramos en los encabezados de respuesta los métodos permitidos por el cliente
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');//Configuramos en los encabezados de respuesta los métodos a los cuales puede acceder el cliente
    next();//Configuramos un llamado asincrono para que procese datos en caso de que se demore la respuesta
});

app.use('/api', user);//Asignamos a la variable app las rutas que puede utilizar nuestro cliente para el CRUD de usuarios
app.use('/api', materia);//Asignamos a la variable app las rutas que puede utilizar nuestro cliente para el CRUD de materia

module.exports = app;//Exportamos la variable app para que el index.js la pueda utilizar al iniciar el servidor
