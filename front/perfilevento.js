let id =1
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
function mostrarPerfilEvento(){
  fetchByIdJSON().then(json =>{
    console.log(json)
    // var image= document.getElementById('imagenperfil').value 
    // image.src = json.fotoUsuario;
    document.getElementById('nombreevento').value = json.nombreEvento
    document.getElementById('descripcion').value = json.descripcionEvento
    document.getElementById('postal').value = json.codigoPostalLocalizacionEvento
    document.getElementById('maximopersona').value = json.personasMaxEvento
    document.getElementById('campofecha').value = json.fechaEvento
    // document.getElementById('hora').value = json.descripcionUsuario
    document.getElementById('direccion').value = json.direccionLocalizacionEvento
    document.getElementById('tipoevento').value = json.descripcionUsuario
    document.getElementById('numero').value = json.numeroLocalizacionEvento
   

})}

mostrarPerfilEvento()