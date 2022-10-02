function comprobarLogin() {
    let usuarioLogged = localStorage.getItem("usuario");
    if(usuarioLogged == '' || usuarioLogged == null)
    {
        alert('¡Tienes que iniciar sesión!');
        window.location.href="inicio_de_session.html";
    }
}

function mostrar(){
    $("#Nombre_usuario").prop("disabled", false);
    $("#nombre").prop("disabled", false); 
    $("#apellido").prop("disabled", false); 
    $("#Gmail").prop("disabled", false); 
    $("#Contraseña").prop("disabled", false); 
    $("#codigo_postal").prop("disabled", false); 
    $("#descripcion").prop("disabled", false); 

}

function guardar(){
    $("#Nombre_usuario").prop("disabled", true);
    $("#nombre").prop("disabled", true); 
    $("#apellido").prop("disabled", true); 
    $("#Gmail").prop("disabled", true); 
    $("#Contraseña").prop("disabled", true); 
    $("#codigo_postal").prop("disabled", true); 
    $("#descripcion").prop("disabled", true); 

}
function cerrar(){
    document.location.href = "inicio_de_session.html"
    localStorage.removeItem("usuario");
}

let id =1
const yourUrl =('http://localhost:8080/usuarios/'+id)
async function fetchByIdJSON() {
    const response = await fetch(yourUrl,{
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'})})
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return (jsonResponse);
}
function mostrarPerfil(){
  fetchByIdJSON().then(json =>{
    var image= document.getElementById('imagenperfil').innerHTML 
    image.src = json.fotoUsuario;
    document.getElementById('Nombre').innerHTML = json.nombrePersona
    document.getElementById('Apellido').innerHTML = json.apellidoPersona
    document.getElementById('Descripcion').innerHTML = json.descripcionUsuario
    console.log(json.fotoUsuario)
    console.log(json.nombrePersona)
    console.log(json.apellidoPersona)
    console.log(json.descripcionUsuario)
})}

mostrarPerfil()