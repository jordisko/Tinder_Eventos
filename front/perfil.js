function comprobarLogin() {
    let usuarioLogged = localStorage.getItem("usuario");
    if(usuarioLogged == '' || usuarioLogged == null)
    {
        alert('¡Tienes que iniciar sesión!');
        window.location.href="inicio_de_session.html";
    }
}

function mostrar(){
    $("#Nombre_usuario").prop("disabled", false);
    $("#nombre").prop("disabled", false); 
    $("#apellido").prop("disabled", false); 
    $("#Gmail").prop("disabled", false); 
    $("#Contraseña").prop("disabled", false); 
    $("#codigo_postal").prop("disabled", false); 
    $("#descripcion").prop("disabled", false); 

}

function guardar(){
    $("#Nombre_usuario").prop("disabled", true);
    $("#nombre").prop("disabled", true); 
    $("#apellido").prop("disabled", true); 
    $("#Gmail").prop("disabled", true); 
    $("#Contraseña").prop("disabled", true); 
    $("#codigo_postal").prop("disabled", true); 
    $("#descripcion").prop("disabled", true); 

}
function cerrar(){
    document.location.href = "inicio_de_session.html"
    localStorage.removeItem("usuario");
    localStorage.removeItem("id");
}

async function mostrarDatos(){
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