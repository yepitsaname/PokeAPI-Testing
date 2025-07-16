const Player = {
  pokemon: [],
  items: []
};


Pokemon.request('Exeggutor');
Pokemon.request('Diglett');

let bulbasaur = new PokemonObject(Pokemon, 'bulbasaur')