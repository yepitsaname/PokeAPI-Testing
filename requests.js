const POKE_API_URL = "https://pokeapi.co/api/v2/";

const GetRequest = (object, name_or_id) => {
  return fetch(`${POKE_API_URL}${object.path}${name_or_id}`)
    .then(response => response.json() )
    .then( data => object[object.name][data.name] = data)
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`))
}

const Berries = {
  name: 'Berries',
  path: 'berry/',
  Get: name_or_id => GetRequest(Berries, name_or_id),
  GetAll: () => GetRequest(Berries),
  Berries: {}
};
const Contests = { Get: {}, GetAll: {}, path: 'contest-type/'};
const Encounters = { Get: {}, GetAll: {},  path: 'encounter-method/'};
const Evolutions = { Get: {}, GetAll: {}, path: 'evolution-chain/'};
const Generations = { Get: {}, GetAll: {}, path: 'generation/'}
const Items = { Get: {}, GetAll: {}, path: 'item/'};
const Locations = { Get: {}, GetAll: {}, path: 'location/'};
const Machines = { Get: {}, GetAll: {}, path: 'machine/'};
const Moves = { Get: {}, GetAll: {}, path: 'move/'};
const Pokemon = { Get: {}, GetAll: {}, path: 'pokemon/'};


// Berries.Get = ( name_or_id ) => {
//     return fetch(`${POKE_API_URL}/berry/${name_or_id}`)
//     .then(response => response.json() )
//     .then( data => Berries.Berries[data.name] = data)
//     .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`))
// }

Contests.Get = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/contest-type/${name_or_id}`)
    .then( response => response.json() )

    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`));
}

Encounters.Get = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/encounter-method/${name_or_id}`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`));
}

Evolutions.Get  = ( id ) => {
  return fetch(`${POKE_API_URL}/evolution-chain/${id}`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${id}`));
}

Generations.Get = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/generation/${name_or_id}`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`));
}

Items.Get = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/item/${name_or_id}`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`));
}

Locations.Get = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/location/${name_or_id}`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`));
}

Machines.Get = ( id ) => {
  return fetch(`${POKE_API_URL}/machine/${id}`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${id}`));
}

Moves.Get = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/move/${name_or_id}`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`));
}

Pokemon.Get = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/pokemon/${name_or_id}`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find ${name_or_id}`));
}

Berries.GetAll = () => {
  return fetch(`${POKE_API_URL}/berry/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find berry listings`));
}

Contests.GetAll = () => {
  return fetch(`${POKE_API_URL}/contest-type/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find contest listings`));
}

Encounters.GetAll = () => {
  return fetch(`${POKE_API_URL}/encounter-method/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find encounter listings`));
}

Evolutions.GetAll  = () => {
  return fetch(`${POKE_API_URL}/evolution-chain/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find evolution listings`));
}

Generations.GetAll = () => {
  return fetch(`${POKE_API_URL}/generation/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find game listings`));
}

Items.GetAll = () => {
  return fetch(`${POKE_API_URL}/item/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find item listings`));
}

Locations.GetAll = () => {
  return fetch(`${POKE_API_URL}/location/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find location listings`));
}

Machines.GetAll = () => {
  return fetch(`${POKE_API_URL}/machine/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find TM/HM listings`));
}

Moves.GetAll = () => {
  return fetch(`${POKE_API_URL}/move/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find move listings`));
}

Pokemon.GetAll = () => {
  return fetch(`${POKE_API_URL}/pokemon/`)
    .then( response => response.json() )
    .catch( (error) => console.error("ERROR:", error, `\nLOCAL ERROR: Did not find pokemon listings`));
}