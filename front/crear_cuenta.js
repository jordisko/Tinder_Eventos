

// var todocorrecto = true;
// var formulario =document.formulariocontato

// for (let index = 0; index == formulario.length; index++) {
// if(formulario[i].value == null || formulario[i].value.length == 0){
//   todocorrecto=false;
// }

// }
// if(todocorrecto==true){
//   console.log("todo correcto")
// }
function cuentacrear(){
  document.location.href = "pagina_principal.html"

  }

  function init() {
    var inputFile = document.getElementById('inputFile1');
    inputFile.addEventListener('change', mostrarImagen, false);
  }
  
  function mostrarImagen(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      var img = document.getElementById('img1');
      img.src= event.target.result;
    }
    reader.readAsDataURL(file);
  }
  
  window.addEventListener('load', init, false);
//   var nombre =document.getElementById('usuario')
// eror.style.color ='red'
// // function cuentacrear(){
// //   var mensaje = []
// //   if (nombre.value === null || nombre.value === '') {
// //     mensaje.push('error')
// //   } else {
// //     document.location.href = "inicio.html"
// //   }
// //   }




pass1 = document.getElementById('password');
pass2 = document.getElementById('password2');
usuario = document.getElementById('usuario').value;
let valor=true


function cuentacrear(){
  if(usuario == "") {
    alert("Error: Debe escribir Usuario!");
    valor=false
  }
  console.log(valor)
  if(valor==true){
    document.location.href = "pagina_principal.html"
  }
  }


