let angle = 0;

function setup() {
  createCanvas(800, 400);
  noStroke();
  angleMode(DEGREES);
  background(0);
  noLoop();
}

function draw() {
  background(0);

  const nCells = 200;
  const cellSize = width / nCells;

  for (let i = 0; i < nCells; i++) {
    push();
    translate(0, height / 2);

    const yPos = sin(angle) * 75;
    const xPos = i * cellSize;

    strokeWeight(3);
    stroke(255);
    line(xPos, yPos, xPos, 0);

    angle += 5;

    pop();
  }
  //
}
