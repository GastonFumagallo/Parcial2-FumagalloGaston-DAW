/*
Ejercicio 01 - Cambiar texto de un elemento
Tema:
DOM básico + evento click

Consigna:
Crear un script que, al hacer click en el botón, cambie el texto del h1 por:
"Título modificado con JavaScript".

Resolver debajo utilizando JavaScript puro.
*/

const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", () => {
    titulo.textContent = "Título modificado con JavaScript";
});