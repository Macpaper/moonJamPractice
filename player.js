import Input from '/input.js';
export default class Player {
  constructor(game) {
    this.game = game;
    this.x = 100;
    this.y = 100;
    this.dx = 0;
    this.dy = 0;
    this.accel = {
      x: 0,
      y: 0
    };

    this.speedMagnitude = 10;
    this.speed = this.speedMagnitude;

    this.up = false;
    this.left = false;
    this.right = false;
    this.down = false;
    new Input(this.game);
  }
  setUp(b) { this.up = b }
  setLeft(b) { this.left = b }
  setRight(b) { this.right = b }
  setDown(b) { this.down = b }
  update() {
    if((this.up&&this.left)||(this.up&&this.right)||(this.down&&this.left)||(this.down&&this.right)) {
      this.speed = this.speedMagnitude/Math.sqrt(2)
    } else {
      this.speed = this.speedMagnitude;
    }
    if(this.up) {
      this.dy = -this.speed;
    }
    if(this.left) {
      this.dx = -this.speed;
    }
    if(this.right) {
      this.dx = this.speed;
    }
    if(this.down) {
      this.dy = this.speed;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.dx = 0;
    this.dy = 0;
  }
  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, 5, 0, Math.PI*2);
    c.fillStyle = 'blue';
    c.stroke();
  }
}