function getUsers() {
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3636/api/users';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}

function login() {
    var username = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;
    var formData = new FormData();

    formData.append("username", username);
    formData.append("clave", clave);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3636/api/login");
    xhr.send(formData);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(xhr.response);
        }
    }
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