async function getUsers() {
    let response = await fetch('http://localhost:3636/api/users', {
        method: 'GET',
    });
    let result = await response.json();
    return result;
}




async function login() {
    var usuario = {
        'correo': document.getElementById("correo").value,
        'clave': document.getElementById("clave").value
    };

    var formulario = [];
    for (var property in usuario) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(usuario[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    let result = await response.json();
    console.log(result);
    if (result.message == "Usuario y clave son correctos") {
        sessionStorage.setItem("user", JSON.stringify(result.result));
        window.location.href = "homeCalendario.html";
    } else {
        document.getElementById("mensajes").innerHTML = "El usuario o la contraseña no es correcta";
    }
}





function logout() {
    sessionStorage.setItem("user", null);
    window.location.href = "index.html";
}





async function createUser() {

    var usuario = {
        'nombres': document.getElementById("nombres").value,
        'apellidos': document.getElementById("apellidos").value,
        'correo': document.getElementById("correo").value,
        'clave': document.getElementById("clave").value
    };

    var formulario = [];
    for (var property in usuario) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(usuario[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    let result = await response.json();
    console.log(result);
}





async function updateUser(id) {
    console.log(id);
    var usuario = {
        'nombres': document.getElementById("nombres").value,
        'apellidos': document.getElementById("apellidos").value,
        'correo': document.getElementById("correo").value,
        'clave': document.getElementById("clave").value
    };

    var formulario = [];
    for (var property in usuario) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(usuario[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/user/'+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    let result = await response.json();
    console.log(result);
}



