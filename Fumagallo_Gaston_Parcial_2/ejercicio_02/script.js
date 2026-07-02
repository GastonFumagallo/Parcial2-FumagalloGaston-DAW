/*
Ejercicio 02 - Validar input vacío
Tema:
Inputs + condicionales

Consigna:
Crear un script que valide si el input está vacío.
Si está vacío, mostrar en el párrafo: "El nombre es obligatorio".
Si tiene contenido, mostrar: "Nombre ingresado correctamente".

Resolver debajo utilizando JavaScript puro.
*/
const inputNombre = document.getElementById("nombre");
const btnValidar = document.getElementById("btnValidar");
const mensaje = document.getElementById("mensaje");

btnValidar.addEventListener("click", () => {
    if (inputNombre.value.trim() === "") {
        mensaje.textContent = "El nombre es obligatorio";
    } 
    else {
        mensaje.textContent = "Nombre ingresado correctamente";
    }
});

