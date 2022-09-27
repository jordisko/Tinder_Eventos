//variables

//variable foto





// let cFotos = ["front\fotos\fotos_random"];
// let imagenes = [];
// variable tarjeta

var tarjeta = document.getElementById("mainTarjeta");

//variable info

var binfo = document.getElementById("info");
var activo = false;

var texto = document.getElementById("texto");



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

function aleatorio(){
    var random = Math.floor(Math.random() * 6); 
    tarjeta.style.animationName = "moveR";
    setTimeout(function(){
        document.getElementById("foto").src = "fotos/fotos_random/"+random+".jpeg";
        tarjeta.style.animationName = "";
        
    },2000)
    }
// for (let i = 1; i < cFotos.length; i++) {
//      imagenes[i] = new Image();
//      imagenes[i].src= "front\fotos\fotos_random/"+i+".jpeg"; 
//         console.log(imagenes[i]);
// }



