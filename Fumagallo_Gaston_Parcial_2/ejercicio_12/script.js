/*
Ejercicio 12 - Buscar Pokémon por nombre usando PokeAPI
Tema:
Fetch + petición GET + JSON + renderizado en DOM

Consigna:
Crear un script que permita buscar un Pokémon por nombre usando la API:
https://pokeapi.co/api/v2/pokemon/nombre-del-pokemon
Ejemplo:
https://pokeapi.co/api/v2/pokemon/pikachu
Al hacer click en el botón, se debe mostrar en pantalla:
- Nombre del Pokémon.
- Imagen frontal.
- Altura.
- Peso.
- Tipos.
Si el Pokémon no existe o la petición falla, mostrar: "No se encontró el Pokémon".

Resolver debajo utilizando JavaScript puro.
*/

const inputPokemon = document.getElementById("pokemon");
const btnBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

btnBuscar.addEventListener("click", cargarPokemon);

async function cargarPokemon() {
    const nombrePokemon = inputPokemon.value.toLowerCase().trim();
    if (!nombrePokemon) {
        resultado.innerHTML = "<p>Por favor, ingrese un nombre de Pokémon.</p>";
        return;
    }

    try {
        const respuestaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        if (!respuestaAPI.ok) {
            throw new Error("Pokémon no encontrado");
        }
        const pokemon1 = await respuestaAPI.json();
        mostrarPokemon(pokemon1);
    } catch (error) {
        resultado.innerHTML = "<p>No se encontró el Pokémon.</p>";
    }
}

function mostrarPokemon(pokemon) {
    const tipos = pokemon.types.map(typeInfo => typeInfo.type.name).join(", ");
    resultado.innerHTML = `
        <h3>${pokemon.name}</h3>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Altura: ${pokemon.height}</p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Tipos: ${tipos}</p>
    `;
}  