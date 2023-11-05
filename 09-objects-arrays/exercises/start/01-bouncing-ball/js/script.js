let xPos = 50;
let xStep = 1;

let yPos = 50;
let yStep = 1.5;

const circleSize = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(0);
  ellipse(xPos, yPos, circleSize);

  xPos = xPos + xStep;
  yPos = yPos + yStep;

  const circleRadius = circleSize / 2;

  const touchedRight = xPos >= width - circleRadius;
  const touchedLeft = xPos <= 0 + circleRadius;

  const touchedBottom = yPos >= height - circleRadius;
  const touchedTop = yPos <= 0 + circleRadius;

  if (touchedLeft || touchedRight) {
    xStep = xStep * -1;
  } else if (touchedTop || touchedBottom) {
    yStep = yStep * -1;
  }
}
