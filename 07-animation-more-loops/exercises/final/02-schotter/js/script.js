let angle = 0;

function setup() {
  createCanvas(400, 600);
  background(0);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  const margin = 50;
  const nCols = 12;
  const rectSize = (width - 2 * margin) / nCols;
  const nRows = (height - 2 * margin) / rectSize;

  for (let row = 0; row < nRows; row++) {
    for (let column = 0; column < nCols; column++) {

      const xPos = column * rectSize;
      const yPos = row * rectSize;

      push();
      translate(margin, margin);
      drawElement(xPos, yPos, rectSize);
      angle += 0.2;
      pop();
    }
  }
}

const drawElement = (xPos, yPos, side) => {
  push();
  translate(xPos, yPos);

  const randomAngle = random(-angle, angle);
  rotate(randomAngle);

  stroke(255);
  strokeWeight(2);
  noFill();
  rect(0, 0, side, side);
  pop();
};
