import dinamic_change_options from "./manejo_opciones.js";
const OSECCION = "opcion_seccion";
const OPRACTICAS = "opcion_practicas";
const OPROBLEMAS = "opcion_problema";

window.onload = function() {
    update_secciones();
};

document.getElementById(OSECCION).onchange = function () {
    const PATH = "../../data/opciones_seleccion/opciones_practicas.json";
    const SELECTED_VALUE = this.value;
    dinamic_change_options(SELECTED_VALUE, OPRACTICAS, PATH);

    document.getElementById(OPROBLEMAS).innerHTML = "";
};

document.getElementById(OPRACTICAS).onchange = function () {
    // Change path depending on section value
    const SELECT_PATH = element => "../../data/opciones_seleccion/opciones_" + element.value + ".json";
    const PATH = SELECT_PATH(document.getElementById(OSECCION));

    const SELECTED_VALUE = this.value;

    dinamic_change_options(SELECTED_VALUE, OPROBLEMAS, PATH);
};

function update_secciones() {
    const PATH = "../../data/opciones_seleccion/opciones_seccion.json";
    dinamic_change_options("", OSECCION, PATH);
}
