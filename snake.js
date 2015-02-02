function Snake() {
  this.length = 1;
  this.size = 20;
  this.x = 350;
  this.y = 350;
  this.dx = 1;
  this.dy = 0;

  this.moveRight = function() {
    this.dx = 1;
    this.dy = 0;
  }

  this.moveLeft = function() {
    this.dx = -1;
    this.dy = 0;
  }

  this.moveUp = function() {
    this.dx = 0;
    this.dy = -1;
  }

  this.moveDown = function() {
    this.dx = 0;
    this.dy = 1;
  }
}
