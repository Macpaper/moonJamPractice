import Player from '/player.js'


export default class Game {
  constructor(width, height) {
    this.gameWidth = width;
    this.gameHeight = height;
    this.gameObjects = [];
    this.player = new Player(this);
    this.start();
  }

  update() {
    this.gameObjects.forEach(e => {
      e.update();
    });
  }

  draw(c) {
    c.beginPath();
    c.arc(100, 100, 50, 0, Math.PI*2);
    c.fillStyle = "red";
    c.stroke();

    this.gameObjects.forEach(e => {
      e.draw(c);
    });
  }
  start() {
    this.gameObjects.push(this.player);
  }
}