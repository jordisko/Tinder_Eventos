

// variables 


// variables opiniones
let nombres = ["Rocio Mejia", "Basilio Roca", "Mercedes Vela", "Isaias Wu", "Alexander Cobo","Elsa Ripoll","Adelina Maldonado","Alessandro Macia"];

var titulo = document.getElementById("titulo");
console.log(titulo);

var nPosition = 0
console.log(nPosition);

var segundos = titulo.style.animationDuration;
console.log(segundos)


// variables menu

var estadoMenu = false;

var menu = document.getElementById("menu");

var logo = document.getElementById("logo");
var stick = document.getElementsByClassName("stick");
//------------------------------------------------------------- Funciones/estados--------------------------


// funcion de cada x segundos se repita

    setInterval(function(){
        if (nPosition == nombres.length-1) {
            nPosition = 0;
        }
        nPosition ++;
        
        titulo.innerHTML = nombres[nPosition];
    },7950)


    // estado para cambiar el menu

function clickMenu(){
    if (estadoMenu == false) {
        estadoMenu = true;
        menu.style.zIndex = -10;
        logo.style.color = "white";
        
    }
    else{
        estadoMenu = false;
        menu.style.zIndex = 10;
        logo.style.color = "black";
        stick.style
    }
    
 }
 
 console.log(estadoMenu);   




    
    



