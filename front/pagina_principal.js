function comprobarLogin() {
    let usuarioLogged = localStorage.getItem("usuario");
    if(usuarioLogged == '' || usuarioLogged == null)
    {
        alert('¡Tienes que iniciar sesión!');
        window.location.href="inicio_de_session.html";
    }
}

function cerrar(){
    document.location.href = "inicio_de_session.html"
    localStorage.removeItem("usuario");
}

let id =6
const yourUrl =('http://localhost:8080/eventos/'+id)
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
function mostrarMiniaturaEvento(){
  fetchByIdJSON().then(json =>{
    console.log(json)
    document.getElementById('foto').src = json.fotoEvento
    document.getElementById('nombreevento').value = json.nombreEvento
    // document.getElementById('postal').value = json.codigoPostalLocalizacionEvento
    // document.getElementById('maximopersona').value = json.personasMaxEvento
    document.getElementById('campofecha').value = json.fechaEvento
    // document.getElementById('hora').value=json.horaEvento
    document.getElementById('direccion').value = json.direccionLocalizacionEvento
    // document.getElementById('tipoevento').value = json.descripcionUsuario
    // document.getElementById('descripcion').innerHTML = json.descripcionEvento
   

})}

mostrarMiniaturaEvento()

function perfilevento(){
    document.location.href = "perfilevento.html"
}

