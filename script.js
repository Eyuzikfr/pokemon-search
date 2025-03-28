import colours from "./typeColors.js";

// access dom nodes
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonNameEl = document.getElementById("pokemon-name");
const pokemonIdEl = document.getElementById("pokemon-id");
const imgContainer = document.getElementById("img-container");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const typesEl = document.getElementById("types");
const hpEl = document.getElementById("hp");
const attackEl = document.getElementById("attack");
const defenseEl = document.getElementById("defense");
const spAtkEl = document.getElementById("special-attack");
const spDefEl = document.getElementById("special-defense");
const speedEl = document.getElementById("speed");

// fetch data from api
const fetchData = async (pokemon) => {
  const endpoint = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    console.log(data);
    showPokemon(data);
  } catch (err) {
    window.alert("Pokemon not found!");
    console.log(err);
  }
};

const showPokemon = (pokemonData) => {
  pokemonNameEl.textContent = `${pokemonData.name.toUpperCase()}`;
  pokemonIdEl.textContent = `${pokemonData.id}`;
  imgContainer.innerHTML = `<img id="sprite" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}'s image" />`;
  weightEl.textContent = `Weight: ${pokemonData.weight}`;
  heightEl.textContent = `Height: ${pokemonData.height}`;
  typesEl.innerHTML = pokemonData.types
    .map(
      (slot) => `<span class="type-chip">${slot.type.name.toUpperCase()}</span>`
    )
    .join("");
  const typeEl = document.querySelectorAll(".type-chip");
  typeEl.forEach((type, index) => {
    type.style.background = `${colours[pokemonData.types[index].type.name]}`;
  });
  hpEl.textContent = `${pokemonData.stats[0].base_stat}`;
  attackEl.textContent = `${pokemonData.stats[1].base_stat}`;
  defenseEl.textContent = `${pokemonData.stats[2].base_stat}`;
  spAtkEl.textContent = `${pokemonData.stats[3].base_stat}`;
  spDefEl.textContent = `${pokemonData.stats[4].base_stat}`;
  speedEl.textContent = `${pokemonData.stats[5].base_stat}`;
};

searchBtn.addEventListener("click", () => {
  const searchTextLC = searchInput.value.toLowerCase();
  fetchData(searchTextLC);
});
