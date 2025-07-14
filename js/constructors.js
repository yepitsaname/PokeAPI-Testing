const POKE_API_URL = "https://pokeapi.co/api/v2/";

class PokeAPIObject {
  constructor(name, path, url){
    this.name = name;
    this.path = path;
    this.url = url ?? POKE_API_URL;
    this[name] = {};
    this.pagenation = 60;
  };

  #request(name_or_id, pagenation){
    return fetch(`${POKE_API_URL}${this.path}` + (name_or_id ?? '') + (pagenation ? `?limit=${pagenation}` : ''))
      .then(response => response.json() )
      .then( data => {
        name_or_id ?
          this[this.name][data.name] = data :
          data.results.forEach( entry => { this[this.name][entry.name] = entry });
      })
      .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`))
  };
  getRequest(name_or_id) { this.#request(name_or_id) };
  getRequestAll() { this.#request(null, this.pagenation)};
}

const Berries = new PokeAPIObject('berries','berry/');
const Contests = new PokeAPIObject('contests','contest-type/');
const Encounters = new PokeAPIObject('encounters','encounter-method/');
const Evolutions = new PokeAPIObject('evolutions','evolution-chain/');
const Generations = new PokeAPIObject('generations','generation/');
const Items = new PokeAPIObject('items','item/');
const Locations = new PokeAPIObject('locations','location/');
const Machines = new PokeAPIObject('machines','machine/');
const Moves = new PokeAPIObject('moves','move/');
const Pokemon = new PokeAPIObject('pokemon','pokemon/');

Pokemon.natureSets = {
  index: ['attack','defense','sp attack','sp defense','speed'],
  findVal: (nature, stat_name)=> { return false},
  hardy:   [1,1,1,1,1],
  lonely:  [1,1,1,1,1],
  adamant: [1,1,1,1,1],
  naughty: [1,1,1,1,1],
  brave:   [1,1,1,1,1],
  bold:    [1,1,1,1,1],
  docile:  [1,1,1,1,1],
  impish:  [1,1,1,1,1],
  lax:     [1,1,1,1,1],
  relaxed: [1,1,1,1,1],
  modest:  [1,1,1,1,1],
  mild:    [1,1,1,1,1],
  bashful: [1,1,1,1,1],
  rash:    [1,1,1,1,1],
  quiet:   [1,1,1,1,1],
  calm:    [1,1,1,1,1],
  gentle:  [1,1,1,1,1],
  careful: [1,1,1,1,1],
  quirky:  [1,1,1,1,1],
  sassy:   [1,1,1,1,1],
  timid:   [1,1,1,1,1],
  hasty:   [1,1,1,1,1],
  jolly:   [1,1,1,1,1],
  naive:   [1,1,1,1,1],
  serious: [1,1,1,1,1]
};

Pokemon.calcStat = ( stat, iv, ev, base, level, nature_modifier ) => {
  let result = ((2 * base * iv + (ev / 4) * level) / 100 + 5) * nature_modifier;
  return result;
}
