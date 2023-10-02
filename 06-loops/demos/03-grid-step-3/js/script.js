function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);

  const nCells = 20;
  const cellWidth = width / nCells;
  const cellHeight = height / nCells;

  for (let column = 0; column < nCells; column++) {
    for (let row = 0; row < nCells; row++) {
      push();
      translate(
        column * cellWidth + cellWidth / 2,
        row * cellHeight + cellHeight / 2,
      );
      ellipse(0, 0, cellWidth, cellHeight);
      pop();
    }
  }
}
