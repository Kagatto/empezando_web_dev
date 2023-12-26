import actualizar_opciones from "./manejo_opciones.js";
const oSeccion = "opcion_seccion";
const oPracticas = "opcion_practicas";
const oProblemas = "opcion_problema";

document.getElementById(oSeccion).onchange = function () {
    let selectedValue = this.value;

    fetch("../../data/data_practicas_seccion.json")
        .then(response => response.json())
        .then(data => {
            // TODO:
            // No actualiza los valores aunque arr si contiene lo que deberia
            let arr = data[selectedValue] || [];
            console.log(arr);
            actualizar_opciones(oSeccion, oPracticas, arr);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
};

/*
document.getElementById(oSeccion).onchange = function() {
    //Funcion que hace lo de las secciones
    let arr = {
        info1: ["", "Practica 3", "Practica 4", "Practica 5"],
        info2: ["", "Practica 1", "Practica 2", "Practica 3", "Practica 5", "Practica 5", "Practica 6"],
    };
    actualizar_opciones(oSeccion, oPracticas, arr);
};

document.getElementById(oPracticas).onchange = function() {
    //Funcion que hace lo de las secciones
    let arr = {};
    actualizar_opciones(oPracticas, oProblemas, arr);
};
*/