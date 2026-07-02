/*
Ejercicio 05 - Contador con botones
Tema:
Eventos + variables + actualización del DOM

Consigna:
Crear un contador que permita sumar de a 1, restar de a 1 y reiniciar el contador a 0.
El valor debe mostrarse siempre dentro del h2.

Resolver debajo utilizando JavaScript puro.
*/
const contadorTexto = document.getElementById("contador");
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnReiniciar = document.getElementById("btnReiniciar");

let contador = 0;

btnSumar.addEventListener("click", () => {
    contador++;
    contadorTexto.textContent = contador;
});

btnRestar.addEventListener("click", () => {
    contador--;
    contadorTexto.textContent = contador;
});

btnReiniciar.addEventListener("click", () => {
    contador = 0;
    contadorTexto.textContent = contador;
});



