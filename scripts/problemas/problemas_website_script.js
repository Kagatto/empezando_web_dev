import actualizar_opciones from "./manejo_opciones.js";
const oSeccion = "opcion_seccion";
const oPracticas = "opcion_practicas";
const oProblemas = "opcion_problema";

document.getElementById(oSeccion).onchange = function () {
    const path = "../../data/opciones_seleccion/opciones_seccion.json";
    const selected_value = this.value;
    dinamic_change_options(selected_value, oSeccion, oPracticas, path);

    document.getElementById(oProblemas).innerHTML = "";
};

document.getElementById(oPracticas).onchange = function () {
    // Change path depending on section value
    const select_path = element => "../../data/opciones_seleccion/opciones_practicas_" + element.value + ".json";
    const path = select_path(document.getElementById(oSeccion));
    const selected_value = this.value;
    dinamic_change_options(selected_value, oPracticas, oProblemas, path);
};

function dinamic_change_options(selected_value, section_changing, to_change, data_path) {
    fetch(data_path)
        .then(response => response.json())
        .then(data => {
            const arr = data[selected_value] || [];
            actualizar_opciones(section_changing, to_change, arr);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}
