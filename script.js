// access dom nodes
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonNameEl = document.getElementById("pokemon-name");
const pokemonIdEl = document.getElementById("pokemon-id");
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
  } catch (err) {
    window.alert("Pokemon not found!");
    console.log(err);
  }
};

searchBtn.addEventListener("click", () => {
  const searchTextLC = searchInput.value.toLowerCase();
  fetchData(searchTextLC);
});
