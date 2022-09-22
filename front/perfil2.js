let id =1
const yourUrl ='http://localhost:8080/usuarios/1'
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
    image.src = json.fotoUsuario;
    var image= document.getElementById('imagenperfil').innerHTML 
    document.getElementById('Nombre').innerHTML = json.nombrePersona
    document.getElementById('Apellido').innerHTML = json.apellidoPersona
    document.getElementById('Descripcion').innerHTML = json.descripcionUsuario
    console.log(json.fotoUsuario)
    console.log(json.nombrePersona)
    console.log(json.apellidoPersona)
    console.log(json.descripcionUsuario)
})}

function jsonToMap(jsonStr) 
{
    return new Map(Object.entries(JSON.parse(jsonStr)));
}
mostrarPerfil()

