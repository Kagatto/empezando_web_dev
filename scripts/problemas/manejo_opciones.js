export default function actualizar_opciones(opcion_base, opcion_derivada, seleccion_opciones) {
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

export function validOptionValue(str) {
    return str.replace(/\s/g, "").toLowerCase();
}
