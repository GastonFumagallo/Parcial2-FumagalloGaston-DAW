/*
Ejercicio 11 - Validación simple de formulario
Tema:
Formulario + validaciones + submit

Consigna:
Crear un script que valide el formulario al enviarlo.
Condiciones:
- El usuario no puede estar vacío.
- El email no puede estar vacío.
- El email debe contener @.
Si hay error, mostrar el mensaje correspondiente en el párrafo y evitar el envío del formulario.
Si todo está correcto, mostrar: "Formulario enviado correctamente".

Resolver debajo utilizando JavaScript puro.
*/

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const usuario = document.getElementById("usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensajeError = document.getElementById("error");

    if (usuario === "") {
        mensajeError.textContent = "El usuario es obligatorio";
        mensajeError.style.color = "red";
        return
    } 
    if (email === "") {
        mensajeError.textContent = "El email es obligatorio";
        mensajeError.style.color = "red";
        return;
    }
    if (!email.includes("@")) {
        mensajeError.textContent = "El email debe contener @";
        mensajeError.style.color = "red";
        return;
    }

    mensajeError.textContent = "Formulario enviado correctamente";
    mensajeError.style.color = "green";
    
});