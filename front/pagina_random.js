//variables

//variable foto

function comprobarLogin() {
    let usuarioLogged = localStorage.getItem("usuario");
    if(usuarioLogged == '' || usuarioLogged == null)
    {
        alert('¡Tienes que iniciar sesión!');
        window.location.href="inicio_de_session.html";
    }


// let cFotos = ["front\fotos\fotos_random"];
// let imagenes = [];
// variable tarjeta

var tarjeta = document.getElementById("mainTarjeta");

//variable info

var binfo = document.getElementById("info");
var activo = false;

var texto = document.getElementById("descripcion");



// info

if (activo == false) {
    
    console.log(binfo.style.animationName);
 }
 else{
    
    console.log(binfo.style.animationName);
 }

 texto.style.display = "none"; 
  
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
    
    tarjeta.style.animationName = "moveR";
    var random = Math.floor(Math.random() * 6);
    setTimeout(function(){
        tarjeta.style.animationName = "";
        document.getElementById("foto").src = "fotos/fotos_random/"+random+".jpeg";
    },1000)
    }
    function aleatorioL(){
    
        tarjeta.style.animationName = "moveL";
        var random = Math.floor(Math.random() * 6);
        setTimeout(function(){
            tarjeta.style.animationName = "";
            document.getElementById("foto").src = "fotos/fotos_random/"+random+".jpeg";
        },1000)
        }
    }
// for (let i = 1; i < cFotos.length; i++) {
//      imagenes[i] = new Image();
//      imagenes[i].src= "front\fotos\fotos_random/"+i+".jpeg"; 
//         console.log(imagenes[i]);
// }
