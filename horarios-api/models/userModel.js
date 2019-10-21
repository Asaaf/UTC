'use strict';

class User {
    constructor(id, correo, nombres, apellidos, clave) {
        this.id = id;
        this.correo = correo;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.clave = clave;
    }
};

module.exports = User;