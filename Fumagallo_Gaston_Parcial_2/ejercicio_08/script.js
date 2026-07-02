/*
Ejercicio 08 - Cambiar estilos desde JavaScript
Tema:
Manipulación de estilos

Consigna:
Crear un script que, al hacer click en el botón, aplique al párrafo los siguientes estilos:
color: white;
background-color: darkblue;
padding: 10px;
border-radius: 8px;

Resolver debajo utilizando JavaScript puro.
*/

const parrafo = document.getElementById("parrafo");
const btnEstilo = document.getElementById("btnEstilo");

btnEstilo.addEventListener("click", () => {
    parrafo.style.color = "white";
    parrafo.style.backgroundColor = "darkblue";
    parrafo.style.padding = "10px";
    parrafo.style.borderRadius = "8px";
});
