fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((response) => response.json())
  .then(function (pokemons) {
    pokemons.results.forEach(function (pokemon) {
      getData(pokemon);
    });
  });

let getData = (pokemon) => {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then((pokemonData) => printCard(pokemonData));
};

function printCard(pokemonData) {
  let container = document.querySelector('.cards-container');
  let card = document.createElement('div');
  card.className = 'card';
  let pokemonImg = document.createElement('img');
  pokemonImg.src = pokemonData.sprites.front_default;
  let pokemonId = document.createElement('p');
  pokemonId.innerText = '#' + pokemonData.id;
  let pokemonName = document.createElement('h3');
  pokemonName.innerText = pokemonData.name;
  let pokemonTypesList = document.createElement('ul');
  getTypes(pokemonData.types, pokemonTypesList);

  card.append(pokemonImg, pokemonId, pokemonName, pokemonTypesList);
  container.appendChild(card);
}

function getTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    ul.appendChild(typeLi);
  });
}

printCard();
