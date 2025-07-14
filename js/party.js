// Dependent on requests.js
const Party = {
  slot: [{name: 'diglett'},{name: 'diglett'},{name: 'diglett'},{name: 'diglett'},{name: 'diglett'},{name: 'diglett'}],
  loadSlot(index, condition, pokemon){
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
  },
  initialLoad: (() => {
    const loadFunction = (()=>{
      var img = [false, false, false, false, false, false];
      return () => {
        img.forEach((element, index) => element = Party.loadSlot(index,!element, Party.slot[index].name))
        if( img.every(element => element == true) ){ clearInterval(Party.initialLoad) }
      }
    })()

    return setInterval(loadFunction, 100);
  })()

};


Party.setUp = (()=>{
  const setUp = ()=>{
    Party.slot.forEach( pokemon => {
      pokemon.iv = {
        hp: 0,
        atk: 0,
        def: 0,
        'sp atk': 0,
        'sp def': 0,
        spd: 0
      }
      pokemon.ev = {
        hp: 0,
        atk: 0,
        def: 0,
        'sp atk': 0,
        'sp def': 0,
        spd: 0
      }
      pokemon.stat = {
        hp: 0,
        atk: 0,
        def: 0,
        'sp atk': 0,
        'sp def': 0,
        spd: 0
      }
      pokemon.growth = {
        hp: 0,
        atk: 0,
        def: 0,
        'sp atk': 0,
        'sp def': 0,
        spd: 0
      }
    })
  }
  setUp();
  return setUp;
})()

/* Pokemon Stat Calcs
  HP = [(2Base + Iv + [Ev/4]) * Lv / 100] + Lv + 10
  Stat = ([(2Base + Iv + [Ev/4]) * Lv / 100] + 5) * Nature
*/