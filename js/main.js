const Player = {
  pokemon: [],
  items: []
};


Pokemon.Get('Exeggutor');
Pokemon.Get('Diglett');

let aThing = (()=>{
  var done = false;
  var img = [false, false];

  return () => {
    if( Pokemon.pokemon.hasOwnProperty('diglett') && !img[0] ){
      document.querySelector("#party-slot-one .party-image").src = Pokemon.pokemon.diglett.sprites.front_default;
      img[0] = true;
      console.log("Diglett loaded");
    }
    if( Pokemon.pokemon.hasOwnProperty('exeggutor') && !img[1] ){
      document.querySelector("#party-slot-two .party-image").src = Pokemon.pokemon.exeggutor.sprites.front_default;
      img[1] = true;
      console.log("Exeggutor loaded");
    }
    if( img[0] && img[1] ){
      clearInterval(tempInterval)
    }
  }
})()

let tempInterval = setInterval(aThing, 1000)