$(document).ready(function () {
    //codigo de funcion se ejecuta cuando pagina este cargada
   
    // Tooltip initialization
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    
        // Tooltip initialization
        $('[data-bs-toggle="tooltip"]').tooltip();
      
        // Evento click agregar roommate
         $("#boton-agregar-roommate").click(function () {
            alert("roommate agregado...");
        });
        // Evento click agregar gasto
        $("#boton-agregar-gasto").click(function () {
            alert("gasto agregado...");
        });       
        // Evento click boton editar modal
        $("#boton-editar-modal").click(function () {
            alert("gasto editado...");
        });          
  
    });
  