function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);

  const nCells = 8;
  const cWidth = width / nCells;
  const cHeight = height / nCells;

  for (let column = 0; column < nCells; column++) {
    for (let row = 0; row < nCells; row++) {
      push();
      translate(column * cWidth, row * cHeight);
      ellipse(cWidth / 2, cHeight / 2, cWidth, cHeight);
      pop();
    }
  }
}
