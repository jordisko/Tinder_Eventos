// Variables
// variable tarjeta
var tarjeta = document.getElementById("mainTarjeta");


//variable info

var binfo = document.getElementById("info");
var activo = false;

var texto = document.getElementById("descripcion");

function comprobarLogin() {
    let usuarioLogged = localStorage.getItem("usuario");
    if(usuarioLogged == '' || usuarioLogged == null)
    {
        alert('¡Tienes que iniciar sesión!');
        window.location.href="inicio_de_session.html";
    }
}

// conexion con la appi

let id =1;
let yourUrl =('http://localhost:8080/eventos/'+id)



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

    // var image= document.getElementById('imagenperfil').value 
    // image.src = json.fotoUsuario;
    console.log(json.idEvento)
    document.getElementById('nombreevento').innerHTML = json.nombreEvento
    document.getElementById('descripcion').innerHTML = json.descripcionEvento
    document.getElementById('foto').src = json.fotoEvento
    document.getElementById('maximopersona').innerHTML = json.personasMaxEvento
    // document.getElementById('campofecha').value = json.fechaEvento
    // document.getElementById('hora').value = json.descripcionUsuario
    // document.getElementById('direccion').value = json.direccionLocalizacionEvento
    // document.getElementById('tipoevento').value = json.descripcionUsuario
    // document.getElementById('numero').value = json.numeroLocalizacionEvento
   
    
})}


texto.style.display = "none"; 

mostrarPerfilEvento()

// para ir actualizando la info






  
function info(){
    if (activo == false) {
        activo = true;
        console.log(activo);
        binfo.style.animationName = "subir";
        binfo.style.height = "60%";
        binfo.style.top = "-300px"
        texto.style.display = "";   
     }
    else{
        activo = false;
        console.log(activo);
        binfo.style.animationName = "";
        binfo.style.height = "20%";
        binfo.style.top = "-110px"
        texto.style.display = "none";
    }

    
}

function aleatorioR(){
    id ++;
    mostrarPerfilEvento()
    tarjeta.style.animationName = "moveR";
    var random = Math.floor(Math.random() * 6);
    setTimeout(function(){
        tarjeta.style.animationName = "";
        document.getElementById("foto").src = "fotos/fotos_random/"+random+".jpeg";
    },1000)
    }
    mostrarPerfilEvento()
function aleatorioL(){
    
    tarjeta.style.animationName = "moveL";
    var random = Math.floor(Math.random() * 6);
    setTimeout(function(){
        tarjeta.style.animationName = "";
        document.getElementById("foto").src = "fotos/fotos_random/"+random+".jpeg";
    },1000)
    }



