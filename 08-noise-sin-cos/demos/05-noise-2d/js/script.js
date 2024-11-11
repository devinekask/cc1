function setup() {
  createCanvas(400, 400);
  frameRate(50);
}

function draw() {
  background(0);
  fill(255);

  const nCells = 100;
  const cWidth = width / nCells;
  const cHeight = height / nCells;

  for (let column = 0; column < nCells; column++) {
    for (let row = 0; row < nCells; row++) {
      push();
      translate(column * cWidth, row * cHeight);
      translate(cWidth / 2, cHeight / 2);

      noStroke();
      const chance = noise(column * 0.04, row * 0.04);

      if (chance < 0.5) {
        ellipse(0, 0, cWidth, cHeight);
      }
      pop();
    }
  }
}
