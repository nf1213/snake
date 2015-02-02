function Grid(width, height, cellSize) {
  this.width = width;
  this.height = height;
  this.cell_size = cellSize;

  this.initial = function() {
    var cells = [];

    for (var x = 0; x < this.height; x++) {
      var row = cells[x] = [];
      for (var y = 0; y < this.width; y++) {
        row.push(null);
      }
    }

    return cells;
  }

  this.cells = this.initial();
}
