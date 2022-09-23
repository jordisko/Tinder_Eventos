//variables

//variable foto
let cFotos = ["front\fotos\fotos_random"];
let imagenes = [];
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

for (let i = 0; i < cFotos.length; i++) {
     imagenes[i] = new Image();
     imagenes[i].src= cFotos[i]; 
        console.log(i);
}



