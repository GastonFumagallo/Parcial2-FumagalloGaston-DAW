/*
Ejercicio 10 - Convertir texto a mayúsculas
Tema:
Strings + input + DOM

Consigna:
Crear un script que, al hacer click en el botón, tome el texto ingresado, lo convierta a mayúsculas y lo muestre en el párrafo.

Resolver debajo utilizando JavaScript puro.
*/

const inputTexto = document.getElementById("texto");
const btnConvertir = document.getElementById("btnConvertir");
const resultado = document.getElementById("resultado");

btnConvertir.addEventListener("click", () => {
    const textoIngresado = inputTexto.value.trim();
    const textoMayusculas = textoIngresado.toUpperCase();
    resultado.textContent = textoMayusculas;
});