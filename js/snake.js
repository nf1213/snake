function Snake(size) {
  this.size = size;
  this.segements = [new SnakeSegement(5, 5, this.size), new SnakeSegement(4, 5, this.size)];
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

  this.addSegement = function() {
    /*
      adds snake to end of segements array,
      x and y values depending on last segements direction
    */
  }
}
