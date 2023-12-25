import actualizar_opciones from "./manejo_opciones.js";

const oSeccion = "opcion_seccion";
const oPracticas = "opcion_practicas";
const oProblemas = "opcion_problema";

document.getElementById(oSeccion).onchange = function() {
    //Funcion que hace lo de las secciones
    let arr = {};
    actualizar_opciones(oSeccion, oPracticas, arr);
};

/*
function actualizar_opciones(opcion_base, opcion_derivada, seleccion_opciones) {
    const subopciones = document.getElementById(opcion_derivada);
    
    // Limpiar opciones actuales
    subopciones.innerHTML = "";
    
    // Agregar nuevas opciones según la sección seleccionada
    const opcion_seleccionada = document.getElementById(opcion_base).value;
    
    const array_opciones = seleccion_opciones[opcion_seleccionada];
    
    if(array_opciones) {
        array_opciones.forEach(elegir => {
            const opcion = document.createElement("option");
            opcion.textContent = elegir;
            opcion.value = validOptionValue(elegir);
            subopciones.add(opcion);
        });
    }
}

function validOptionValue(str) {
    return str.replace(/\s/g, "").toLowerCase();
}
*/