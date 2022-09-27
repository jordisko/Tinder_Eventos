async function crearEvento() {
  // const url = 'http://localhost:8080/creareventos';
function comprobarLogin() {
  let usuarioLogged = localStorage.getItem("usuario");
  if(usuarioLogged == '' || usuarioLogged == null)
  {
      alert('¡Tienes que iniciar sesión!');
      window.location.href="inicio_de_session.html";
  }
}

function cancelar(){
  document.location.href = "evento.html"
}

  const nombreEvento = document.getElementById("nombreEvento").value;
  const descripcionEvento = document.getElementById("descripcionEvento").value;
  const codigoPostalLocalizacionEvento = document.getElementById("codigoPostalLocalizacionEvento").value;
  const personasMaxEvento = document.getElementById("personasMaxEvento").value;
  const diaEvento = document.getElementById("fechaEvento").value;
  const direccionLocalizacionEvento = document.getElementById("direccionLocalizacionEvento").value;
  const numeroLocalizacionEvento = document.getElementById("numeroLocalizacionEvento").value;
  const tipoDeEvento=document.getElementById("tipoDeEvento").value;
  const horaEvento=document.getElementById("horaEvento").value;
  //const fotoEvento =document.getElementById("").value;
  const postData = {
    "nombreEvento": nombreEvento,
    "descripcionEvento": descripcionEvento,
    "codigoPostalLocalizacionEvento": codigoPostalLocalizacionEvento,
    "personasMaxEvento": personasMaxEvento,
    "fechaEvento": diaEvento+" "+horaEvento+":00" ,
    "direccionLocalizacionEvento": direccionLocalizacionEvento,
    "numeroLocalizacionEvento": numeroLocalizacionEvento,
    "tipoDeEvento":tipoDeEvento
    //"fotoEvento": fotoEvento,
  };
  console.log(postData);
  
    
    try {
      const response = await fetch('http://localhost:8080/creareventos', {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "Connection": "keep-alive"
        },
        body: JSON.stringify(postData)
      });
    
      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }
    
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error: ' + error);
    }
 }
 function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
    }
  }
}
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

// async function crearEvento() {
//   const url = 'http://localhost:8080/creareventos';
//   const nombreEvento = document.getElementById("nombreEvento").valor;
//   const descripcionEvento = document.getElementById("nombreEvento").valor;
//   const codigoPostalLocalizacionEvento = document.getElementById("nombreEvento").valor;
//   const personasMaxEvento = document.getElementById("nombreEvento").valor;
//   const fechaEvento = document.getElementById("nombreEvento").valor;
//   const direccionLocalizacionEvento = document.getElementById("nombreEvento").valor;
//   const numeroLocalizacionEvento = document.getElementById("nombreEvento").valor;
//   const tipoDeEvento=document.getElementById("").valor;
//   const fotoEvento =document.getElementById("").valor;
//   const data = {
//     "nombreEvento": nombreEvento,
//     "descripcionEvento": descripcionEvento,
//     "codigoPostalLocalizacionEvento": codigoPostalLocalizacionEvento,
//     "personasMaxEvento": personasMaxEvento,
//     "fechaEvento": fechaEvento,
//     "direccionLocalizacionEvento": direccionLocalizacionEvento,
//     "numeroLocalizacionEvento": numeroLocalizacionEvento,
//     "tipoDeEvento":tipoDeEvento,
//     "fotoEvento": fotoEvento,
//   }
//   const element = document.querySelector('#put-request-set-headers .date-updated');
//   const requestOptions = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer my-token',
//       'My-Custom-Header': 'foobar'
//     },
//     body: JSON.stringify({ title: 'Fetch PUT Request Example' })
//   };
//   fetch(url, requestOptions)
//     .then(response => response.json())
//     .then(data => element.innerHTML = data.updatedAt);
// }
// function cancelar(){
//   document.location.href = "evento.html"
// }

// function crear(){
//   document.location.href = "evento.html"
// }

