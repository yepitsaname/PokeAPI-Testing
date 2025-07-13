// Dependent on requests.js
const Party = {};
Party.slot = [{name: 'diglett'},{name: 'diglett'},{name: 'diglett'},{name: 'diglett'},{name: 'diglett'},{name: 'diglett'}]
Party.loadSlot = (index, condition, pokemon) => {
  const slot = [
    "#party-slot-one",
    "#party-slot-two",
    "#party-slot-three",
    "#party-slot-four",
    "#party-slot-five",
    "#party-slot-six"
  ];

  if( Pokemon.pokemon.hasOwnProperty(pokemon) && condition ){
    document.querySelector(`${slot[index]} .party-image`).src = Pokemon.pokemon[pokemon].sprites.front_default;
    document.querySelector(`${slot[index]} .party-image`).hidden = false;
    return true;
  }
  return false;
}
Party.initialLoad = (() => {

  const loadFunction = (()=>{
    var img = [false, false, false, false, false, false];

    return () => {
      img.forEach((element, index) => element = Party.loadSlot(index,!element, Party.slot[index].name))
      if( img.every(element => element == true) ){ clearInterval(Party.initialLoad) }
    }
  })()

  return setInterval(loadFunction, 100);
})()

