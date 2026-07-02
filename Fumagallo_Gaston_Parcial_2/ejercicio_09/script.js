/*
Ejercicio 09 - Mostrar solo números pares
Tema:
Arrays + lógica condicional + DOM

Consigna:
Dado el array:
const numeros = [3, 8, 12, 5, 21, 10, 7, 14];
Crear un script que recorra el array y muestre en la lista únicamente los números pares.

Resolver debajo utilizando JavaScript puro.
*/

const numeros = [3, 8, 12, 5, 21, 10, 7, 14];
const listaNumeros = document.getElementById("listaNumeros");

numeros.forEach(numero => {
    if (numero % 2 === 0) {
        const li = document.createElement("li");
        li.textContent = numero;
        listaNumeros.appendChild(li);
    }
});
