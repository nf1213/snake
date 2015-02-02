function SnakeSegement(x, y, size) {
  this.x = x;
  this.y = y;
  this.dx = 1;
  this.dy = 0;
  this.size = size;
  this.direction = "r";

  this.xLoc = function() {
    return this.x * this.size;
  }

  this.yLoc = function() {
    return this.y * this.size;
  }
}
