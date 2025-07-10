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

const Evolutions = { Get: {}, GetAll: {}, path: 'evolution-chain/'};
const Generations = { Get: {}, GetAll: {}, path: 'generation/'}
const Items = { Get: {}, GetAll: {}, path: 'item/'};
const Locations = { Get: {}, GetAll: {}, path: 'location/'};
const Machines = { Get: {}, GetAll: {}, path: 'machine/'};
const Moves = { Get: {}, GetAll: {}, path: 'move/'};
const Pokemon = { Get: {}, GetAll: {}, path: 'pokemon/'};