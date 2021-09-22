const poke_container = document.getElementById("poke-container");
const pokemon_count = 50;
const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
};
//object Es es usado para guardar una colección de datos definidos
const main_types = Object.keys(colors);
// la cantidad de pokemmones que necesitamos la promesa away
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};
// SOLICITA LOS DATOS A LA API
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
};
/* crea las tajetas para mostrar */
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    //dejar la primera letra en mayuscula
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, "0");

    const poke_types = pokemon.types.map((type) => type.type.name);
    console.log(poke_types);
    const type = main_types.find((type) => poke_types.indexOf(type) > -1);
    const color = colors[type];
    //find busca elprimer numero del array que cumpla con ka condiccion

    pokemonEl.style.backgroundColor = color;
    // cada etiqueta
    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML; /* la agregamos a nustro html */

    poke_container.appendChild(pokemonEl);
};

fetchPokemons();
