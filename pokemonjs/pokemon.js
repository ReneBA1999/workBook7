"use strict"

async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/charizard`)
    const data = await response.json();
    const pokemonInfo = {
        name: data.name,
        // imageURL: data.sprites.front_default
        imageURL: data.sprites.front_shiny,
        backimageURL: data.sprites.back_shiny
    }
    return pokemonInfo;
}

async function DisplayData() {
    const pokemonInfo = await fetchPokemonData();
    console.log(pokemonInfo.name);
    document.getElementById('pokemon-name').textContent = pokemonInfo.name;
    document.getElementById('pokemon-front-sprite').src = pokemonInfo.imageURL;
    document.getElementById('pokemon-back-sprite').src = pokemonInfo.backimageURL;
}
DisplayData('');