/* Contains all battling logic and battle screen drawing */
const Battles = { };
Battles.canvas = document.getElementById('battles-screen');
Battles.context = Battles.canvas.getContext('2d');

Battles.resizeScreen = () => {
  Battles.canvas.height = Battles.canvas.clientHeight;
  Battles.canvas.width = Battles.canvas.clientWidth;
}

Battles.drawScreen = (() => {
  var animationInterval = 1;
  var frame = 0;
  var isReversed = false;
  var multiplier = 1;

  const mainAnimation = () => {
    let offset = frame * multiplier;

    Battles.context.clearRect(0,0,Battles.canvas.width,Battles.canvas.height);
    Battles.activeSprites.update();
    Battles.context.drawImage(Battles.activeSprites.player,0,(200 - offset),200,200)
    Battles.context.drawImage(Battles.activeSprites.enemy,400,(0 - offset),200,200)

    if( isReversed == false ) {
      frame > animationInterval ? isReversed = true : frame++;
    } else {
      frame < 0 ? isReversed = false : frame--;
    }
  }

  return function () {
    mainAnimation();
  }
  //Draw pokemon statuses
})();

Battles.activeSprites = {
  player: document.querySelector('#battles-player'),
  enemy: document.querySelector('#battles-enemy')
};

Battles.activeSprites.update = () => {
  Battles.activeSprites.player = document.querySelector('#battles-player');
  Battles.activeSprites.enemy = document.querySelector('#battles-enemy');
}

Battles.running = null;
Battles.start = () => {
  Battles.running = setInterval(Battles.drawScreen, 100);
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

Battles.resizeScreen();


let myInterval = setInterval(()=> {
  if( Pokemon.pokemon.hasOwnProperty('exeggutor') && Pokemon.pokemon.hasOwnProperty('diglett') ){
    document.querySelector('#battles-player').src = Pokemon.pokemon.diglett.sprites.back_default;
    document.querySelector('#battles-enemy').src = Pokemon.pokemon.exeggutor.sprites.front_default;
    Battles.activeSprites.update();
    Battles.start()
    clearInterval(myInterval)
  }
}, 1000)

