function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(0);
  stroke(255);

  const margin = 20;
  const numberOfColumns = 10;
  const numberOfRows = 10;

  const cellWidth = (width - 2 * margin) / numberOfColumns;
  const cellHeight = (height - 2 * margin) / numberOfRows;

  for (let column = 0; column < numberOfColumns; column++) {
    for (let row = 0; row < numberOfRows; row++) {
      push();
      translate(margin, margin);
      translate(column * cellWidth, row * cellHeight);

      // 1: first row red
      // if (row === 0) {
      //   fill(255, 0, 0);
      // }

      // 2: last column in red
      // if (column === numberOfColumns - 1) {
      //   fill(255, 0, 0);
      // }

      // 3: diagonal in red
      // if (column === row) {
      //   fill(255, 0, 0);
      // }

      // 4: random cells in red
      // frameRate(2);
      // if (random() > 0.7) {
      //   fill(255, 0, 0);
      // }

      // 5: chess pattern
      // if ((column + row) % 2 === 0) {
      //   fill(255, 0, 0);
      // }

      rect(0, 0, cellWidth, cellHeight);
      pop();
    }
  }

  rowRed++;
  columnRed++;
}
