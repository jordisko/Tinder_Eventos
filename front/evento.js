// function comprobarLogin() {
//     let usuarioLogged = localStorage.getItem("usuario");
//     if(usuarioLogged == '' || usuarioLogged == null)
//     {
//         alert('¡Tienes que iniciar sesión!');
//         window.location.href="inicio_de_session.html";
//     }
// }

function crear(){
    document.location.href = "crearevento.html"
}

function cerrar(){
    document.location.href = "inicio_de_session.html"
    localStorage.removeItem("usuario");
}

function perfilevento(){
        document.location.href = "perfilevento.html"
}

