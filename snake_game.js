var snake = new Snake();
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
    snake.moveRight();
    break;
  case LEFT_KEY:
    snake.moveLeft();
    break;
  case UP_KEY:
    snake.moveUp()
    break;
  case DOWN_KEY:
    snake.moveDown()
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
  if(snake.x <= 0 || snake.x >= WIDTH - snake.size || snake.y <= 0 || snake.y >= HEIGHT - snake.size){
    return false;
  }
  return true;
}

function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);

  ctx.fillRect(snake.x, snake.y, snake.size * snake.length, snake.size);

  snake.x += snake.dx;
  snake.y += snake.dy;
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
