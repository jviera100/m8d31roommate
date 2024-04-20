$(document).ready(function() {
    // Función para hacer parpadear un elemento
    $.fn.parpadea = function() {
      $(this).fadeOut(200, function() {
        $(this).fadeIn(200);
      });
    };
  
    // Cuando el mouse pasa sobre la imagen, la imagen parpadea
    $("#boton-agregar-roommate").hover(function() {
      $(this).parpadea();
    });
  
    // Cuando el usuario hace clic en la imagen, se aplica una animación de deslizamiento y desvanecimiento
    $("#boton-agregar-roommate").click(function() {
      $(this).slideUp(200, function() {
        $(this).slideDown(200, function() {
          $(this).fadeOut(200, function() {
            $(this).fadeIn(200);
          });
        });
      });
    });
  });

  $(document).ready(function() {
    // Función para hacer parpadear un elemento
    $.fn.parpadea = function() {
      $(this).fadeOut(200, function() {
        $(this).fadeIn(200);
      });
    };
  
    // Cuando el mouse pasa sobre la imagen, la imagen parpadea
    $("#boton-agregar-gasto").hover(function() {
      $(this).parpadea();
    });
  
    // Cuando el usuario hace clic en la imagen, se aplica una animación de deslizamiento y desvanecimiento
    $("#boton-agregar-gasto").click(function() {
      $(this).slideUp(200, function() {
        $(this).slideDown(200, function() {
          $(this).fadeOut(200, function() {
            $(this).fadeIn(200);
          });
        });
      });
    });
  });
  
  $(document).ready(function() {
    // Función para hacer parpadear un elemento
    $.fn.parpadea = function() {
      $(this).fadeOut(200, function() {
        $(this).fadeIn(200);
      });
    };
  
    // Cuando el mouse pasa sobre la imagen, la imagen parpadea
    $("#cuerpo-formulario").hover(function() {
      $(this).parpadea();
    });
  
    // Cuando el usuario hace clic en la imagen, se aplica una animación de deslizamiento y desvanecimiento
    $("#cuerpo-formulario").click(function() {
      $(this).slideUp(200, function() {
        $(this).slideDown(200, function() {
          $(this).fadeOut(200, function() {
            $(this).fadeIn(200);
          });
        });
      });
    });
  });

  $(document).ready(function() {
    // Función para hacer parpadear un elemento
    $.fn.parpadea = function() {
      $(this).fadeOut(200, function() {
        $(this).fadeIn(200);
      });
    };
  
    // Cuando el mouse pasa sobre la imagen, la imagen parpadea
    $(".table").hover(function() {
      $(this).parpadea();
    });
  
    // Cuando el usuario hace clic en la imagen, se aplica una animación de deslizamiento y desvanecimiento
    $(".table").click(function() {
      $(this).slideUp(200, function() {
        $(this).slideDown(200, function() {
          $(this).fadeOut(200, function() {
            $(this).fadeIn(200);
          });
        });
      });
    });
  });
  