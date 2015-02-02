var snake = new Snake(15);
var ctx;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var WIDTH = ctx.canvas.width
var HEIGHT = ctx.canvas.height
//var grid = new Grid(WIDTH/snake.size, HEIGHT/snake.size, snake.size)

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
  if(snake.segements[0].xLoc() <= 0 || snake.segements[0].xLoc() >= WIDTH - snake.size || snake.segements[0].yLoc() <= 0 || snake.segements[0].yLoc() >= HEIGHT - snake.size){
    return false;
  }
  return true;
}

function draw() {
  for(var i = 0; i < snake.segements.length; i++) {
    snake.segements[i].x += snake.segements[i].dx
    snake.segements[i].y += snake.segements[i].dy
    ctx.fillRect(snake.segements[i].xLoc(), snake.segements[i].yLoc(), snake.size, snake.size);
  }
}

function loop(time) {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for(var i = 0; i < snake.segements.length; i++) {
    snake.segements[i].dx = snake.dx;
    snake.segements[i].dy = snake.dy;
    draw();
  }

  if (check()) {
    window.requestAnimationFrame(function(time) {
      loop(time);
    });
  }
}

function run() {
  window.onkeydown = keyDown;

  window.requestAnimationFrame(function(time) {
    loop(time);
  });
}

run();
