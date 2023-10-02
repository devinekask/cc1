function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);

  const nCells = 5;
  const cellWidth = width / nCells;

  for (let column = 0; column < nCells; column++) {
    ellipse(cellWidth / 2 + column * cellWidth, 25, cellWidth, 50);
  }
}
