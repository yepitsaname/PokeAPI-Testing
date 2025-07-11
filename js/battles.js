/* Contains all battling logic and battle screen drawing */
const Battles = { };
Battles.canvas = document.getElementById('battle-screen');
Battles.context = Battles.canvas.getContext('2d');

Battles.resizeScreen = () => {
  Battles.canvas.height = Battles.canvas.clientHeight;
  Battles.canvas.width = Battles.canvas.clientWidth;
}

Battles.drawScreen = () => {
  //Battles.context.clearRect(0,0,Battles.canvas.width,Battles.canvas.height);
  Battles.activeSprites.update();
  Battles.context.drawImage(Battles.activeSprites.player,0,200)
  Battles.context.drawImage(Battles.activeSprites.enemy,400,0)
  // if( Battles.activeSprites.player ){ Battles.context.drawImage(Battles.activeSprites.player,0,200) };
  // if( Battles.activeSprites.enemy ){ Battles.context.drawImage(Battles.activeSprites.enemy,400,0) };

  //Draw pokemon statuses
};

Battles.activeSprites = {
  player: document.querySelector('#active-player'),
  enemy: document.querySelector('#active-enemy')
};

Battles.activeSprites.update = () => {
  Battles.activeSprites.player = document.querySelector('#active-player');
  Battles.activeSprites.enemy = document.querySelector('#active-enemy');
}

Battles.running = null;
Battles.start = () => {
  Battles.running = setInterval(Battles.drawScreen, 1000);
}

Battles.stop = clearInterval(Battles.running)

Battles.calcDamage = (move, pokemon) => {
  return null;
}

/* Battle Flow
  1 Player chooses attack or item
  2 Enemy chooses attack or item
  Case 1
*/

let myInterval = setInterval(()=> {
  if( Pokemon.pokemon.hasOwnProperty('exeggutor') && Pokemon.pokemon.hasOwnProperty('diglett') ){
    document.querySelector('#active-player').src = Pokemon.pokemon.exeggutor.sprites.back_default;
    document.querySelector('#active-enemy').src = Pokemon.pokemon.diglett.sprites.front_default;
    Battles.activeSprites.update();
    Battles.start()
    clearInterval(myInterval)
  }
}, 1000)