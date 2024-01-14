export default function dinamic_change_options(selected_value, section_changing, to_change, data_path) {
    // const path_data = obtain_data_path(section_changing);
    fetch(data_path)
        .then(response => response.json())
        .then(data => {
            const arr = data[selected_value] || [];
            actualizar_opciones(to_change, arr);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

export function actualizar_opciones(opcion_derivada, opciones_nuevas) {
    const subopciones = document.getElementById(opcion_derivada);
    // Limpiar opciones actuales
    subopciones.innerHTML = "";
    
    if(opciones_nuevas) {
        opciones_nuevas.forEach(elegir => {
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

export function actualizar_opciones_objeto(opcion_base, opcion_derivada, seleccion_opciones) {
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

