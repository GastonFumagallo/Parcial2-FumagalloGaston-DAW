/*
Ejercicio 04 - Recorrer array y mostrarlo en pantalla
Tema:
Arrays + renderizado

Consigna:
Dado el array:
const productos = ["Mouse", "Teclado", "Monitor", "Notebook"];
Crear un script que recorra el array y muestre cada producto como un elemento li dentro de la lista.

Resolver debajo utilizando JavaScript puro.
*/

const productos = ["Mouse", "Teclado", "Monitor", "Notebook"];
const listaProductos = document.getElementById("listaProductos");

productos.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = producto;
    listaProductos.appendChild(li);
});
