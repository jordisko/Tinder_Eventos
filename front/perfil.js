
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
}