let circleSize = 1;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  drawBall();
  circleSize++;
}

function drawBall() {
  push();
  noStroke();
  fill(255);
  translate(width / 2, height / 2);
  ellipse(0, 0, circleSize);
  pop();
}
