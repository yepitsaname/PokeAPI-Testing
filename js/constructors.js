class PokeAPI {
 #url; #pokeAPIState;
  constructor(url){
    this.#url = url ?? "https://pokeapi.co/api/v2/";
    this.#pokeAPIState = false;
    PokeAPI.checkAPIConnection(this)
  };

  // Getters
  get url(){ return this.#url };
  get APIState(){ return this.#pokeAPIState };

  // Setters
  set url(newUrl){ this.#url = newUrl };
  set APIState(state){this.#pokeAPIState = state };

  // Static Methods
  static async request(url, callback, err_func = (error)=>{
    console.error(`ERROR: Unable to find/reach resource ${url}.\n${error}`);
  } ){
    await fetch( url )
    .then( response => response.json() )
    .then( callback )
    .catch(( error ) => {
      err_func( error );
    });
  };

  static async checkAPIConnection(api){
    const callback = () => { api.APIState = true };
    const err_func = () => { api.APIState = false; alert('PokeAPI appears to be down') };
    PokeAPI.request(api.url, callback, err_func );
  };

}

class PokedexService {
  #name; #path;
  constructor( pokeAPI, name, path ){
    this.pokeService = pokeAPI
    this.#name = name;
    this.#path = path;
    this[name] = {};
  }

  // Getters
  get name(){ return this.#name };
  get path(){ return this.#path };

  // Setters
  set name(new_name){ this.#name = new_name };
  set path(new_path){ this.#path = new_path };

  // Public Methods
  async request( name_or_id ){
    const callback = (data)=>{ this[this.name][data.name] = data; return true }
    await PokeAPI.request(this.pokeService.url + this.path + name_or_id, callback)
  }

  async requestAll( number_of_results ){
    const callback = (data)=>{
      data.forEach( entry => { this[this.name][entry.name] = entry })
    }
    PokeAPI.request(this.pokeService.url + this.path + `?limit${number_of_results}`, callback)
  }

  async checkEntry(entry){
    try{
      console.log(!this[this.#name].hasOwnProperty(entry))
      if( !this[this.#name].hasOwnProperty(entry) ){
        await this.request(entry)
        return true;
      } else {
        return true;
      }
    } catch(err) {
      console.error(err);
      return false;
    }
  }
}

class PokemonObject{
  #base; #iv; #ev; #nature;
  constructor(pokedexService, name){
    this.pokedexService = pokedexService
    this.name = name;
    this.#nature = PokemonObject.#generateNature();
    this.#base = [5,5,5,5,5,5];
    this.#iv = PokemonObject.#generateIVs();
    this.#ev = [0,0,0,0,0,0];
    this.level = 1;
    this.stats = [0,0,0,0,0,0];
    PokemonObject.loadPokemon(this);
  };

  // Getters
  static get natureSets(){ return PokemonObject.#natureSets };
  get nature(){ return this.#nature };
  get base(){ return this.#base };

  // Setters
  set nature(new_nature){ this.#nature = new_nature };
  set base(new_base){ this.#base = new_base.map((x)=>{return x}) };

  // Methods
  #calcStat( stat ){
    let nature_mod = PokemonObject.findVal(this.nature, stat);
    let result = (((2 * this.#base[stat] + this.#iv[stat] + (this.#ev[stat] / 4)) * this.level) / 100 + 5) * nature_mod;
    return Math.round(result);
  };

  #calcStatHP(){
    this.stats[0] = Math.round((((2 * this.#base[0] + this.#iv[0] + (this.#ev[0] / 4)) * this.level) / 100 + this.level + 10));
  }

  calcAllStats(){
    this.#calcStatHP();
    for( let i = 1; i < 6; i++){
      this.stats[i] = this.#calcStat(i)
    }
  };

  levelUp(){
    if(this.level != 100){
      this.level++;
      this.calcAllStats();
    };
  };

  // Static Properties
  static #natureSets = {
    //index: 'hp','attack','defense','sp attack','sp defense','speed'
    hardy:   [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    lonely:  [1.0, 1.1, 0.9, 1.0, 1.0, 1.0],
    adamant: [1.0, 1.1, 1.0, 0.9, 1.0, 1.0],
    naughty: [1.0, 1.1, 1.0, 1.0, 0.9, 1.0],
    brave:   [1.0, 1.1, 1.0, 1.0, 1.0, 0.9],
    bold:    [1.0, 0.9, 1.1, 1.0, 1.0, 1.0],
    docile:  [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    impish:  [1.0, 1.0, 1.1, 0.9, 1.0, 1.0],
    lax:     [1.0, 1.0, 1.1, 1.0, 0.9, 1.0],
    relaxed: [1.0, 1.0, 1.1, 1.0, 1.0, 0.9],
    modest:  [1.0, 0.9, 1.0, 1.1, 1.0, 1.0],
    mild:    [1.0, 1.0, 0.9, 1.1, 1.0, 1.0],
    bashful: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    rash:    [1.0, 1.0, 1.0, 1.1, 0.9, 1.0],
    quiet:   [1.0, 1.0, 1.0, 1.1, 1.0, 0.9],
    calm:    [1.0, 0.9, 1.0, 1.0, 1.1, 1.0],
    gentle:  [1.0, 1.0, 0.9, 1.0, 1.1, 1.0],
    careful: [1.0, 1.0, 1.0, 0.9, 1.1, 1.0],
    quirky:  [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    sassy:   [1.0, 1.0, 1.0, 1.0, 1.1, 0.9],
    timid:   [1.0, 0.9, 1.0, 1.0, 1.0, 1.1],
    hasty:   [1.0, 1.0, 0.9, 1.0, 1.0, 1.1],
    jolly:   [1.0, 1.0, 1.0, 0.9, 1.0, 1.1],
    naive:   [1.0, 1.0, 1.0, 1.0, 0.9, 1.1],
    serious: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
  };

  // Static Methods
  static async loadPokemon(pokemon){
    try{
      await pokemon.pokedexService.checkEntry(pokemon.name)
      let new_base = [];
      pokemon.pokedexService.pokemon[pokemon.name].stats.forEach( stat => {
        new_base.push(stat.base_stat);
      });
      pokemon.base = new_base;
      pokemon.calcAllStats();
    } catch(err) {
      console.error(err);
    }
  }

  static #generateNature(){
    const key_set = Object.keys(PokemonObject.#natureSets);
    const nature_key = Math.round(Math.random() * (key_set.length - 1));
    return key_set[nature_key];

  }

  static #generateIVs(){
    let iv_set = [];
    for( let i = 0; i < 6; i++){
      iv_set.push(Math.round(Math.random() * 32));
    };
    return iv_set;
  }

  static findVal(nature, stat_index){
    return PokemonObject.natureSets[nature][stat_index]
  };
}

// Initialize the PokeAPI Service and check the connection
const PokeAPIService = new PokeAPI();

// Initialize all the Encylopedias
const Berries = new PokedexService(PokeAPIService,'berries','berry/');
const Contests = new PokedexService(PokeAPIService,'contests','contest-type/');
const Encounters = new PokedexService(PokeAPIService,'encounters','encounter-method/');
const Evolutions = new PokedexService(PokeAPIService,'evolutions','evolution-chain/');
const Generations = new PokedexService(PokeAPIService,'generations','generation/');
const Items = new PokedexService(PokeAPIService,'items','item/');
const Locations = new PokedexService(PokeAPIService,'locations','location/');
const Machines = new PokedexService(PokeAPIService,'machines','machine/');
const Moves = new PokedexService(PokeAPIService,'moves','move/');
const Pokemon = new PokedexService(PokeAPIService,'pokemon','pokemon/');
