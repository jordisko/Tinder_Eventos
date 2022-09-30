
async function crearCuenta(){
  const url = 'http://localhost:8080/crearusuarios';
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const nombreusuario = document.getElementById("nombreusuario").value;
const password = document.getElementById("password").value;
const email = document.getElementById("gmail").value;
const password2 = document.getElementById("password2").value;
//const fotousuario = document.getElementById("img1").value;
const descripcion = document.getElementById("descripcion").value;
const codigoPostal = document.getElementById("codigopostal").value;

const data = {"nombreUsuario": nombreusuario,
              "correoElectronico": email,
              "contraseniaUsuario":password,
              //"fotoUsuario":fotousuario , 
              "descripcionUsuario":descripcion,
              "nombrePersona": nombre,
              "apellidoPersona": apellido,
              "codigoPostal": codigoPostal}
              console.log(data);
  fetch(url, {
  method: 'PUT',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))
console.log(JSON.stringify(data));

}
// function mostrar(){
//   var archivo = document.getElementById("file").files[0];
//   var reader = new FileReader();
//   if (file) {
//     reader.readAsDataURL(archivo );
//     reader.onloadend = function () {
//       document.getElementById("img").src = reader.result;
//     }
//   }
// }
// function init() {
//   var inputFile = document.getElementById('inputFile1');
//   inputFile.addEventListener('change', mostrarImagen, false);
// }

// function mostrarImagen(event) {
//   var file = event.target.files[0];
//   var reader = new FileReader();
//   reader.onload = function(event) {
//     var img = document.getElementById('img1');
//     img.src= event.target.result;
//   }
//   reader.readAsDataURL(file);
// }

// window.addEventListener('load', init, false);
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
// function cuentacrear(){
//   document.location.href = "pagina_principal.html"

//   }

//   var nombre =document.getElementById('usuario')
// eror.style.color ='red'
// function cuentacrear(){
//   var mensaje = []
//   if (nombre.value === null || nombre.value === '') {
//     mensaje.push('error')
//   } else {
//     document.location.href = "inicio.html"
//   }
//   } 
