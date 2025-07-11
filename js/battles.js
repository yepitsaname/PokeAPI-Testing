/* Contains all battling logic and battle screen drawing */
const Battles = { };
Battles.canvas = document.getElementById('battle-screen');
Battles.context = Battles.canvas.getContext('2d');

Battles.resizeScreen = () => {
  Battles.canvas.height = Battles.canvas.clientHeight;
  Battles.canvas.width = Battles.canvas.clientWidth;
}

Battles.drawScreen = (playersprite, enemysprite) => {
  Battles.context.clearRect(0,0,Battles.canvas.width,Battles.canvas.height);

  if( playersprite ){ Battles.context.drawImage(playersprite,0,200) };
  if( enemysprite ){ Battles.context.drawImage(enemysprite,400,0) };

  //Draw pokemon statuses
};

Battles.running = null;
Battles.start = () => {
  Battles.running = setInterval(Battles.drawScreen, 1000);
}

Battles.stop = clearInterval(Battles.running)

Battles.calcDamage = (move, pokemon) => {
  return null;
}