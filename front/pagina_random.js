//variables

//variable info

var binfo = document.getElementById("info")
var activo = false;


if (activo == false) {
    
    console.log(binfo.style.animationName);
 }
 else{
    
    console.log(binfo.style.animationName);
 }


function info(){
    if (activo == false) {
        activo = true;
        console.log(activo);
        binfo.style.animationName = "subir";
        binfo.style.height = "60%";
        binfo.style.top = "-300px"
    }
    else{
        activo = false;
        console.log(activo);
        binfo.style.animationName = "";
        binfo.style.height = "20%";
        binfo.style.top = "-110px"
    }

    
}

