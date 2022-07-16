export default class Input {
  constructor(game) {
    document.addEventListener("keydown", e => {
      if(e.key.toLowerCase() == 'w') {
        game.player.setUp(true);
      }
      if(e.key.toLowerCase() == 'a') {
        game.player.setLeft(true);
      }
      if(e.key.toLowerCase() == 'd') {
        game.player.setRight(true);
      }
      if(e.key.toLowerCase() == 's') {
        game.player.setDown(true);
      }
    });
    document.addEventListener("keyup", e => {
      if(e.key.toLowerCase() == 'w') {
        game.player.setUp(false);
      }
      if(e.key.toLowerCase() == 'a') {
        game.player.setLeft(false);
      }
      if(e.key.toLowerCase() == 'd') {
        game.player.setRight(false);
      }
      if(e.key.toLowerCase() == 's') {
        game.player.setDown(false);
      }
    });
  }
}