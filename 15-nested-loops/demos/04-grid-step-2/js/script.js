function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(0);
  stroke(255);

  const numberOfColumns = 10;
  const numberOfRows = 10;
  const cellWidth = width / numberOfColumns;
  const cellHeight = height / numberOfRows;

  // First row
  for (let column = 0; column < numberOfColumns; column++) {
    rect(column * cellWidth, 0, cellWidth, cellHeight);
  }

  // First column
  for (let row = 0; row < numberOfRows; row++) {
    rect(0, row * cellHeight, cellWidth, cellHeight);
  }
}
