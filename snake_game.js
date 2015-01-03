var x = 350;
var y = 350;
var dx = 0;
var dy = 1;
var SNAKE_HEAD = 20;
var ctx;
var canvas=document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var WIDTH = ctx.canvas.width
var HEIGHT = ctx.canvas.height

function keyUp() {

}

function keyDown() {
  var handled = true;

  switch (event.keyCode) {

  case RIGHT_KEY:
    dx = 1;
    dy = 0;
    break;
  case LEFT_KEY:
    dx = -1;
    dy = 0;
    break;
  case UP_KEY:
    dx = 0;
    dy = -1;
    break;
  case DOWN_KEY:
    dx = 0;
    dy = 1;
    break;
  default:
    handled = false;
    break;
  }

  if (handled) {
    event.preventDefault();
  }

}

// GAME LOGIC

function check() {
  if(x <= 0 || x >= WIDTH - SNAKE_HEAD || y <= 0 || y >= HEIGHT - SNAKE_HEAD){
    return false;
  }
  return true;
}

function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);

  ctx.fillRect(x, y, SNAKE_HEAD, SNAKE_HEAD);

  x += dx;
  y += dy;
}

function loop(time) {
  draw();

  if (check()) {
    window.requestAnimationFrame(function(time) {
      loop(time);
    });
  }
}

function run() {
  window.onkeydown = keyDown;
  window.onkeyup = keyUp;

  window.requestAnimationFrame(function(time) {
    loop(time);
  });
}

run();
