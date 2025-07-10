const POKE_API_URL = "https://pokeapi.co/api/v2"
const get = {};

get.Berry = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/berry/${name_or_id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${name_or_id}`));
}

get.Contest = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/contest-type/${name_or_id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${name_or_id}`));
}

get.Encounter = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/encounter-method/${name_or_id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${name_or_id}`));
}

get.Evolution  = ( id ) => {
  return fetch(`${POKE_API_URL}/evolution-chain/${id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${id}`));
}

get.Game = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/generation/${name_or_id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${name_or_id}`));
}

get.Item = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/item/${name_or_id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${name_or_id}`));
}

get.Location = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/location/${name_or_id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${name_or_id}`));
}

get.Machine = ( id ) => {
  return fetch(`${POKE_API_URL}/machine/${id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${id}`));
}

get.Move = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/move/${name_or_id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${name_or_id}`));
}

get.Pokemon = ( name_or_id ) => {
  return fetch(`${POKE_API_URL}/pokemon/${name_or_id}`)
    .then( result => result.json() )
    .catch( Throw(`Did not find ${name_or_id}`));
}