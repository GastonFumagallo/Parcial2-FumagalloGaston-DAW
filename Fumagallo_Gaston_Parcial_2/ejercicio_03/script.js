/*
Ejercicio 03 - Agregar elementos a una lista
Tema:
Creación de elementos + listas

Consigna:
Crear un script que permita agregar el texto del input como un nuevo li dentro de la lista.
Luego de agregarlo, el input debe quedar vacío.

Resolver debajo utilizando JavaScript puro.
*/

const inputTarea = document.getElementById("tarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", () => {
    const tarea = inputTarea.value.trim();
    if (tarea !== "") {
        const li = document.createElement("li");
        li.textContent = tarea;
        listaTareas.appendChild(li);
        inputTarea.value = "";
    }
});