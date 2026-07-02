/*
Ejercicio 07 - Filtrar nombres de un array
Tema:
Arrays + strings + filtro dinámico

Consigna:
Dado el array:
const alumnos = ["Ana", "Bruno", "Carla", "Diego", "Elena", "Federico"];
Crear un script que permita buscar alumnos por texto.
A medida que el usuario escribe, deben mostrarse en la lista solo los nombres que incluyan el texto ingresado.

Resolver debajo utilizando JavaScript puro.
*/

const alumnos = ["Ana", "Bruno", "Carla", "Diego", "Elena", "Federico"];
const busqueda = document.getElementById("busqueda");
const resultado = document.getElementById("resultado");

busqueda.addEventListener("input", () => {
    const textoBusqueda = busqueda.value.toLowerCase();
    resultado.innerHTML = "";

    const alumnosFiltrados = alumnos.filter(alumno => alumno.toLowerCase().includes(textoBusqueda));

    alumnosFiltrados.forEach(alumno => {
        const li = document.createElement("li");
        li.textContent = alumno;
        resultado.appendChild(li);
    });
});

function cargarAlumnos() {
    alumnos.forEach(alumno => {
        const li = document.createElement("li");
        li.textContent = alumno;
        resultado.appendChild(li);
    });
}

// Puse esta función para que al cargar la página se muestren todos los alumnos inicialmente, me daba toc que no aparezcan jajaja.

cargarAlumnos();