let circleX = 0;
const circleY = 200;
const circleColour = "red";
const circleSize = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(circleColour);
  ellipse(circleX, circleY, circleSize);
  circleX++;
}
