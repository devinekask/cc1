function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(0);
  stroke(255);

  const margin = 20; //  margin around the grid
  const numberOfColumns = 10;
  const numberOfRows = 10;

  // calculate the cell width taking into account the margin
  const cellWidth = (width - 2 * margin) / numberOfColumns;
  const cellHeight = (height - 2 * margin) / numberOfRows;

  for (let column = 0; column < numberOfColumns; column++) {
    for (let row = 0; row < numberOfRows; row++) {
      push();
      translate(margin, margin);
      translate(column * cellWidth, row * cellHeight);
      rect(0, 0, cellWidth, cellHeight);
      pop();
    }
  }
}
