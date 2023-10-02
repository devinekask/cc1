function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);

  const nCells = 8;
  const cWidth = width / nCells;

  for (let column = 0; column < nCells; column++) {
    ellipse(cWidth / 2 + column * cWidth, 25, cWidth, 50);
  }
}
