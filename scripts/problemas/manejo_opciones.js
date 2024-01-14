export default function dinamic_change_options(selected_value, TO_CHANGE, DATA_PATH) {
    fetch(DATA_PATH)
        .then(response => response.json())
        .then(data => {
            const ARRAY = data[selected_value] || [];
            actualizar_opciones(TO_CHANGE, ARRAY);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

export function actualizar_opciones(TO_CHANGE, OPCIONES_NUEVAS) {
    const SUBOPCIONES = document.getElementById(TO_CHANGE);
    // Limpiar opciones actuales
    SUBOPCIONES.innerHTML = "";
    
    if(OPCIONES_NUEVAS) {
        OPCIONES_NUEVAS.forEach(elegir => {
            const OPCION = document.createElement("option");
            OPCION.textContent = elegir;
            OPCION.value = validOptionValue(elegir);
            SUBOPCIONES.add(OPCION);
        });
    }
}

export function validOptionValue(str) {
    return str.replace(/\s/g, "").toLowerCase();
}

