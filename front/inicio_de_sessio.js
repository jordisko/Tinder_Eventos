async function fetchLoginJSON() {
    const response = await fetch('http://localhost:8080/login');
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  }

  function comprobarLogin(){
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
  fetchLoginJSON().then(json => {
    
    for (const jsonElement of json) {
        console.log(jsonElement.nombreUsuario);
        console.log(usuario);
        if (usuario==jsonElement.nombreUsuario){
            if (password==jsonElement.contraseniaUsuario){
                document.location.href = "pagina_principal.html"
            }
            else{
                alert("Contraseña incorrecta")
            }
        }
        else{
            alert("Nombre de usuario incorrecto")
        
        }
    }
    
    
})};


const buttonsend= document.getElementById('buttonsend')
buttonsend.onclick = function(){
    comprobarLogin()
}