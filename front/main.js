

// variables 

var opiniones = document.getElementById("opiniones");
var ideas = document.getElementById("idea");
var equipos = document.getElementById("equipo");
var tyhs = document.getElementById("tyh");

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
    },7980)


    // estado para cambiar el menu

function clickMenu(){
    if (estadoMenu == false) {
        menu.style.zIndex = -1;
        estadoMenu = true;
        logo.style.color = "white";
        for (let index = 0; index < stick.length; index++) {
            stick[index].style.backgroundColor = "white";
        }
        menu.style.animationName = "menuOff";      
    }
    else{
        estadoMenu = false;
        menu.style.zIndex = 10;
        logo.style.color = "#850E35";
        for (let index = 0; index < stick.length; index++) {
            stick[index].style.backgroundColor = "black";   
        }
        menu.style.animationName = "menuOn";
    }
    
 }
 
 console.log(estadoMenu);
 
 function opinion(){
    opiniones.style.display = "";
    ideas.style.display = "none";
    equipos.style.display = "none";
    tyhs.style.display = "none";
 }
 function idea(){
    opiniones.style.display = "";
    ideas.style.display = "";
    equipos.style.display = "none";
    tyhs.style.display = "none";
 }
 function equipo(){
    opiniones.style.display = "";
    ideas.style.display = "none";
    equipos.style.display = "";
    tyhs.style.display = "none";
 }
 function tyh(){
    opiniones.style.display = "";
    ideas.style.display = "none";
    equipos.style.display = "none";
    tyhs.style.display = "";
 }




    
    



