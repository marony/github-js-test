enchant();

var GAME_WIDTH = 320;
var GAME_HEIGHT = 240;
var SPRITE_WIDTH = 32;
var SPRITE_HEIGHT = 32;

window.onload = function() {
  var game = new Game(GAME_WIDTH, GAME_HEIGHT);

  game.onload = function() {
    var sprite = new Sprite(SPRITE_WIDTH, SPRITE_HEIGHT);
    var surface = new Surface(SPRITE_WIDTH, SPRITE_HEIGHT);
    var ctx = surface.context;
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI*2, true);
    ctx.fill();
    sprite.image = surface;

    sprite.x = GAME_WIDTH / 2;
    sprite.y = GAME_HEIGHT / 2;
    sprite.dx = Math.floor(Math.random() * 10);
    sprite.dy = Math.floor(Math.random() * 10);
    sprite.gravity = 9.8 / 3;

    sprite.onenterframe = function() {
      this.x += this.dx;
      this.y += this.dy;

      this.dy += this.gravity;

      if (this.x < 0) {
        this.x = 0;
        this.dx = -1 * this.dx;
      }
      else if (this.x > GAME_WIDTH - SPRITE_WIDTH) {
        this.x = GAME_WIDTH - SPRITE_WIDTH;
        this.dx = -1 * this.dx;
      }
      if (this.y < 0) {
      }
      else if (this.y > GAME_HEIGHT - SPRITE_HEIGHT) {
        this.y = GAME_HEIGHT - SPRITE_HEIGHT;
        this.dy = -Math.floor(Math.random() * 50);
      }
    }

    this.rootScene.addChild(sprite);

    this.fps = 15;
    this.rootScene.backgroundColor = 'rgb(0, 0, 0)';
  }
  game.start();
}
