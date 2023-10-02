function setup() {
  createCanvas(400, 400);
  background(0);
  noLoop();
}

function draw() {
  const nRows = 10;
  const nColumns = nRows;
  const cellHeight = height / nRows;
  const cellWidth = width / nColumns;

  for (let row = 0; row < nRows; row++) {
    for (let column = 0; column < nColumns; column++) {
      push();
      translate(column * cellWidth, row * cellHeight);
      ellipse(cellWidth / 2, cellHeight / 2, cellWidth, cellHeight);
      pop();
    }
  }
}
