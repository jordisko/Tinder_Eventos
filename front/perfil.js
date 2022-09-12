
function mostrar(){
    $("#Nombre_usuario").prop("disabled", false);
    $("#nombre").prop("disabled", false); 
    $("#apellido").prop("disabled", false); 
    $("#Gmail").prop("disabled", false); 

}

function guardar(){
    $("#Nombre_usuario").prop("disabled", true);
    $("#nombre").prop("disabled", true); 
    $("#apellido").prop("disabled", true); 
    $("#Gmail").prop("disabled", true); 

}