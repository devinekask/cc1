let circleX;
let circleY;
let circleSize;
const stepSize = 1.5;

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  ellipse(circleX, circleY, circleSize);
  circleSize += stepSize;
}

function mousePressed() {
  circleX = mouseX;
  circleY = mouseY;
  circleSize = 0;
}
