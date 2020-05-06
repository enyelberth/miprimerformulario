(function(){
    var formulario = document.getElementById('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('add_row');

    var validarNombre = function(){
        if (formulario.pnombre.value == 0) {
            alert("Complete el campo nombre");
        }
    };
    
    var validar = function(){
        validarNombre();
    };
    formulario.addEventListener("submit", validar);
}())



