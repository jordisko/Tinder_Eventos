async function fetchLoginJSON() {
    const response = await fetch('http://localhost:8080/login');
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  }

  function comprobarLogin(){
    //Cogemos los valores del formulario
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

  fetchLoginJSON().then(json => {
    
    for (const jsonElement of json) {
        console.log(jsonElement.nombreUsuario);
        console.log(usuario);
        if (usuario==jsonElement.nombreUsuario){
            if (password==jsonElement.contraseniaUsuario){

                let id = jsonElement.idUsuario;

                //Los guardamos en el LocalStorage
                localStorage.setItem('usuario', usuario.value);
                localStorage.setItem('id', id);

                //Redireccionamos a la pagina principal
                document.location.href = "pagina_principal.html"
            }
            else{
                alert("Contraseña incorrecta")
            }
        }
        else{
            alert("Nombre de usuario incorrecto")
        
        }
    }
    
    
})};


const buttonsend= document.getElementById('buttonsend')
buttonsend.onclick = function(){
    comprobarLogin()
}

// EN PRUEBAS
// usuario and Password from the register-form
var usuario = document.getElementById('usuario');
var password = document.getElementById('password');

// storing input from register-form
//CAMBIAR A DATOS COGIDOS DE LA BBDD
function store() {
    localStorage.setItem('usuario', usuario.value);
    localStorage.setItem('password', password.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('usuario');
    var storedPw = localStorage.getItem('password');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}