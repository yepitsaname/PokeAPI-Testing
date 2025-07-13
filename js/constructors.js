const POKE_API_URL = "https://pokeapi.co/api/v2/";

const GetRequest = (object, name_or_id, pagenation) => {
  return fetch(`${POKE_API_URL}${object.path}` + (name_or_id ? name_or_id : '') + (pagenation ? `?limit=${pagenation}` : ''))
    .then(response => response.json() )
    .then( data => {
      name_or_id ?
        object[object.name][data.name] = data :
        data.results.forEach( entry => { object[object.name][entry.name] = entry });
    })
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`))
}

const Berries = {
  name: 'berries',
  path: 'berry/',
  berries: {},
  Get: name_or_id => GetRequest(Berries, name_or_id),
  GetAll: () => GetRequest(Berries, null, 60)
};

const Contests = {
  name: 'contests',
  path: 'contest-type/',
  contests: {},
  Get: name_or_id => GetRequest(Contests, name_or_id),
  GetAll: () => GetRequest(Contests)
};

const Encounters = {
  name: 'encounters',
  path: 'encounter-method/',
  encounters: {},
  Get: name_or_id => GetRequest(Encounters, name_or_id),
  GetAll: () => GetRequest(Encounters)
};

const Evolutions = {
  name: 'evolutions',
  path: 'evolution-chain/',
  evolutions: {},
  Get: id => GetRequest(Evolutions, id)
};

const Generations = {
  name: 'generations',
  path: 'generation/',
  generations: {},
  Get: name_or_id => GetRequest(Generations, name_or_id),
  GetAll: () => GetRequest(Generations, null, 60)
};

const Items = {
  name: 'items',
  path: 'item/',
  items: {},
  Get: name_or_id => GetRequest(Items, name_or_id),
  GetAll: () => GetRequest(Items, null, 60)
};

const Locations = {
  name: 'locations',
  path: 'location/',
  locations: {},
  Get: name_or_id => GetRequest(Locations, name_or_id),
  GetAll: () => GetRequest(Locations, null, 60)
};

const Machines = {
  name: 'machines',
  path: 'machine/',
  machines: {},
  Get: name_or_id => GetRequest(Machines, name_or_id),
  GetAll: () => GetRequest(Machines, null, 60)
};

const Moves = {
  name: 'moves',
  path: 'move/',
  moves: {},
  Get: name_or_id => GetRequest(Moves, name_or_id),
  GetAll: () => GetRequest(Moves, null, 60)
};

const Pokemon = {
  name: 'pokemon',
  path: 'pokemon/',
  pokemon: {},
  Get: name_or_id => GetRequest(Pokemon, name_or_id),
  GetAll: () => GetRequest(Pokemon, null, 60)
};
