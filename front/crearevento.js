async function crearEvento() {

  const nombreEvento = document.getElementById("nombreEvento").valor;
  const descripcionEvento = document.getElementById("nombreEvento").valor;
  const codigoPostalLocalizacionEvento = document.getElementById("nombreEvento").valor;
  const personasMaxEvento = document.getElementById("nombreEvento").valor;
  const fechaEvento = document.getElementById("nombreEvento").valor;
  const direccionLocalizacionEvento = document.getElementById("nombreEvento").valor;
  const numeroLocalizacionEvento = document.getElementById("nombreEvento").valor;
  const tipoDeEvento=document.getElementById("").valor;
  const fotoEvento =document.getElementById("").valor;
  const putData = {
    "nombreEvento": nombreEvento,
    "descripcionEvento": descripcionEvento,
    "codigoPostalLocalizacionEvento": codigoPostalLocalizacionEvento,
    "personasMaxEvento": personasMaxEvento,
    "fechaEvento": fechaEvento,
    "direccionLocalizacionEvento": direccionLocalizacionEvento,
    "numeroLocalizacionEvento": numeroLocalizacionEvento,
    "tipoDeEvento":tipoDeEvento,
    "fotoEvento": fotoEvento,
  };

  try {
    const res = await fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(putData),
    });

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const data = await res.json();

    const result = {
      status: res.status + "-" + res.statusText,
      headers: { "Content-Type": res.headers.get("Content-Type") },
      data: data,
    };

  } catch (err) {
    console.error('Error:', error);
  }
}


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