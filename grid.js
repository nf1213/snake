function Grid(size) {
  this.size = size;
  this.cell_size = 10;

  this.initial = function() {
    var cells = [];

    for (var x = 0; x < this.size; x++) {
      var row = cells[x] = [];
      for (var y = 0; y < this.size; y++) {
        row.push(null);
      }
    }

    return cells;
  }

  this.cells = this.initial();
}
