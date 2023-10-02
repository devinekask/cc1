function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);

  const nCells = 5;
  const cellWidth = width / nCells;
  const cellHeight = height / nCells;

  for (let column = 0; column < nCells; column++) {
    ellipse(
      cellWidth / 2 + column * cellHeight,
      cellWidth / 2,
      cellWidth,
      cellHeight,
    );
  }

  for (let row = 0; row < nCells; row++) {
    ellipse(
      cellWidth / 2,
      cellHeight / 2 + row * cellHeight,
      cellWidth,
      cellHeight,
    );
  }
}
