/*
Ejercicio 06 - Detectar cantidad de caracteres
Tema:
Eventos de teclado + strings

Consigna:
Crear un script que actualice en tiempo real la cantidad de caracteres escritos en el textarea.
Ejemplo: "Caracteres: 25".

Resolver debajo utilizando JavaScript puro.
*/

const comentario = document.getElementById("comentario");
const cantidad = document.getElementById("cantidad");

comentario.addEventListener("input", () => {
    const numCaracteres = comentario.value.length;
    cantidad.textContent = `Caracteres: ${numCaracteres}`;
});