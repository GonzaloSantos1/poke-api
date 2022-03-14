// Recuperamos los datos de la API
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((response) => response.json())
  .then(function (pokemons) {
    pokemons.results.forEach(function (pokemon) {
      getData(pokemon);
    });
  });

// Como la API devuelve una url por cada pokémon, volvemos a hacer fetch sobre esa url
let getData = (pokemon) => {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then((pokemonData) => printCard(pokemonData));
};

//Creamos la función de print
function printCard(pokemonData) {
  let container = document.querySelector('.cards-container');
  let card = document.createElement('div');
  card.className = 'card';
  let pokemonImg = document.createElement('img');
  pokemonImg.className = 'sprite';
  pokemonImg.src = pokemonData.sprites.front_default;
  let pokemonId = document.createElement('p');
  pokemonId.innerText = '#' + pokemonData.id;
  let pokemonName = document.createElement('h3');
  pokemonName.innerText = pokemonData.name;
  let pokemonTypesList = document.createElement('ul');
  //Usamos la función creada más abajo para recuperar los tipos dentro del array
  getTypes(pokemonData.types, pokemonTypesList);

  card.append(pokemonImg, pokemonId, pokemonName, pokemonTypesList);
  container.appendChild(card);
}

//Creamos una función que recorra los tipos y nos cree un img por cada tipo, a su vez incluimos el icono
function getTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement('img');
    if (type['type']['name'] == 'bug') {
      typeLi.src = './assets/type_icons/bug.png';
    } else if (type['type']['name'] == 'dark') {
      typeLi.src = './assets/type_icons/dark.png';
    } else if (type['type']['name'] == 'dragon') {
      typeLi.src = './assets/type_icons/dragon.png';
    } else if (type['type']['name'] == 'electric') {
      typeLi.src = './assets/type_icons/electric.png';
    } else if (type['type']['name'] == 'fairy') {
      typeLi.src = './assets/type_icons/fairy.png';
    } else if (type['type']['name'] == 'fighting') {
      typeLi.src = './assets/type_icons/fighting.png';
    } else if (type['type']['name'] == 'fire') {
      typeLi.src = './assets/type_icons/fire.png';
    } else if (type['type']['name'] == 'flying') {
      typeLi.src = './assets/type_icons/flying.png';
    } else if (type['type']['name'] == 'ghost') {
      typeLi.src = './assets/type_icons/ghost.png';
    } else if (type['type']['name'] == 'grass') {
      typeLi.src = './assets/type_icons/grass.png';
    } else if (type['type']['name'] == 'ground') {
      typeLi.src = './assets/type_icons/ground.png';
    } else if (type['type']['name'] == 'ice') {
      typeLi.src = './assets/type_icons/ice.png';
    } else if (type['type']['name'] == 'normal') {
      typeLi.src = './assets/type_icons/normal.png';
    } else if (type['type']['name'] == 'poison') {
      typeLi.src = './assets/type_icons/poison.png';
    } else if (type['type']['name'] == 'psychic') {
      typeLi.src = './assets/type_icons/psychic.png';
    } else if (type['type']['name'] == 'rock') {
      typeLi.src = './assets/type_icons/rock.png';
    } else if (type['type']['name'] == 'steel') {
      typeLi.src = './assets/type_icons/steel.png';
    } else if (type['type']['name'] == 'water') {
      typeLi.src = './assets/type_icons/water.png';
    }

    ul.appendChild(typeLi);
  });
}
