

//variable foto


function comprobarLogin() {
    let usuarioLogged = localStorage.getItem("usuario");
    if(usuarioLogged == '' || usuarioLogged == null)
    {
        alert('¡Tienes que iniciar sesión!');
        window.location.href="inicio_de_session.html";
    }
}


// let cFotos = ["front\fotos\fotos_random"];
// let imagenes = [];
// variable tarjeta

var tarjeta = document.getElementById("mainTarjeta");
var random = 0;
//variable info

var binfo = document.getElementById("info");
var activo = false;

var nombreevento = document.getElementById("nombreevento");
var maximoPersonas = document.getElementById("maximopersonas");
var texto = document.getElementById("descripcion");

var nombre = ["Fiesta en casa","Razz","Acampada de chill","Desmadre en casa","Paseito por mar","Playa de noche"];
var numero = ["3/10","6/12","3/6","7/19","4/6","4/9"];
var infoT = ["Pequeña fiesta en casa del chill con mis 3 panas, puedes invitar a los tuyos.","Quedada en Razz, a perrear hasta el suelo.","Acamapada por cualquier parte de la montaña que tengo al lado de casa. Lo que surja.","Mis padres no estan en casa, significa que desmadre.","Alquiler de un velerito por el mar, no se nadar asi que vigirlarme por favor.","Tengo un ukelele y mucha cerveza, cunde playa sin hoguera"];

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
    random++;
    setTimeout(function(){
        tarjeta.style.animationName = "";
        document.getElementById("foto").src = "fotos/fotos_random/"+random+".jpeg";
        document.getElementById('nombreevento').innerHTML = nombre[random];
        document.getElementById('maximopersona').innerHTML = numero[random];
        document.getElementById('descripcion').innerHTML = infoT[random];
    },1000)
    }

function aleatorioL(){
    
    tarjeta.style.animationName = "moveL";
    random++;
    setTimeout(function(){
        tarjeta.style.animationName = "";
            document.getElementById("foto").src = "fotos/fotos_random/"+random+".jpeg";
            document.getElementById("foto").src = "fotos/fotos_random/"+random+".jpeg";
        document.getElementById('nombreevento').innerHTML = nombre[random];
        document.getElementById('maximopersona').innerHTML = numero[random];
        document.getElementById('descripcion').innerHTML = infoT[random];
    },1000)
    }
    
// for (let i = 1; i < cFotos.length; i++) {
//      imagenes[i] = new Image();
//      imagenes[i].src= "front\fotos\fotos_random/"+i+".jpeg"; 
//         console.log(imagenes[i]);
// }
