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
    document.getElementById('imagenperfil').src = json.fotoUsuario
    document.getElementById('Nombre').value = json.nombrePersona
    document.getElementById('Apellido').value = json.apellidoPersona
    document.getElementById('Descripcion').innerHTML = json.descripcionUsuario
    console.log(json.fotoUsuario)
    console.log(json.nombrePersona)
    console.log(json.apellidoPersona)
    console.log(json.descripcionUsuario)
})}

mostrarPerfil()

