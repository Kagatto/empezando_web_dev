import dinamic_change_options from "./manejo_opciones.js";
const OSECCION = "opcion_seccion";
const OPRACTICAS = "opcion_practicas";
const OPROBLEMAS = "opcion_problema";

document.getElementById(OSECCION).onchange = function () {
    const path = "../../data/opciones_seleccion/opciones_seccion.json";
    const selected_value = this.value;
    dinamic_change_options(selected_value, OSECCION, OPRACTICAS, path);

    document.getElementById(OPROBLEMAS).innerHTML = "";
};

document.getElementById(OPRACTICAS).onchange = function () {
    // Change path depending on section value
    const select_path = element => "../../data/opciones_seleccion/opciones_practicas_" + element.value + ".json";
    const path = select_path(document.getElementById(OSECCION));

    const selected_value = this.value;

    dinamic_change_options(selected_value, OPRACTICAS, OPROBLEMAS, path);
};
